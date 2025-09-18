'use client';

interface VoteButtonProps {
  variant?: 'default' | 'selected';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function VoteButton({ 
  variant = 'default', 
  onClick, 
  children, 
  className = '',
  disabled = false 
}: VoteButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`vote-button ${
        variant === 'selected' ? 'vote-button-selected' : 'vote-button-default'
      } ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}
