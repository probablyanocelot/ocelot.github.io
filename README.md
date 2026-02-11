# ocelot.github.io

![AdventureLand Bot Monitor](https://github.com/user-attachments/assets/fc427c1d-9e56-4d04-bda2-92c330139167)

A high-performance Next.js application for monitoring and interacting with AdventureLand MMORPG bots. Built with React, TypeScript, and Tailwind CSS, prioritizing speed, performance, and reactiveness.

## 🎮 Project Overview

This project provides UI features to monitor and interact with bots from [github.com/probablyanocelot/AdventureLandBots](https://github.com/probablyanocelot/AdventureLandBots). May expand as an overall portfolio project.

## ✨ Features

- 🎯 **Real-time Bot Monitoring** - Track bot activities, stats, and status
- ⚡ **High Performance** - Built with Next.js 15 and React 19 for optimal speed
- 📊 **Interactive Dashboard** - View detailed bot information and statistics
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- 🔄 **Live Updates** - Real-time data updates for active bots
- 🚀 **Static Export** - Optimized for GitHub Pages deployment

## 🛠️ Tech Stack

- **Next.js 16** - App Router with static export for optimal performance
- **React 19** - Latest React features with async components
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS 4** - Utility-first styling with modern features
- **Turbopack** - Ultra-fast bundler for development

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/probablyanocelot/ocelot.github.io.git
cd ocelot.github.io

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server (after build)
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
ocelot.github.io/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Bot monitoring dashboard
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── BotCard.tsx       # Individual bot display card
│   └── StatCard.tsx      # Statistics card component
├── docs/                  # Documentation
│   └── INTEGRATION.md    # Bot integration guide
├── public/               # Static assets
└── next.config.ts        # Next.js configuration

## 🔗 Integration with AdventureLandBots

Currently, the dashboard displays mock data. To integrate with your actual bot backend:

1. Read the [Integration Guide](./docs/INTEGRATION.md)
2. Set up your bot API endpoints
3. Configure environment variables
4. Update the dashboard to fetch real data

See [docs/INTEGRATION.md](./docs/INTEGRATION.md) for detailed instructions.

## 🌐 Deployment

### GitHub Pages (Automated)

This project is configured to automatically deploy to GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions will build and deploy automatically
3. Access your site at `https://probablyanocelot.github.io`

### Manual Deployment

```bash
# Build the static site
npm run build

# The static files will be in the 'out' directory
# Deploy the 'out' directory to any static hosting service
```

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. Customize colors and themes in:
- `app/globals.css` - Global styles and CSS variables
- `app/page.tsx` - Home page styling
- `app/dashboard/page.tsx` - Dashboard styling

### Components

Reusable components are in the `components/` directory:
- `BotCard.tsx` - Displays individual bot information
- `StatCard.tsx` - Shows statistical information

## 🔮 Future Enhancements

- [ ] WebSocket integration for real-time updates
- [ ] Bot command interface
- [ ] Inventory management UI
- [ ] Skill and ability monitoring
- [ ] Combat log viewer
- [ ] Map and location tracking
- [ ] Multi-character support
- [ ] Dark/light theme toggle

## 📄 License

This project is part of a personal portfolio and is available for reference.

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

