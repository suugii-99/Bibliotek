import React from 'react';

const Alert = ({ color, icon, children }) => {
  const colorClasses = color === 'red' 
    ? 'bg-red-100 text-red-700 border-red-500' 
    : 'bg-blue-100 text-blue-700 border-blue-500';

  return (
    <div className={`flex items-center p-4 mb-4 border-l-4 ${colorClasses} rounded`} role="alert">
      <span className="mr-2">{icon}</span>
      {children}
    </div>
  );
};

export default Alert;
