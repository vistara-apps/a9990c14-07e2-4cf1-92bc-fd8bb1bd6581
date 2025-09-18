export interface User {
  userId: string;
  telegramId: string;
  points: number;
  createdAt: Date;
}

export interface Poll {
  pollId: string;
  creatorId: string;
  prompt: string;
  options: PollOption[];
  createdAt: Date;
  expiresAt: Date;
  status: 'active' | 'completed' | 'expired';
  totalVotes: number;
  category: string;
  rewards: number;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
  percentage: number;
}

export interface PollVote {
  voteId: string;
  pollId: string;
  userId: string;
  chosenOption: string;
  votedAt: Date;
}

export interface Campaign {
  campaignId: string;
  externalId: string;
  prompt: string;
  options: PollOption[];
  createdAt: Date;
  status: 'active' | 'completed';
}

export interface MonetizationStats {
  totalRevenue: number;
  activeSubscriptions: number;
  premiumReports: number;
  campaignRevenue: number;
}
