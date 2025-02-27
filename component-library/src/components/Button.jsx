import React from 'react';

const Button = ({ size, color, disabled, children }) => {
  const sizeClasses = size === 'small' ? 'py-1 px-2 text-sm' : 'py-2 px-4 text-lg';
  const colorClasses = color === 'primary' 
    ? 'bg-blue-600 text-white hover:bg-blue-700' 
    : 'bg-gray-300 text-black hover:bg-gray-400';

  return (
    <button className={`rounded ${sizeClasses} ${colorClasses}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
