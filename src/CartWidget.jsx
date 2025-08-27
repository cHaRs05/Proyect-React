import React from 'react';

const CartWidget = () => {
  return (
    <div className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white hover:text-gray-300 transition-colors duration-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l1.4-8H7M7 13l-1.4 8-1.4 8h10l2.4-8-1.4 8-1.4-8H7m0 0l-1.4-8-1.4-8H7m0 0l-1.4 8-1.4 8h10l2.4-8-1.4 8-1.4-8H7"
        />
      </svg>
      <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 -mt-5 -ml-4">
        5
      </span>
    </div>
  );
};

export default CartWidget;
