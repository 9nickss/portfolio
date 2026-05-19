import { useState } from 'react'

export function GlowBackground({ children }) {
    const [mousePos, setMousePos] = useState({ x: 50, y: 40 })

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePos({ x, y })
    }

    return (
        <div
            className="relative"
            onMouseMove={handleMouseMove}
        >
            {/* grid background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* grid hover glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3)) blur(0.5px)',
                    maskImage: `radial-gradient(ellipse 30% 35% at ${mousePos.x}% ${mousePos.y}%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 35%)`,
                }}
            />

            {/* radial glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background: `radial-gradient(ellipse 60% 50% at ${mousePos.x}% ${mousePos.y}%, rgba(99,102,241,0.12) 0%, transparent 35%)`,
                }}
            />

            {/* content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}
