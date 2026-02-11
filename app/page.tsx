'use client'

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeBots, setActiveBots] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Simulate bot count animation
    const interval = setInterval(() => {
      setActiveBots(prev => Math.min(prev + 1, 3));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            AdventureLand Bot Monitor
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            High-performance UI for monitoring and interacting with your AdventureLand MMORPG bots
          </p>
        </header>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
            <h3 className="text-gray-400 text-sm uppercase mb-2">Active Bots</h3>
            <p className="text-4xl font-bold text-white">{activeBots}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <h3 className="text-gray-400 text-sm uppercase mb-2">Status</h3>
            <p className="text-2xl font-semibold text-green-400">●  Online</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
            <h3 className="text-gray-400 text-sm uppercase mb-2">Performance</h3>
            <p className="text-2xl font-semibold text-cyan-400">Optimal</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <div className="text-cyan-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Real-time Monitoring</h3>
            <p className="text-gray-400">
              Track your bot activities, inventory, and stats in real-time with WebSocket connections
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <div className="text-purple-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">High Performance</h3>
            <p className="text-gray-400">
              Built with Next.js 15, React 19, and optimized for speed and responsiveness
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <div className="text-pink-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Interactive Controls</h3>
            <p className="text-gray-400">
              Send commands, update configurations, and manage your bots from a sleek interface
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <div className="text-green-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Secure Integration</h3>
            <p className="text-gray-400">
              Direct integration with AdventureLandBots repository with secure API connections
            </p>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">Getting Started</h2>
          <div className="space-y-3 text-gray-300">
            <p>📦 <span className="font-semibold">Install dependencies:</span> <code className="bg-black/30 px-2 py-1 rounded">npm install</code></p>
            <p>🚀 <span className="font-semibold">Start dev server:</span> <code className="bg-black/30 px-2 py-1 rounded">npm run dev</code></p>
            <p>🏗️ <span className="font-semibold">Build for production:</span> <code className="bg-black/30 px-2 py-1 rounded">npm run build</code></p>
            <p>🌐 <span className="font-semibold">Integration:</span> Connect to <a href="https://github.com/probablyanocelot/AdventureLandBots" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">AdventureLandBots</a></p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-400">
          <p>Built with Next.js 15, React 19, TypeScript & Tailwind CSS</p>
          <p className="mt-2">Optimized for speed, performance & reactiveness ⚡</p>
        </footer>
      </main>
    </div>
  );
}
