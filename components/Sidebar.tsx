'use client';

import { useState } from 'react';

interface SidebarProps {
  className?: string;
  onNavigate?: (section: string) => void;
}

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊', active: true },
  { id: 'explore', label: 'Explore', icon: '🔍' },
  { id: 'mentions', label: 'Mentions', icon: '👥' },
  { id: 'campaigns', label: 'Your Campaigns', icon: '📋' },
  { id: 'polls', label: 'Polls', icon: '📊' },
  { id: 'delegates', label: 'Delegates', icon: '🎯' },
  { id: 'courses', label: 'Courses', icon: '📚' },
  { id: 'music', label: 'Music', icon: '🎵' },
  { id: 'news', label: 'News', icon: '📰' }
];

const bottomItems = [
  { id: 'features', label: 'Features', icon: '⚡' },
  { id: 'control', label: 'Control Panel', icon: '⚙️' }
];

export function Sidebar({ className = '', onNavigate }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className={`bg-gray-800 text-white w-64 min-h-screen flex flex-col ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="mt-4 bg-accent rounded-full px-3 py-1 text-sm font-medium">
          Dashboard
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveItem(item.id);
              onNavigate?.(item.id);
            }}
            className={`sidebar-item w-full text-left ${
              activeItem === item.id ? 'sidebar-item-active' : ''
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-700 space-y-1">
        {bottomItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveItem(item.id);
              onNavigate?.(item.id);
            }}
            className={`sidebar-item w-full text-left ${
              activeItem === item.id ? 'sidebar-item-active' : ''
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
        
        {/* User Profile */}
        <div className="flex items-center gap-3 px-4 py-2 mt-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
            M
          </div>
          <div>
            <div className="text-sm font-medium">Markevation</div>
            <div className="text-xs text-gray-400">Content Art Creator</div>
          </div>
        </div>
      </div>
    </div>
  );
}
