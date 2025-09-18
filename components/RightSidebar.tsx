import { mockUserStats } from '@/lib/mockData';

export function RightSidebar() {
  return (
    <div className="w-80 space-y-6">
      {/* User Stats */}
      <div className="poll-card bg-gray-800 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-medium">4.18%</span>
          </div>
        </div>
        <div className="text-sm opacity-80 mb-4">Features</div>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <div className="h-2 bg-white rounded-full" style={{ width: '4.18%' }}></div>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <span>😊</span>
            <span>Favorizations</span>
          </div>
          <div className="flex items-center gap-2">
            <span>👁️</span>
            <span>Alert on Options</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📱</span>
            <span>Receives Deputations</span>
          </div>
        </div>
      </div>

      {/* Monetization Options */}
      <div className="poll-card bg-gray-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-gray-800">Monetization Options</h3>
          <button className="text-gray-600 hover:text-gray-800">✕</button>
        </div>
        
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span>📊</span>
            <span>Available Options</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💼</span>
            <span>Available Features</span>
          </div>
        </div>
      </div>
    </div>
  );
}
