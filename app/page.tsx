'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { PollCard } from '@/components/PollCard';
import { StatsCard } from '@/components/StatsCard';
import { MonetizationCard } from '@/components/MonetizationCard';
import { RightSidebar } from '@/components/RightSidebar';
import { CreatePoll } from '@/components/CreatePoll';
import { PollAnalytics } from '@/components/PollAnalytics';
import { Rewards } from '@/components/Rewards';
import { CampaignManager } from '@/components/CampaignManager';
import { mockPolls, mockUserStats } from '@/lib/mockData';
import { Poll } from '@/lib/types';

export default function HomePage() {
  const [polls, setPolls] = useState(mockPolls);
  const [userStats, setUserStats] = useState(mockUserStats);
  const [showCreatePoll, setShowCreatePoll] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState<Poll | null>(null);
  const [showRewards, setShowRewards] = useState(false);
  const [showCampaigns, setShowCampaigns] = useState(false);

  const handleVote = (pollId: string, optionId: string) => {
    setPolls(prevPolls =>
      prevPolls.map(poll => {
        if (poll.pollId === pollId) {
          const updatedOptions = poll.options.map(option => {
            if (option.id === optionId) {
              return { ...option, votes: option.votes + 1 };
            }
            return option;
          });

          const totalVotes = updatedOptions.reduce((sum, option) => sum + option.votes, 0);
          const optionsWithPercentages = updatedOptions.map(option => ({
            ...option,
            percentage: Math.round((option.votes / totalVotes) * 100)
          }));

          return {
            ...poll,
            options: optionsWithPercentages,
            totalVotes
          };
        }
        return poll;
      })
    );

    // Update user stats for voting
    setUserStats(prev => ({
      ...prev,
      pollsVoted: prev.pollsVoted + 1,
      points: prev.points + 5 // 5 points per vote
    }));
  };

  const handleCreatePoll = (newPoll: Poll) => {
    setPolls(prev => [newPoll, ...prev]);

    // Update user stats for creating poll
    setUserStats(prev => ({
      ...prev,
      pollsCreated: prev.pollsCreated + 1,
      points: prev.points + 10 // 10 points per poll created
    }));
  };

  const handleViewAnalytics = (poll: Poll) => {
    setShowAnalytics(poll);
  };

  const handleSidebarNavigate = (section: string) => {
    switch (section) {
      case 'polls':
        // Already on polls/dashboard
        break;
      case 'features':
        setShowRewards(true);
        break;
      case 'control':
        setShowCampaigns(true);
        break;
      default:
        // Handle other navigation items
        console.log('Navigate to:', section);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar */}
      <Sidebar onNavigate={handleSidebarNavigate} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="flex gap-6">
            {/* Content Area */}
            <div className="flex-1 space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <StatsCard
                  title="Polls Created"
                  value={userStats.pollsCreated}
                  subtitle="This month"
                  icon="📊"
                  color="blue"
                />
                <StatsCard
                  title="Votes Cast"
                  value={userStats.pollsVoted}
                  subtitle="Total participation"
                  icon="🗳️"
                  color="purple"
                />
                <StatsCard
                  title="Points Earned"
                  value={`${userStats.points} PTS`}
                  subtitle="Available to spend"
                  icon="💰"
                  color="green"
                />
              </div>

              {/* Polls Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {polls.slice(0, 4).map((poll) => (
                  <PollCard
                    key={poll.pollId}
                    poll={poll}
                    onVote={handleVote}
                    onViewAnalytics={handleViewAnalytics}
                  />
                ))}
                
                {/* Monetization Card */}
                <MonetizationCard />
                
                {/* Additional Poll */}
                {polls[4] && (
                  <PollCard
                    key={polls[4].pollId}
                    poll={polls[4]}
                    onVote={handleVote}
                    onViewAnalytics={handleViewAnalytics}
                  />
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <button
                  onClick={() => setShowCreatePoll(true)}
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors duration-200 font-medium"
                >
                  Create New Poll
                </button>
                <button
                  onClick={() => setShowRewards(true)}
                  className="bg-accent text-white px-6 py-3 rounded-md hover:bg-accent/90 transition-colors duration-200 font-medium"
                >
                  💰 Rewards Store
                </button>
                <button
                  onClick={() => setShowCampaigns(true)}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  📋 Campaign Manager
                </button>
              </div>
            </div>
            
            {/* Right Sidebar */}
            <RightSidebar />
          </div>
        </main>
      </div>

      {/* Modals */}
      {showCreatePoll && (
        <CreatePoll
          onPollCreated={handleCreatePoll}
          onClose={() => setShowCreatePoll(false)}
        />
      )}

      {showAnalytics && (
        <PollAnalytics
          poll={showAnalytics}
          onClose={() => setShowAnalytics(null)}
        />
      )}

      {showRewards && (
        <Rewards
          userPoints={userStats.points}
          onClose={() => setShowRewards(false)}
        />
      )}

      {showCampaigns && (
        <CampaignManager
          onClose={() => setShowCampaigns(false)}
        />
      )}
    </div>
  );
}
