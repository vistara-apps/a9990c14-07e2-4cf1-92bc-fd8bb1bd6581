'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { PollCard } from '@/components/PollCard';
import { StatsCard } from '@/components/StatsCard';
import { MonetizationCard } from '@/components/MonetizationCard';
import { RightSidebar } from '@/components/RightSidebar';
import { mockPolls, mockUserStats } from '@/lib/mockData';

export default function HomePage() {
  const [polls, setPolls] = useState(mockPolls);

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
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar */}
      <Sidebar />
      
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
                  value={mockUserStats.pollsCreated}
                  subtitle="This month"
                  icon="📊"
                  color="blue"
                />
                <StatsCard
                  title="Votes Cast"
                  value={mockUserStats.pollsVoted}
                  subtitle="Total participation"
                  icon="🗳️"
                  color="purple"
                />
                <StatsCard
                  title="Rewards Earned"
                  value={`${mockUserStats.rewardsEarned} ARS`}
                  subtitle="Available to claim"
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
                  />
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors duration-200 font-medium">
                  Create New Poll
                </button>
                <button className="bg-accent text-white px-6 py-3 rounded-md hover:bg-accent/90 transition-colors duration-200 font-medium">
                  View Analytics
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium">
                  Export Data
                </button>
              </div>
            </div>
            
            {/* Right Sidebar */}
            <RightSidebar />
          </div>
        </main>
      </div>
    </div>
  );
}
