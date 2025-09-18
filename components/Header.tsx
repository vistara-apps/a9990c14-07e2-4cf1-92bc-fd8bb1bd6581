'use client';

import { mockUserStats } from '@/lib/mockData';

export function Header() {
  return (
    <header className="bg-surface shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Interactive Polls</h1>
          <p className="text-gray-600">Personalized Community Insights</p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-sm text-gray-500">Your Points</div>
            <div className="text-xl font-bold text-primary">
              {mockUserStats.points.toLocaleString()}
            </div>
          </div>
          
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200">
            <span>🎯</span>
            Create Poll
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-500">👤</span>
            <span className="text-sm text-gray-700">Guest User</span>
            <button className="text-gray-400 hover:text-gray-600">
              ⋯
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
