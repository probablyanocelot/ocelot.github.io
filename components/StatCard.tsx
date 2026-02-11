'use client'

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: string;
}

export default function StatCard({ title, value, icon, color = 'cyan' }: StatCardProps) {
  const colorClasses = {
    cyan: 'hover:border-cyan-400/50',
    purple: 'hover:border-purple-400/50',
    pink: 'hover:border-pink-400/50',
    green: 'hover:border-green-400/50',
  };

  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 ${colorClasses[color as keyof typeof colorClasses] || colorClasses.cyan} transition-all duration-300 hover:scale-105`}>
      {icon && <div className="mb-3">{icon}</div>}
      <h3 className="text-gray-400 text-sm uppercase mb-2">{title}</h3>
      <p className="text-4xl font-bold text-white">{value}</p>
    </div>
  );
}
