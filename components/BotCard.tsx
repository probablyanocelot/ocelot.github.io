'use client'

interface BotCardProps {
  name: string;
  status: 'online' | 'offline' | 'idle';
  level?: number;
  gold?: number;
  hp?: number;
  maxHp?: number;
  mp?: number;
  maxMp?: number;
}

export default function BotCard({ 
  name, 
  status, 
  level = 1, 
  gold = 0,
  hp = 100,
  maxHp = 100,
  mp = 100,
  maxMp = 100
}: BotCardProps) {
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-red-500',
    idle: 'bg-yellow-500'
  };

  const hpPercent = (hp / maxHp) * 100;
  const mpPercent = (mp / maxMp) * 100;

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${statusColors[status]} animate-pulse`}></div>
          <span className="text-sm text-gray-300 capitalize">{status}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm text-gray-300">
          <span>Level: {level}</span>
          <span className="text-yellow-400">💰 {gold.toLocaleString()}g</span>
        </div>
        
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>HP</span>
            <span>{hp}/{maxHp}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${hpPercent}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>MP</span>
            <span>{mp}/{maxMp}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${mpPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
