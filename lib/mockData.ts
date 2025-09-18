import { Poll, MonetizationStats } from './types';

export const mockPolls: Poll[] = [
  {
    pollId: '1',
    creatorId: 'user1',
    prompt: 'Current Trends',
    options: [
      { id: '1a', text: 'Innovative', votes: 432, percentage: 54 },
      { id: '1b', text: 'Traditional', votes: 368, percentage: 46 }
    ],
    createdAt: new Date('2024-01-15'),
    expiresAt: new Date('2024-01-22'),
    status: 'active',
    totalVotes: 800,
    category: 'Technology',
    rewards: 50
  },
  {
    pollId: '2',
    creatorId: 'user2',
    prompt: 'Rewards?',
    options: [
      { id: '2a', text: 'Earned', votes: 336, percentage: 56 },
      { id: '2b', text: 'Utility Rewards based network?', votes: 264, percentage: 44 }
    ],
    createdAt: new Date('2024-01-14'),
    expiresAt: new Date('2024-01-21'),
    status: 'active',
    totalVotes: 600,
    category: 'Economics',
    rewards: 75
  },
  {
    pollId: '3',
    creatorId: 'user3',
    prompt: 'Current Trends Points',
    options: [
      { id: '3a', text: 'Sub Pop', votes: 45, percentage: 9 },
      { id: '3b', text: 'Deep House Jazz Mixes', votes: 455, percentage: 91 }
    ],
    createdAt: new Date('2024-01-13'),
    expiresAt: new Date('2024-01-20'),
    status: 'active',
    totalVotes: 500,
    category: 'Music',
    rewards: 30
  },
  {
    pollId: '4',
    creatorId: 'user4',
    prompt: 'Current Trends',
    options: [
      { id: '4a', text: 'Fyes', votes: 475, percentage: 95 },
      { id: '4b', text: 'Nope', votes: 25, percentage: 5 }
    ],
    createdAt: new Date('2024-01-12'),
    expiresAt: new Date('2024-01-19'),
    status: 'active',
    totalVotes: 500,
    category: 'General',
    rewards: 40
  },
  {
    pollId: '5',
    creatorId: 'user5',
    prompt: 'Current Prewards',
    options: [
      { id: '5a', text: 'Reward', votes: 520, percentage: 65 },
      { id: '5b', text: 'Penalty free data contract spending', votes: 280, percentage: 35 }
    ],
    createdAt: new Date('2024-01-11'),
    expiresAt: new Date('2024-01-18'),
    status: 'active',
    totalVotes: 800,
    category: 'Finance',
    rewards: 60
  }
];

export const mockMonetizationStats: MonetizationStats = {
  totalRevenue: 1631,
  activeSubscriptions: 847,
  premiumReports: 234,
  campaignRevenue: 550
};

export const mockUserStats = {
  points: 4180,
  pollsCreated: 12,
  pollsVoted: 89,
  rewardsEarned: 340
};
