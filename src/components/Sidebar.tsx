import React from 'react';

const Sidebar = () => {
  return (
    <aside
      className="hidden md:block w-64 p-4 shadow-lg rounded-r-2xl"
      style={{
        backgroundColor: 'var(--sidebar-bg)',
        color: 'var(--sidebar-text)',
      }}
    >
      <div className="flex items-center mb-8">
        <h1 className="text-2xl font-bold">My Store</h1>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="mr-2">🏠</span> Home
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="mr-2">📦</span> Orders
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="mr-2">🛒</span> Cart
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="mr-2">✉️</span> Messages
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="mr-2">👤</span> Profile
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
