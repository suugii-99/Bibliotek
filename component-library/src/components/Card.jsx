import React from 'react';

const Card = ({ href, imgAlt, imgSrc, children }) => {
  return (
    <a 
      href={href} 
      className="block max-w-xs mx-auto p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition duration-200 bg-white"
    >
      <img src={imgSrc} alt={imgAlt} className="w-full h-32 object-cover rounded-t-lg" />
      <div className="mt-2 text-gray-800">{Image.png}</div>
    </a>
  );
};

export default Card;
