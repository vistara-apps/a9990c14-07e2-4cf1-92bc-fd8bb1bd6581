import { mockMonetizationStats } from '@/lib/mockData';

export function MonetizationCard() {
  return (
    <div className="poll-card bg-gradient-to-r from-green-400 to-green-500 text-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-medium opacity-90">Monetization Options</h3>
          <div className="text-3xl font-bold mt-2">
            {mockMonetizationStats.totalRevenue}
          </div>
        </div>
        <div className="text-4xl opacity-80">💡</div>
      </div>
      
      <div className="space-y-2 text-sm opacity-90">
        <div className="flex justify-between">
          <span>Active Subscriptions</span>
          <span className="font-medium">{mockMonetizationStats.activeSubscriptions}</span>
        </div>
        <div className="flex justify-between">
          <span>Premium Reports</span>
          <span className="font-medium">{mockMonetizationStats.premiumReports}</span>
        </div>
        <div className="flex justify-between">
          <span>Campaign Revenue</span>
          <span className="font-medium">${mockMonetizationStats.campaignRevenue}</span>
        </div>
      </div>
      
      <button className="w-full mt-4 bg-white/20 hover:bg-white/30 rounded-md py-2 px-4 text-sm font-medium transition-colors duration-200">
        View Details
      </button>
    </div>
  );
}
