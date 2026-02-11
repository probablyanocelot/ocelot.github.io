'use client'

import { useState, useEffect } from "react";
import BotCard from "@/components/BotCard";
import StatCard from "@/components/StatCard";
import Link from "next/link";

export default function Dashboard() {
  // Sample bot data - in production, this would come from your AdventureLandBots API
  const [bots, setBots] = useState([
    { 
      id: 1, 
      name: 'Warrior Bot', 
      status: 'online' as const, 
      level: 42, 
      gold: 150000,
      hp: 850,
      maxHp: 1200,
      mp: 450,
      maxMp: 600
    },
    { 
      id: 2, 
      name: 'Mage Bot', 
      status: 'online' as const, 
      level: 38, 
      gold: 89000,
      hp: 520,
      maxHp: 650,
      mp: 950,
      maxMp: 1100
    },
    { 
      id: 3, 
      name: 'Ranger Bot', 
      status: 'idle' as const, 
      level: 35, 
      gold: 45000,
      hp: 680,
      maxHp: 800,
      mp: 380,
      maxMp: 450
    },
  ]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setBots(prev => prev.map(bot => {
        if (bot.status === 'online') {
          return {
            ...bot,
            gold: bot.gold + Math.floor(Math.random() * 100),
            hp: Math.min(bot.maxHp, bot.hp + Math.floor(Math.random() * 10)),
            mp: Math.max(bot.maxMp * 0.3, bot.mp - Math.floor(Math.random() * 5))
          };
        }
        return bot;
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const activeBots = bots.filter(b => b.status === 'online').length;
  const totalGold = bots.reduce((sum, bot) => sum + bot.gold, 0);
  const avgLevel = Math.floor(bots.reduce((sum, bot) => sum + bot.level, 0) / bots.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
              🎮 Bot Monitor
            </Link>
            <div className="flex gap-4">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/dashboard" className="text-cyan-400 font-semibold">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Bot Dashboard
          </h1>
          <p className="text-gray-300">Real-time monitoring of your AdventureLand bots</p>
        </header>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard 
            title="Active Bots" 
            value={activeBots} 
            color="cyan"
          />
          <StatCard 
            title="Total Bots" 
            value={bots.length} 
            color="purple"
          />
          <StatCard 
            title="Total Gold" 
            value={`${(totalGold / 1000).toFixed(1)}k`}
            color="green"
          />
          <StatCard 
            title="Avg Level" 
            value={avgLevel}
            color="pink"
          />
        </div>

        {/* Bot Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Your Bots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bots.map(bot => (
              <BotCard key={bot.id} {...bot} />
            ))}
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-2 text-gray-300 font-mono text-sm">
            <p>[{new Date().toLocaleTimeString()}] ⚔️ Warrior Bot defeated Monster +1250 XP</p>
            <p>[{new Date().toLocaleTimeString()}] 💰 Mage Bot looted 450 gold</p>
            <p>[{new Date().toLocaleTimeString()}] 🏹 Ranger Bot moved to new location</p>
            <p>[{new Date().toLocaleTimeString()}] ⚔️ Warrior Bot looted Epic Sword</p>
            <p className="text-yellow-400">[{new Date().toLocaleTimeString()}] ⚠️ Ranger Bot entered idle mode</p>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-400">
        <p>Connected to AdventureLandBots • Real-time Updates Active ⚡</p>
      </footer>
    </div>
  );
}
