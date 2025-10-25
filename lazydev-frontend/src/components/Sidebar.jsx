import React from 'react';
import { List, Target, Trophy, Flame } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Practice Problems', icon: List, active: true },
    { name: 'Company Tagged', icon: Target, badge: 'New' },
    { name: 'Quizzes', icon: Trophy },
    { name: 'Stats', icon: Flame },
  ];

  const difficultyStats = [
    { level: 'Easy', completed: 24, total: 28, color: 'text-emerald-400', bgColor: 'bg-emerald-500' },
    { level: 'Medium', completed: 66, total: 101, color: 'text-amber-400', bgColor: 'bg-amber-500' },
    { level: 'Hard', completed: 10, total: 21, color: 'text-rose-400', bgColor: 'bg-rose-500' },
  ];

  return (
    <div className="fixed left-0 top-[81px] h-[calc(100vh-73px)] w-64 bg-gray-800 border-r border-gray-700 overflow-y-auto z-40">
      <div className="p-6">
        {/* Logo/Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Menu
          </h2>
        </div>

        {/* Menu Items */}
        <div className="space-y-2 mb-8">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                item.active
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </div>
              {item.badge && (
                <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-700 pt-6">
          <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
            Stats
          </h3>
          <div className="space-y-4">
            {difficultyStats.map((stat, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-semibold ${stat.color}`}>{stat.level}</span>
                  <span className="text-gray-400 text-sm">
                    {stat.completed} / {stat.total}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${stat.bgColor} rounded-full transition-all duration-500`}
                    style={{ width: `${(stat.completed / stat.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;