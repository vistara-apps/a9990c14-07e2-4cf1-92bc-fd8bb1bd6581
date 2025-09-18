'use client';

import { useState } from 'react';
import { Campaign } from '@/lib/types';

interface CampaignManagerProps {
  onClose?: () => void;
}

const mockCampaigns: Campaign[] = [
  {
    campaignId: 'camp1',
    externalId: 'brand123',
    prompt: 'Which product feature should we prioritize next?',
    options: [
      { id: 'opt1', text: 'Mobile App Redesign', votes: 245, percentage: 49 },
      { id: 'opt2', text: 'AI-Powered Search', votes: 156, percentage: 31 },
      { id: 'opt3', text: 'Advanced Analytics', votes: 98, percentage: 20 }
    ],
    createdAt: new Date('2024-01-10'),
    status: 'active'
  },
  {
    campaignId: 'camp2',
    externalId: 'influencer456',
    prompt: 'What type of content would you like to see more of?',
    options: [
      { id: 'opt1', text: 'Tutorial Videos', votes: 320, percentage: 64 },
      { id: 'opt2', text: 'Live Q&A Sessions', votes: 180, percentage: 36 }
    ],
    createdAt: new Date('2024-01-08'),
    status: 'completed'
  }
];

export function CampaignManager({ onClose }: CampaignManagerProps) {
  const [campaigns] = useState(mockCampaigns);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    prompt: '',
    options: ['', ''],
    budget: 100
  });

  const addOption = () => {
    if (newCampaign.options.length < 6) {
      setNewCampaign({
        ...newCampaign,
        options: [...newCampaign.options, '']
      });
    }
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...newCampaign.options];
    newOptions[index] = value;
    setNewCampaign({
      ...newCampaign,
      options: newOptions
    });
  };

  const handleCreateCampaign = () => {
    // In a real app, this would make an API call
    alert('Campaign created successfully! Our team will reach out with next steps.');
    setShowCreateForm(false);
    setNewCampaign({
      prompt: '',
      options: ['', ''],
      budget: 100
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-surface rounded-lg shadow-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Campaign Manager</h2>
              <p className="text-gray-600 mt-1">Manage your bespoke poll campaigns</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setShowCreateForm(true)}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              + Create New Campaign
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
              📊 View Analytics
            </button>
          </div>

          {/* Create Campaign Form */}
          {showCreateForm && (
            <div className="border rounded-lg p-4 mb-6 bg-gray-50">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Create New Campaign</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Question
                  </label>
                  <textarea
                    value={newCampaign.prompt}
                    onChange={(e) => setNewCampaign({...newCampaign, prompt: e.target.value})}
                    placeholder="What would you like to ask your audience?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Options
                  </label>
                  <div className="space-y-2">
                    {newCampaign.options.map((option, index) => (
                      <input
                        key={index}
                        type="text"
                        value={option}
                        onChange={(e) => updateOption(index, e.target.value)}
                        placeholder={`Option ${index + 1}`}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    ))}
                  </div>
                  {newCampaign.options.length < 6 && (
                    <button
                      onClick={addOption}
                      className="mt-2 text-primary hover:text-primary/80 transition-colors text-sm"
                    >
                      + Add Option
                    </button>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget ($)
                  </label>
                  <input
                    type="number"
                    value={newCampaign.budget}
                    onChange={(e) => setNewCampaign({...newCampaign, budget: parseInt(e.target.value) || 0})}
                    min="50"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <p className="text-sm text-gray-500 mt-1">Minimum budget: $50</p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleCreateCampaign}
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Create Campaign
                  </button>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Campaigns List */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Your Campaigns</h3>

            {campaigns.map((campaign) => (
              <div key={campaign.campaignId} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{campaign.prompt}</h4>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span>🆔 {campaign.externalId}</span>
                      <span>📅 {campaign.createdAt.toLocaleDateString()}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        campaign.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">
                      {campaign.options.reduce((sum, opt) => sum + opt.votes, 0)}
                    </div>
                    <div className="text-sm text-gray-500">Total Votes</div>
                  </div>
                </div>

                {/* Campaign Results */}
                <div className="space-y-2">
                  {campaign.options.map((option) => (
                    <div key={option.id} className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">{option.text}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{option.votes} votes</span>
                        <span className="text-sm text-gray-500">({option.percentage}%)</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Campaign Actions */}
                <div className="flex gap-2 mt-4 pt-4 border-t">
                  <button className="text-primary hover:text-primary/80 transition-colors text-sm">
                    📊 View Details
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
                    📤 Export Data
                  </button>
                  {campaign.status === 'active' && (
                    <button className="text-red-600 hover:text-red-800 transition-colors text-sm">
                      🛑 End Campaign
                    </button>
                  )}
                </div>
              </div>
            ))}

            {campaigns.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl mb-4">📋</div>
                <div>No campaigns yet</div>
                <div className="text-sm">Create your first campaign to get started</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

