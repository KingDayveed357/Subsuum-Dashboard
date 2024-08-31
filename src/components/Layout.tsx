import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  // Map paths to page names
  const pageNames: { [key: string]: string } = {
    '/': 'Welcome, Lawal Wahab',
    '/buy-airtime': 'Buy Airtime',
    '/buy-data': 'Buy Data',
    '/tv-subscription': 'TV Subscription',
    '/pay-electric-bill': 'Pay Electric Bill',
    '/airtime-to-cash': 'Airtime to Cash',
    '/transaction-history': 'Transaction History',
    '/help-support': 'Help And Support',
    '/login': 'Login',
  };

  const pageTitle = pageNames[location.pathname] || 'Dashboard'; // Default to 'Dashboard' if path not found

  return (
    <div className="bg-white dark:bg-white">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 bg-white  h-full z-20 transition-width duration-300 ease-in-out overflow-hidden lg:w-80">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 bg-white  dark:bg-white  flex flex-col transition-all duration-300 ease-in-out lg:ml-80">
        {/* Topbar */}
        <div className="top-0 z-10">
          <Topbar pageTitle={pageTitle} />
        </div>

        {/* Page content */}
        <main className="flex-grow bg-white  dark:bg-white  p-4 lg:p-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
