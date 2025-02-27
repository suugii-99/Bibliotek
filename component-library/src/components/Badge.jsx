import React from 'react';

const Badge = ({ color, size, icon, children }) => {
  const sizeClasses = size === 'small' ? 'text-xs' : 'text-sm';
  const bgColor = color === 'blue' ? 'bg-blue-500' : 'bg-gray-500';

  return (
    <span className={`flex items-center ${sizeClasses} ${bgColor} text-white rounded-full px-2`}>
      <span className="mr-1">{icon}</span>
      {children}
    </span>
  );
};

export default Badge;
