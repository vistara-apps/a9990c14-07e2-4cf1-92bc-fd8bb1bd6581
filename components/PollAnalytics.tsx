'use client';

import { Poll } from '@/lib/types';

interface PollAnalyticsProps {
  poll: Poll;
  onClose?: () => void;
}

export function PollAnalytics({ poll, onClose }: PollAnalyticsProps) {
  const totalVotes = poll.totalVotes;
  const timeRemaining = Math.max(0, Math.floor((poll.expiresAt.getTime() - Date.now()) / (1000 * 60 * 60)));
  const isExpired = timeRemaining <= 0;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-surface rounded-lg shadow-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Poll Analytics</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Poll Header */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-2">{poll.prompt}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>📊 {totalVotes} total votes</span>
              <span>🏷️ {poll.category}</span>
              <span>💰 {poll.rewards} points reward</span>
              <span className={isExpired ? 'text-red-500' : 'text-green-500'}>
                {isExpired ? '⏰ Expired' : `⏰ ${timeRemaining}h remaining`}
              </span>
            </div>
          </div>

          {/* Results Chart */}
          <div className="mb-8">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Vote Distribution</h4>
            <div className="space-y-4">
              {poll.options.map((option, index) => (
                <div key={option.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">
                      {index + 1}. {option.text}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-gray-900">{option.votes}</span>
                      <span className="text-sm text-gray-500">({option.percentage}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-primary-400 to-primary-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${option.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-900">{totalVotes}</div>
              <div className="text-sm text-gray-500">Total Votes</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-900">
                {poll.options.length > 0 ? Math.max(...poll.options.map(o => o.percentage)) : 0}%
              </div>
              <div className="text-sm text-gray-500">Highest Vote %</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-900">
                {poll.options.find(o => o.percentage === Math.max(...poll.options.map(opt => opt.percentage)))?.text || 'N/A'}
              </div>
              <div className="text-sm text-gray-500">Leading Option</div>
            </div>
          </div>

          {/* Time Series (Mock) */}
          <div className="mb-8">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Vote Activity Over Time</h4>
            <div className="bg-gray-50 rounded-lg p-4 h-48 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📈</div>
                <div>Activity chart would be displayed here</div>
                <div className="text-sm mt-1">Integration with charting library needed</div>
              </div>
            </div>
          </div>

          {/* Export Options */}
          <div className="border-t pt-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Export Data</h4>
            <div className="flex gap-3">
              <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                📊 Export as CSV
              </button>
              <button className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-colors">
                📈 Export as PDF Report
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                🔗 Share Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

