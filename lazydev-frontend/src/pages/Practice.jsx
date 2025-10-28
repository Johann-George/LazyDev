import React, { useState } from 'react';
import { Search, Grid, List, Trophy, Flame, Target } from 'lucide-react';
import Sidebar from '../components/Sidebar';

// Mock data for topics
const topicsData = [
  { id: 1, name: 'Arrays & Hashing', completed: 9, total: 9, difficulty: 'easy' },
  { id: 2, name: 'Two Pointers', completed: 5, total: 5, difficulty: 'easy' },
  { id: 3, name: 'Sliding Window', completed: 4, total: 6, difficulty: 'medium' },
  { id: 4, name: 'Stack', completed: 5, total: 7, difficulty: 'medium' },
  { id: 5, name: 'Binary Search', completed: 6, total: 7, difficulty: 'medium' },
  { id: 6, name: 'Linked List', completed: 8, total: 11, difficulty: 'medium' },
  { id: 7, name: 'Trees', completed: 12, total: 15, difficulty: 'medium' },
  { id: 8, name: 'Tries', completed: 0, total: 3, difficulty: 'hard' },
  { id: 9, name: 'Heap / Priority Queue', completed: 2, total: 3, difficulty: 'hard' },
  { id: 10, name: 'Backtracking', completed: 7, total: 9, difficulty: 'hard' },
  { id: 11, name: 'Graphs', completed: 10, total: 13, difficulty: 'hard' },
  { id: 12, name: 'Advanced Graphs', completed: 1, total: 6, difficulty: 'hard' },
  { id: 13, name: '1-D Dynamic Programming', completed: 10, total: 12, difficulty: 'medium' },
  { id: 14, name: '2-D Dynamic Programming', completed: 8, total: 11, difficulty: 'hard' },
];

const CircularProgress = ({ percentage, size = 80, strokeWidth = 6 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-700"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-emerald-500 transition-all duration-1000 ease-out"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-white">{Math.round(percentage)}%</span>
      </div>
    </div>
  );
};

const TopicCard = ({ topic }) => {
  const percentage = (topic.completed / topic.total) * 100;
  const isCompleted = topic.completed === topic.total;
  
  const difficultyColors = {
    easy: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30',
    medium: 'from-amber-500/20 to-amber-600/20 border-amber-500/30',
    hard: 'from-rose-500/20 to-rose-600/20 border-rose-500/30',
  };

  const difficultyBadgeColors = {
    easy: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    medium: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
    hard: 'bg-rose-500/20 text-rose-400 border-rose-500/40',
  };

  return (
    <div 
      className={`relative bg-gradient-to-br ${difficultyColors[topic.difficulty]} 
        border rounded-xl p-6 transition-all duration-300 
        hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 
        cursor-pointer group overflow-hidden`}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      {/* Completion badge */}
      {isCompleted && (
        <div className="absolute top-4 right-4">
          <div className="bg-emerald-500 rounded-full p-1.5">
            <Trophy className="w-4 h-4 text-white" />
          </div>
        </div>
      )}

      <div className="relative z-10 flex items-center justify-between gap-6">
        {/* Left side - Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            {topic.name}
          </h3>
          
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-sm px-3 py-1 rounded-full border ${difficultyBadgeColors[topic.difficulty]} font-semibold capitalize`}>
              {topic.difficulty}
            </span>
            <span className="text-gray-400 text-sm">
              {topic.completed} / {topic.total} problems
            </span>
          </div>

          {/* Linear progress bar */}
          <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Right side - Circular progress */}
        <div className="flex-shrink-0">
          <CircularProgress percentage={percentage} />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value, color, gradient }) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} border border-gray-700 rounded-xl p-6 
      hover:scale-105 transition-transform duration-300 cursor-pointer`}>
      <div className="flex items-center gap-4">
        <div className={`${color} p-3 rounded-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-gray-400 text-sm">{label}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default function Practice() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const totalProblems = topicsData.reduce((acc, topic) => acc + topic.total, 0);
  const completedProblems = topicsData.reduce((acc, topic) => acc + topic.completed, 0);
  const overallPercentage = Math.round((completedProblems / totalProblems) * 100);

  const filteredTopics = topicsData.filter(topic =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="ml-64">
        <div className="max-w-[1400px] mx-auto px-6 py-8">
          {/* Header Stats */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              NeetCode 150
            </h1>
            <p className="text-gray-400 mb-6">Track your progress across all topics</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard 
                icon={Target}
                label="Problems Solved"
                value={`${completedProblems} / ${totalProblems}`}
                color="bg-emerald-500"
                gradient="from-emerald-500/10 to-emerald-600/10"
              />
              <StatCard 
                icon={Trophy}
                label="Completion Rate"
                value={`${overallPercentage}%`}
                color="bg-cyan-500"
                gradient="from-cyan-500/10 to-cyan-600/10"
              />
              <StatCard 
                icon={Flame}
                label="Current Streak"
                value="7 days"
                color="bg-orange-500"
                gradient="from-orange-500/10 to-orange-600/10"
              />
            </div>
          </div>

          {/* Search and View Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 
                  text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 
                  focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </div>

            <div className="flex gap-2 bg-gray-800 p-1 rounded-lg border border-gray-700">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-emerald-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-emerald-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Topics Grid/List */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 lg:grid-cols-2' 
              : 'grid-cols-1'
          }`}>
            {filteredTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>

          {filteredTopics.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No topics found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}