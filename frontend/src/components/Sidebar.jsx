import React from 'react'
import { Link, useRouterState } from '@tanstack/react-router';

const Sidebar = () => {
  const { location } = useRouterState();

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    `block px-4 py-2 rounded transition ${
      isActive(path)
        ? 'bg-blue-700 text-white'
        : 'text-gray-800 hover:bg-gray-200'
    }`;

  return (
    <aside className="w-64 h-screen bg-gray-100  p-4">
     <nav className="flex flex-col space-y-2">
  <Link to="/dashboard" className={`${linkClasses('/dashboard')} text-[1.2rem]`}>
    Dashboard
  </Link>
  <Link to="/dashboard/shorturls" className={`${linkClasses('/dashboard/shorturls')} text-[1.2rem]`}>
    Short URLs
  </Link>
  <Link to="/dashboard/allurls" className={`${linkClasses('/dashboard/allurls')} text-[1.2rem]`}>
    All URLs
  </Link>
   <Link to="/dashboard/profile" className={`${linkClasses('/dashboard/profile')} text-[1.2rem]`}>
Profile  </Link>
  <Link to="/dashboard/logout" className={`${linkClasses('/dashboard/logout')} text-[1.2rem]`}>
    Logout
  </Link>
</nav>

    </aside>
  );
};

export default Sidebar;

