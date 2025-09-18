interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: string;
  color?: 'blue' | 'green' | 'purple' | 'gray';
  className?: string;
}

export function StatsCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  color = 'gray',
  className = '' 
}: StatsCardProps) {
  const colorClasses = {
    blue: 'from-blue-400 to-blue-500',
    green: 'from-green-400 to-green-500',
    purple: 'from-purple-400 to-purple-500',
    gray: 'from-gray-400 to-gray-500'
  };

  return (
    <div className={`poll-card ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-gray-700">{title}</h3>
        {icon && (
          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${colorClasses[color]} flex items-center justify-center text-white text-sm`}>
            {icon}
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      {subtitle && (
        <p className="text-sm text-gray-500">{subtitle}</p>
      )}
    </div>
  );
}
