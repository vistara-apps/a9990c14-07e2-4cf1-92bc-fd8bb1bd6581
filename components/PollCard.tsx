'use client';

import { useState } from 'react';
import { Poll } from '@/lib/types';
import { VoteButton } from './VoteButton';

interface PollCardProps {
  poll: Poll;
  variant?: 'active' | 'completed';
  onVote?: (pollId: string, optionId: string) => void;
}

export function PollCard({ poll, variant = 'active', onVote }: PollCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (optionId: string) => {
    if (hasVoted || variant === 'completed') return;
    
    setSelectedOption(optionId);
    setHasVoted(true);
    onVote?.(poll.pollId, optionId);
  };

  const getCardColor = () => {
    switch (poll.category.toLowerCase()) {
      case 'technology':
        return 'from-blue-400 to-blue-500';
      case 'economics':
        return 'from-purple-400 to-purple-500';
      case 'music':
        return 'from-pink-400 to-pink-500';
      case 'finance':
        return 'from-green-400 to-green-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <div className="poll-card">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getCardColor()} flex items-center justify-center text-white font-bold text-sm`}>
          {poll.category.charAt(0)}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{poll.prompt}</h3>
          <p className="text-sm text-gray-500">{poll.category}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">
            {Math.max(...poll.options.map(o => o.percentage))}%
          </div>
          <div className="text-xs text-gray-500">Leading</div>
        </div>
      </div>

      {/* Poll Options */}
      <div className="space-y-2 mb-4">
        {poll.options.map((option) => (
          <div key={option.id} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">{option.text}</span>
              <span className="text-sm font-medium text-gray-900">{option.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full bg-gradient-to-r ${getCardColor()} transition-all duration-300`}
                style={{ width: `${option.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Vote Buttons */}
      {variant === 'active' && !hasVoted && (
        <div className="flex gap-2 mb-4">
          {poll.options.map((option) => (
            <VoteButton
              key={option.id}
              variant={selectedOption === option.id ? 'selected' : 'default'}
              onClick={() => handleVote(option.id)}
              className="flex-1"
            >
              {option.text.length > 15 ? `${option.text.substring(0, 15)}...` : option.text}
            </VoteButton>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span>💰 {poll.rewards.toLocaleString()} ARS</span>
          <span>📊 {poll.totalVotes.toLocaleString()} votes</span>
        </div>
        <div className="flex items-center gap-2">
          {hasVoted && <span className="text-green-600">✓ Voted</span>}
          <button className="text-blue-600 hover:text-blue-700 transition-colors">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
