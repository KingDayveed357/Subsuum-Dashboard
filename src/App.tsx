import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import BuyAirtime from './Pages/BuyAirtime';
import BuyData from './Pages/BuyData';
import TVSubscription from './Pages/TVSubscription';
import PayElectricBill from './Pages/PayElectricBill';
import AirtimeToCash from './Pages/AirtimeToCash';
import TransactionHistory from './Pages/Transactions';
import HelpSupport from './Pages/HelpSupport';
import Login from './Pages/Login';

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/buy-airtime" element={<BuyAirtime />} />
          <Route path="/buy-data" element={<BuyData />} />
          <Route path="/tv-subscription" element={<TVSubscription />} />
          <Route path="/pay-electric-bill" element={<PayElectricBill />} />
          <Route path="/airtime-to-cash" element={<AirtimeToCash />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  );
};

export default App;
