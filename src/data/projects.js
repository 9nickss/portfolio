export const projects = [
        {
            slug: "shellcode-runner",
            name: "shellcode-runner",
            description: "A modular shellcode execution framework with encryption, obfuscation, and evasion techniques.",
            stack: "Rust",
            link: "https://github.com/9nickss/shellcode-runner",
            featured: true,
            longDescription: `A sophisticated Rust-based shellcode execution framework for x86-64 Linux systems, featuring dynamic code execution with integrated encryption and key management. This project demonstrates expertise in low-level systems programming, cryptography, and modular architecture design.

Key Technical Achievements

Core Capabilities:

Dynamic Shellcode Execution: Load and execute arbitrary x86-64 binary code in executable memory regions via mmap
Dual Encryption Support: Implemented both XOR and AES-128-GCM authenticated encryption with configurable key management
Automatic Key Resolution: Intelligent key parsing system that automatically detects encryption algorithms from file extensions and loads keys from .key files
Verbose Logging Infrastructure: Detailed execution tracing for debugging and security auditing

Architecture Highlights:

Modular Design: Separated concerns across four independent binaries (runner, encryptor, pipeline) sharing a common cryptography library
Trait-Based Abstraction: Generic Cipher trait enabling seamless algorithm switching at runtime.
Pipeline Tool: Convenience utility that chains encryption and execution in a single command

Technical Skills Demonstrated

Rust & Systems Programming: Unsafe code for memory management, FFI bindings (libc), pointer manipulation
Cryptography: Integration of industry-standard AES-GCM encryption with random nonce generation
Modular Rust Architecture: Workspace configuration, inter-crate dependencies, trait polymorphism
Command-line Tools: Argument parsing with clap, file I/O, process spawning
Security Considerations: Authenticated encryption, memory safety in unsafe contexts

Project Status

Actively maintained with planned features including polymorphic code generation, junk code injection, and advanced evasion techniques.`
        },
        {
             slug: "raytracer",
            name: "raytracer",
            description: "A sophisticated C++ ray tracing engine that renders 3D scenes with realistic lighting, shadows, and geometric transformations.",
            stack: "C++",
            link: "https://github.com/9nickss/raytracer",
            featured: false,
            longDescription: `A comprehensive C++ ray tracing engine designed for realistic 3D image synthesis. This EPITECH OOP project demonstrates advanced computer graphics techniques, mathematical precision, and professional software architecture through the implementation of a complete ray tracing pipeline.

Project Overview

EPITECH project but continued on my own.
The raytracer reads scene descriptions from configuration files and renders high-quality 3D images in PPM format. It combines sophisticated mathematical algorithms with object-oriented design patterns to create a scalable, extensible rendering system.

Core Features

Primitive Shapes:
• Spheres with smooth shading and accurate intersections
• Infinite planes for spatial boundaries and backgrounds
• Cylindrical surfaces with full 3D transformations
• Conical surfaces with configurable dimensions
• Limited cylinders with capped ends for finite geometry
• Limited cones with capped bases

Advanced Lighting System:
• Ambient lighting for global scene illumination
• Directional lights for sun-like parallel rays
• Point lights for omnidirectional illumination from specific positions
• Colored lights with RGB awareness for realistic color mixing
• Per-surface normal calculations for accurate shading

3D Transformations & Geometry:
• Full 3D rotations around arbitrary axes
• Non-uniform scaling of primitives
• Geometric shearing transformations
• Flexible camera control with arbitrary positioning and orientation

Rendering Capabilities:
• Accurate ray-primitive intersection calculations using mathematical formulas
• Recursive ray tracing for complex lighting scenarios
• Color blending based on lighting and surface properties
• PPM (Portable Pixmap) format output for universal compatibility

Technical Architecture

Object-Oriented Design:
• Factory patterns for object creation
• Modular component system (Camera, Lights, Primitives, Scene)
• Extensible architecture for adding new primitive types

Mathematical Foundation:
• Quadratic equation solving for sphere intersections
• Linear plane-ray intersection calculations
• Parametric surface equations for cylinders and cones
• Vector mathematics for normals and transformations

Configuration System:
• libconfig++ format for flexible scene definitions
• Support for multiple pre-configured example scenes (gallery, museum, backrooms, sci-fi corridor, plateau)
• Normalized color values (0.0 to 1.0) for precise color control

Build & Performance:
• C++17 compatible codebase with modern compiler optimizations
• -O2 compiler optimization for fast rendering
• Clang++ compilation for enhanced performance
• Makefile-based build system with clean/rebuild targets

Key Technical Achievements:
• Complex geometric calculations for multiple primitive types with proper intersection detection
• Sophisticated lighting model combining ambient, diffuse, and specular components
• Efficient memory management and ray termination strategies
• Professional project organization with clear separation of concerns

Project Structure:
Modular codebase organized into Camera, Math, Primitives, Lights, Factory, Scene, Rotation, and Transformations components, demonstrating enterprise-level software engineering practices.

Technologies: C++17, libconfig++, Object-Oriented Design, Computer Graphics, Mathematical Algorithms`
        },
        {
            slug: "myTeams",
            name: "myTeams",
            description: "EPITECH tek2 project -> CLI chatroom based on Microsoft Teams coded in C++",
            stack: "C++",
            link: "https://github.com/9nickss/myTeams",
            featured: false,
            longDescription: `A full-stack C++ application that implements a team collaboration and messaging system, similar to Microsoft Teams or Slack. The project demonstrates proficiency in network programming, systems design, and real-time communication protocols.

Overview

MyTeams is a client-server application that enables teams to communicate through channels, threads, and direct messaging. The system uses a custom binary TCP protocol for efficient network communication and implements asynchronous I/O handling for scalable server operations.

Key Features

Team Management: Create and manage teams with multiple channels
Channel Organization: Organize discussions within teams into dedicated channels
Threaded Conversations: Reply to messages in dedicated threads with nested comments
User Management: User authentication, session management, and user profiles
Real-time Events: Event-driven architecture for notifications and live updates
Persistent Storage: UUID-based resource management with persistence capabilities.

Technical Architecture

Client-Side (myteams_cli)

Command parser for user input interpretation
Network client with socket management
Binary protocol serialization/deserialization
Response handling and event processing
Text-based response parsing

Server-Side (myteams_server)

Poll-based asynchronous I/O for handling multiple concurrent connections
Command dispatcher for routing client requests
Domain models (Team, Channel, Thread, Comment, User)
Session and entity managers
UUID generation for resource identification

Technical Highlights

Language & Standards: C++20 with modern compiler practices (clang++)
Custom Protocol: Binary TCP protocol with fixed 6-byte headers and variable payloads
Concurrency: Poll-based multiplexing for efficient handling of multiple clients
Network Programming: Raw socket programming, non-blocking I/O, TCP/IP
Build System: Makefile-based compilation with modular architecture

Technologies Used

C++20
Berkeley sockets (TCP/IP)
UUID library (libuuid)
Poll-based event handling
Custom binary serialization protocol`
        },
        {
            slug: "42sh",
            name: "42sh",
            description: "EPITECH tek1 42sh Project -> Shell based on TCSH coded in C",
            stack: "C",
            link: "https://github.com/9nickss/42sh",
            featured: false,
            longDescription: `A fully-featured shell interpreter written in C that replicates core functionality of standard Unix shells (tcsh compatible). This project demonstrates deep understanding of Unix systems programming, process management, and command interpretation.

Key Features

10 Built-in Commands – Complete implementations of exit, env, setenv, unsetenv, cd, alias/unalias, set/unset, and command history
Advanced Command Parsing – Support for pipes, logical operators (&&, ||), and backtick command substitution
Wildcard Expansion – Glob pattern matching with *, ?, and [...] support
Variable Management – Local and environment variable expansion with proper scoping
Alias System – Create and manage command aliases for shell customization
Command History – Timestamped command history tracking and retrieval
Quote Handling – Proper escape sequence and quote processing (single, double, backslash)
Signal Handling – Graceful signal management during process execution
Process Management – Fork-based execution with exit status tracking

Technical Architecture

Custom Standard Library – Implemented utility functions (libmy) for string manipulation and memory management
Linked List Data Structure – Memory-efficient list implementation for dynamic storage (libmylist)
Modular Codebase – Separated concerns: parsing, execution, builtins, variable expansion, and pipes
Test Framework – Comprehensive test suite with tcsh compatibility validation (tester.sh)
Quote Inhibitor System – Sophisticated state machine for handling nested quotes and escape sequences

Technologies Used

C, POSIX system calls, Process forking, Pipes, Signal handling, File I/O

Learning Outcomes

This project demonstrates proficiency in low-level system programming, lexical analysis, command parsing, and multi-process coordination.`
        },
        {
            slug: "wolf3D",
            name: "wolf3D",
            description: "EPITECH tek1 FPS using raycasting -> Coded in C using CSFML",
            stack: "C",
            link: "https://github.com/9nickss/wolf3D",
            featured: false,
            longDescription: `A sophisticated, feature-rich 3D game engine built in C using SFML that implements classic Wolfenstein-style ray casting with modern game features. This project showcases advanced graphics programming, real-time rendering optimization, and complex game systems architecture.

Key Features

Ray Casting Engine – High-performance DDA (Digital Differential Analyzer) algorithm for rendering pseudo-3D environments with optimized wall rendering and perspective correction
Comprehensive Settings System – Modular settings framework with video, audio, control, and game preferences; multi-resolution support (windowed, fullscreen, windowed fullscreen)
Customizable Controls – Full keybind remapping system with persistent configuration and real-time key binding

Advanced Rendering

Dynamic FOV adjustments during movement
Particle effects system for dash visualization
Flashlight/spotlight effects with visual depth
Floor and ceiling rendering with proper perspective
Mini-map with player direction indicator

Player Mechanics – Movement system with rotation speed sensitivity, dash ability with visual effects, weapon system with attack animations
HUD System – Score tracking, elapsed time display with shadow effects, overlay management, visual dimming effects
Audio Integration – Master volume, music volume, and sound effects with slider controls and real-time adjustments
Robust UI Framework – Multi-page settings menu, button interactions, dropdown selectors, state management with smooth transitions

Technical Architecture

Ray Casting Precision – Column-by-column ray rendering with corrected distance calculations and wall dimension computation
State Management – Four-state system (main screen, menu, gameplay, end screen) with clean separation of concerns
Modular Rendering – Separate systems for player display, sprites, particles, weapons, and HUD elements
Memory Efficient Design – Linked list structures for menu navigation, sprite pooling, and particle management
Event-Driven Input – Comprehensive event handling for UI, movement, and gameplay interactions
Optimized Build System – Multiple compilation targets (normal, debug, optimized) with profiling support

Technologies Used

C, SFML (Graphics, Audio, Input, System), Ray Casting Algorithm, POSIX system calls, Math library (trigonometry)

Performance Highlights

Real-time 60 FPS rendering capability
Optimized ray tracing with early termination
Efficient sprite and particle rendering with depth sorting
Configurable FPS limiting for hardware compatibility`
        },
        {
            slug: "portfolio",
            name: "portfolio",
            description: "This portfolio",
            stack: "React / Vite / Tailwind",
            link: "https://github.com/9nickss/portfolio",
            featured: false,
            longDescription: `Overview

This portfolio serves as a comprehensive showcase of software engineering projects, demonstrating proficiency across multiple programming languages and domains. The application features dynamic project filtering, detailed project descriptions, and seamless navigation through a collection of academic and personal projects.

Key Features

Project Showcase – Display of featured and non-featured projects with rich descriptions and technical stack information
Dynamic Project Management – Centralized project data with support for extensive project details and metadata
Responsive Design – Mobile-first approach ensuring optimal viewing across all device sizes
Smooth Navigation – Multi-page application with intuitive navigation between hero, projects, and contact sections
Contact Integration – Direct communication channel for inquiries and collaboration opportunities
Modern UI/UX – Clean, professional design with Tailwind CSS styling and smooth animations

Technical Architecture

Component-Based Structure: Modular React components (Hero, Navbar, Projects, ProjectPage, Contact)
Data Management: Centralized project data store with support for slugs, descriptions, and long-form content
Routing: Client-side routing for seamless page transitions without full reloads
Performance Optimization: Vite for lightning-fast build times and development experience
Responsive Layout: Mobile-first CSS framework ensuring consistency across devices

Technical Highlights

Frontend Framework: React with modern hooks and functional components
Build Tool: Vite for optimized bundling and module replacement
Styling: Tailwind CSS for utility-first, responsive design
Architecture: Component composition with separation of concerns
Development Experience: Fast refresh cycles and intuitive development workflow

Technologies Used

React
Vite
Tailwind CSS
JavaScript (ES6+)
Component-based architecture`
        },
        {
            slug: "myWorld",
            name: "myWorld",
            description: "EPITECH tek1 world editor",
            stack: "C",
            link: "https://github.com/9nickss/myWorld",
            featured: false,
            longDescription: `A dynamic, interactive terrain editor built with C and SFML that allows users to sculpt and modify an isometric 3D landscape in real-time. This project demonstrates advanced graphics rendering, event handling, and game development fundamentals.

Key Features

Terrain Manipulation Tools – Three sculpting modes (raise, lower, flatten) with real-time visual feedback
Adjustable Brush System – Dynamic brush size control for precise or broad terrain modifications
Isometric Rendering – Custom projection system converting 2D tile coordinates to 3D isometric space with zoom and pan capabilities
Texture Support – Tile-based texture rendering with SFML vertex arrays
Interactive UI – Intuitive menu system with button interactions and audio feedback
Camera Controls – Smooth zooming and panning to navigate the terrain
Help System – Built-in controls guide for user accessibility

Technical Highlights

40×40 tile-based map with height mapping system
Custom isometric projection mathematics (45° and 35° angle calculations)
Event-driven architecture for responsive user input
Dynamic map regeneration on camera/terrain changes
Audio integration for interactive sound effects
Memory-safe resource management with cleanup procedures

Technologies Used

C, SFML (Graphics, Audio, Input), Mathematics (trigonometry for isometric projection)`
        },
        {
            slug: "G-Bot",
            name: "G-Bot",
            description: "Simple Discord bot for a server",
            stack: "JS",
            link: "https://github.com/moustiIIon/G-Bot",
            featured: false,
            longDescription: `A feature-rich Discord bot built with Discord.js that combines entertainment utilities, API integration, and guild management. Designed for community engagement and member interaction with both audio playback and data fetching capabilities.

Key Features

Voice Audio Commands – Multiple voice channel commands that join channels and play custom audio clips with proper error handling and connection management
Fortnite Shop Integration – Real-time Fortnite store data fetcher using external API with paginated embed display and interactive navigation buttons
Member Welcome System – Automated welcome messages with rich embeds for new guild members, including member count tracking and automatic role assignment
Modular Command Architecture – Clean command structure with support for slash commands and extensible utility modules
Event System – Robust event handling for client-ready status, guild member additions, and interaction creation
Dynamic Command Loading – Automatic command discovery and registration from filesystem with validation

Technical Implementation

Discord.js Integration – Full use of Discord.js 14+ with slash command builder, embed builders, and button interactions
Voice Module – @discordjs/voice for professional voice channel management, audio resource creation, and player status handling
API Integration – Asynchronous API calls with proper error handling and user feedback mechanisms
Event-Driven Architecture – Listener-based system for scalable event management
Guild Member Management – Role assignment and embed-based welcome messaging with member counting

Technologies Used

JavaScript, Node.js, Discord.js v14, @discordjs/voice, REST API Integration

Code Quality

Comprehensive error handling and logging
Deferred replies for API-dependent commands
File system validation for audio resources
Graceful connection cleanup and timeouts`
        },
    ]