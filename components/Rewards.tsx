'use client';

import { useState } from 'react';

interface RewardsProps {
  userPoints: number;
  onClose?: () => void;
}

const rewards = [
  {
    id: 'premium-report',
    name: 'Premium Analytics Report',
    description: 'Detailed community sentiment analysis',
    cost: 100,
    icon: '📊'
  },
  {
    id: 'featured-poll',
    name: 'Featured Poll Slot',
    description: 'Pin your poll to the top for 24 hours',
    cost: 50,
    icon: '📌'
  },
  {
    id: 'custom-badge',
    name: 'Custom Profile Badge',
    description: 'Show off your poll creation achievements',
    cost: 75,
    icon: '🏆'
  },
  {
    id: 'poll-boost',
    name: 'Poll Engagement Boost',
    description: 'Increase visibility of your poll',
    cost: 25,
    icon: '🚀'
  }
];

export function Rewards({ userPoints, onClose }: RewardsProps) {
  const [selectedReward, setSelectedReward] = useState<string | null>(null);

  const handleRedeem = (rewardId: string) => {
    const reward = rewards.find(r => r.id === rewardId);
    if (!reward) return;

    if (userPoints >= reward.cost) {
      // In a real app, this would make an API call
      alert(`Successfully redeemed ${reward.name}!`);
      setSelectedReward(null);
    } else {
      alert('Not enough points!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-surface rounded-lg shadow-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Rewards Store</h2>
              <p className="text-gray-600 mt-1">Redeem your points for exclusive features</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Points Balance */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Available Points</div>
                <div className="text-3xl font-bold text-gray-900">{userPoints.toLocaleString()}</div>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </div>

          {/* Rewards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {rewards.map((reward) => (
              <div
                key={reward.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedReward === reward.id
                    ? 'border-primary bg-primary-50'
                    : 'border-gray-200 hover:border-primary/50'
                }`}
                onClick={() => setSelectedReward(reward.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{reward.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{reward.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{reward.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-lg font-bold text-primary">{reward.cost} points</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRedeem(reward.id);
                        }}
                        disabled={userPoints < reward.cost}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                          userPoints >= reward.cost
                            ? 'bg-primary text-white hover:bg-primary/90'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        Redeem
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How to Earn Points */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">How to Earn Points</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-green-600">📝</div>
                <div>
                  <div className="font-medium text-gray-900">Create Polls</div>
                  <div className="text-sm text-gray-600">+10 points per poll</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-blue-600">🗳️</div>
                <div>
                  <div className="font-medium text-gray-900">Vote in Polls</div>
                  <div className="text-sm text-gray-600">+5 points per vote</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-purple-600">📈</div>
                <div>
                  <div className="font-medium text-gray-900">Popular Polls</div>
                  <div className="text-sm text-gray-600">Bonus for high engagement</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-orange-600">🎯</div>
                <div>
                  <div className="font-medium text-gray-900">Daily Login</div>
                  <div className="text-sm text-gray-600">+2 points daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

