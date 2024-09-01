import React from 'react';
import savedCards from "../assets/images/saved-cards.png"
import Layout from '../components/Layout';
import { LuCopy } from "react-icons/lu";
import { RiEditLine } from "react-icons/ri";
import { PiShareFat } from "react-icons/pi";
import { LuWallet } from "react-icons/lu";

const Dashboard: React.FC = () => {
  const referralCode = '18/52ha089';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode)
      .then(() => alert('Referral code copied!'))
      .catch(err => console.error('Failed to copy!', err));
  };

  return (
    <Layout>
      {/* Page content goes here */}
      <section className='xl:flex grid md:grid-cols-2 gap-8 grid-cols-1 grid-col-reverse lg:grid-row-reverse'>
        <div className='space-y-8'>
          <div className="dashboard-card bg-transparent">
            <div className="flex justify-between">
              <div>
                <h2 className="text-[16px] font-normal">Wallet Balance</h2>
                <p className='text-3xl font-semibold flex my-auto'>₦3000</p>
              </div>
              <button className='fund-wallet'>Fund wallet</button>
            </div>
          </div>

          <div className="dashboard-card bg-transparent">
            <div className="flex justify-between">
              <div>
                <h2 className="">Referral</h2>
                <p className='mt-2 mb-4'>Referral Code: <span className='font-semibold'>{referralCode}</span></p>
                <div className='flex space-x-3 text-[#4169E1]'>
                  <p className='flex gap-1 cursor-pointer' onClick={handleCopy}>
                    <LuCopy className='my-auto' /> Copy
                  </p>
                  <p className='flex gap-1 cursor-pointer'><RiEditLine className='my-auto' /> Edit</p>
                  <p className='flex gap-1 cursor-pointer'><PiShareFat className='my-auto' /> Share</p>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="flex gap-3 justify-between">
              <div className='flex-1  flex flex-col space-y-2'>
                <p>Total referrals made</p>
                <span className='text-xl font-semibold'>0</span>
              </div>

              <div className='flex flex-col space-y-2'>
                <p>Current wallet Bonus</p>
                <span className='text-xl font-semibold'>₦0.00</span>
              </div>
            </div>
            <p className='mt-4 flex gap-1 text-[#4169E1]'>
              <LuWallet className='my-auto text-lg' /> Cashout
            </p>
          </div>
        </div>

        <div className='image mb-4 lg:mt-0 order-first lg:order-last'>
          <img src={savedCards} className='w-[100%]' alt="" />
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
