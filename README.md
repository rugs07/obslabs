# 🔮 ObsidianLabs

A stunning, immersive 3D web experience built with Next.js and React Three Fiber. ObsidianLabs features an explorable virtual vault with first-person controls, interactive environments, and cutting-edge visual effects.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.182-black?logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

## ✨ Features

- **🎮 First-Person Exploration** - Navigate through the 3D environment with smooth WASD + mouse controls
- **🌐 Multiple Areas** - Explore interconnected zones: Tech Lab, Data Center, and Portal Hub
- **💫 Interactive Elements** - Info panels, teleport pads, and reactive environments
- **🎨 Premium Visuals** - Neon aesthetics, particle effects, and post-processing
- **📱 Modern Stack** - Built with Next.js 16, React 19, and Three.js

## 🏗️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **React Three Fiber** | React renderer for Three.js |
| **Three.js** | 3D graphics engine |
| **Framer Motion** | Smooth animations |
| **GSAP** | Advanced animations |
| **TypeScript** | Type safety |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Yash123-dotcom/ObsLabs.git

# Navigate to the web directory
cd ObsLabs/web

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎮 Controls

| Key | Action |
|-----|--------|
| `W` | Move forward |
| `A` | Move left |
| `S` | Move backward |
| `D` | Move right |
| `Mouse` | Look around |
| `Click` | Interact with elements |

## 📁 Project Structure

```
ObsidianLabs/
└── web/
    ├── public/           # Static assets
    ├── src/
    │   ├── app/          # Next.js app router
    │   │   ├── vault/    # 3D vault experience
    │   │   │   ├── VaultScene.tsx
    │   │   │   ├── TechLab.tsx
    │   │   │   ├── DataCenter.tsx
    │   │   │   ├── PortalHub.tsx
    │   │   │   ├── TeleportPad.tsx
    │   │   │   └── ...
    │   │   └── page.tsx
    │   └── components/   # Reusable components
    └── package.json
```

## 🌟 Key Components

- **VaultScene** - Main 3D scene orchestration
- **ExplorerControls** - First-person camera controls
- **TechLab** - Interactive technology showcase area
- **DataCenter** - Holographic data visualization zone
- **PortalHub** - Teleportation hub with portal effects
- **TeleportPad** - Interactive teleportation points

## 📜 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Crafted & Written by <a href="https://github.com/Yash123-dotcom">Yash</a> ✍️
</p>
