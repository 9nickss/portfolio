// Pulls public repos (and their READMEs) from a GitHub user and writes them
// to src/data/githubProjects.json so they show up on the portfolio.
//
// Repos whose slug already exists in the hand-curated src/data/projects.js are
// skipped, so nothing gets added twice. Run with:  npm run fetch:projects
// Set GITHUB_TOKEN in the environment to raise the API rate limit (optional).

import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const GITHUB_USER = '9nickss'

// Repo name to mark as the "featured" project on the site (or null for none).
const FEATURED_REPO = 'shellcode-runner'

// Repos to never add: the profile README repo and any GitHub Pages site.
function isIgnored(name) {
    const n = name.toLowerCase()
    return n === GITHUB_USER.toLowerCase() || n.endsWith('.github.io')
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const projectsFile = resolve(root, 'src/data/projects.js')
const outFile = resolve(root, 'src/data/githubProjects.json')

const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': `${GITHUB_USER}-portfolio-fetcher`,
}
if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
}

async function gh(url, accept) {
    const res = await fetch(url, {
        headers: accept ? { ...headers, Accept: accept } : headers,
    })
    if (res.status === 404) return null
    if (!res.ok) {
        throw new Error(`GitHub API ${res.status} ${res.statusText} for ${url}`)
    }
    return res
}

// Collect slugs already present in the curated list so we never duplicate them.
async function existingSlugs() {
    const text = await readFile(projectsFile, 'utf8')
    const slugs = new Set()
    for (const m of text.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g)) {
        slugs.add(m[1].toLowerCase())
    }
    // Also match by the repo name inside any github.com link.
    for (const m of text.matchAll(/github\.com\/[^/\s"'`]+\/([^/\s"'`)]+)/g)) {
        slugs.add(m[1].toLowerCase())
    }
    return slugs
}

// Pull the first image out of a README and turn relative paths into absolute
// raw.githubusercontent.com URLs so they load outside GitHub.
const BADGE_RE = /shields\.io|badge|\.svg(\?|$)|travis|circleci|codecov|appveyor|img\.shields/i

function extractImage(readme, repo) {
    if (!readme) return null

    // Collect every image (markdown + <img>) in document order.
    const candidates = []
    for (const m of readme.matchAll(/!\[[^\]]*\]\(\s*<?([^)\s>]+)>?[^)]*\)/g)) {
        candidates.push({ i: m.index, src: m[1] })
    }
    for (const m of readme.matchAll(/<img[^>]*\ssrc=["']([^"']+)["']/gi)) {
        candidates.push({ i: m.index, src: m[1] })
    }
    candidates.sort((a, b) => a.i - b.i)

    // First one that isn't a status badge.
    const hit = candidates.find((c) => !BADGE_RE.test(c.src))
    if (!hit) return null
    let src = hit.src
    if (src.startsWith('//')) src = 'https:' + src
    if (/^https?:\/\//i.test(src)) {
        // Normalize GitHub blob links to raw.
        return src
            .replace('github.com', 'raw.githubusercontent.com')
            .replace('/blob/', '/')
            .replace('/raw/', '/')
    }
    const path = src.replace(/^\.?\//, '')
    return `https://raw.githubusercontent.com/${GITHUB_USER}/${repo.name}/${repo.default_branch}/${path}`
}

async function fetchReadme(repoName) {
    const res = await gh(
        `https://api.github.com/repos/${GITHUB_USER}/${repoName}/readme`,
        'application/vnd.github.raw+json',
    )
    if (!res) return null
    const text = await res.text()
    return text.trim() || null
}

async function main() {
    const skip = await existingSlugs()

    const reposRes = await gh(
        `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated&type=owner`,
    )
    if (!reposRes) {
        throw new Error(`User ${GITHUB_USER} not found`)
    }
    const repos = await reposRes.json()

    const out = []
    for (const repo of repos) {
        if (repo.fork || repo.archived || repo.private) continue
        if (isIgnored(repo.name)) {
            console.log(`skip (ignored): ${repo.name}`)
            continue
        }
        const slug = repo.name
        if (skip.has(slug.toLowerCase())) {
            console.log(`skip (already present): ${slug}`)
            continue
        }

        let readme = null
        try {
            readme = await fetchReadme(repo.name)
        } catch (err) {
            console.warn(`  README fetch failed for ${slug}: ${err.message}`)
        }
        const description =
            repo.description || `A ${repo.language || 'software'} project.`

        out.push({
            slug,
            name: repo.name,
            description,
            stack: repo.language || 'Other',
            link: repo.html_url,
            featured: repo.name === FEATURED_REPO,
            image: extractImage(readme, repo),
            longDescription: readme || description,
        })
        console.log(
            `added: ${slug}${readme ? ' (with README)' : ''}` +
                (extractImage(readme, repo) ? ' (with image)' : ''),
        )
    }

    // Don't wipe a good file if this run somehow produced nothing.
    if (out.length === 0) {
        let had = false
        try {
            had = JSON.parse(await readFile(outFile, 'utf8')).length > 0
        } catch {
            had = false
        }
        if (had) {
            console.warn('No repos pulled; keeping existing githubProjects.json')
            return
        }
    }

    out.sort((a, b) => a.name.localeCompare(b.name))
    await writeFile(outFile, JSON.stringify(out, null, 2) + '\n', 'utf8')
    console.log(`\nWrote ${out.length} repo(s) to ${outFile}`)
}

main().catch((err) => {
    console.error(err.message)
    process.exit(1)
})
