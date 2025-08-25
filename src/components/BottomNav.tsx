import React from 'react';

const BottomNav = () => {
  return (
    <div
      className="md:hidden fixed bottom-4 left-4 right-4 p-2 shadow-lg rounded-full flex justify-around items-center"
      style={{
        backgroundColor: 'var(--bottom-nav-bg)',
        color: 'var(--bottom-nav-text)',
      }}
    >
      <a href="#" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
        <span className="text-2xl">🏠</span>
      </a>
      <a href="#" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
        <span className="text-2xl">📦</span>
      </a>
      <a href="#" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
        <span className="text-2xl">🛒</span>
      </a>
      <a href="#" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
        <span className="text-2xl">✉️</span>
      </a>
      <a href="#" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
        <span className="text-2xl">👤</span>
      </a>
    </div>
  );
};

export default BottomNav;
