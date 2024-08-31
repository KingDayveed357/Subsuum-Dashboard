import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import savedCards from "../assets/images/saved-cards.png"
import { FileInput } from 'flowbite-react';
import gallery from "../assets/images/file-input.png"
import { CiCamera } from "react-icons/ci";
import { FiCopy } from "react-icons/fi";

const Account = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full z-20  transition-width duration-300 ease-in-out  overflow-hidden lg:w-80`}>
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className={`flex-1 flex flex-col  transition-all duration-300 ease-in-out lg:ml-80`}>
        {/* Topbar */}
        <div className="top-0 z-10 ">
          <Topbar />
        </div>

        {/* Page content */}
        <main className="flex-grow p-4 lg:p-6 lg:px-8">
          {/* Page content goes here */}
          <section className='lg:flex space-x-0 lg:space-x-8 grid grid-cols-1 '>
            <div className="flex flex-col gap-6">
            <div className='dashboard-card flex justify-center items-center'>
                <div className='flex flex-col space-y-3'>
              <img src={gallery} className='rounded-full bg-[#EFF5FB]' alt="" />
              <span className='flex gap-2 text-[#4169E1] font-semibold'> <CiCamera className='my-auto text-lg '/>  Upload Image</span>
              </div>
              </div>
              <div className="dashboard-card p-6 flex flex-col space-y-4">
              <div className='flex justify-between text-lg text-[#4C689E]'><p>Name</p> <p className='font-semibold  '>Lawal Wahab Babatunde</p></div>
              <div className='flex justify-between text-lg text-[#4C689E]'><p>Email</p> <p className='font-semibold'>wabdotmail@gmail.com</p></div>
              <div className='flex justify-between text-lg text-[#4C689E]'><p>Phone Number</p> <p className='font-semibold'>0906 856 2949</p></div>
              <div className='flex justify-between text-lg text-[#4C689E]'><p>Account Status</p> <p className='font-semibold text-success'>Active</p></div>
              <div className='flex justify-between text-lg text-[#4C689E]'><p>Referral link</p> <p className='font-semibold'>www.subsum.com/tre/wd...</p></div>
              <div className='flex justify-between text-lg text-[#4C689E]'><p></p> <p className='font-semibold flex gap-1 text-[#4169E1] text-xl'><FiCopy className='my-auto ' />Copy</p></div>
              <p className='text-[#4169E1] font-semibold text-2xl'>Edit Details</p>
            </div> 
            </div>
            <div className='flex flex-col gap-4 mt-5 lg:mt-0'>
              <div className='lg:border-2 lg:border-[#D7E1F4] w-auto xl:w-[27rem]  gap-3 rounded-none border-none lg:rounded-full grid lg:grid-cols-2 grid-cols-1'>
               <button className='px-8 p-2 rounded-full bg-[#EFF5FB] '>Change Password</button>
               <button className='border-2 border-[#D7E1F4] px-8 p-2 rounded-full text-[#A9BADA] '>Change PIN</button>
              </div>
             <form action="" className='dashboard-card'>
                <div className="mb-4">
                <label htmlFor="Current Password" className='text-[#4C689E]'>Current Password</label>
                <input type="text" className='input input-bordered w-full  border-[#D7E1F4]' placeholder='Enter Current Password'/>
                </div>
                <div className="mb-4">
                <label htmlFor="New Password" className='text-[#4C689E]'>New Password</label>
                <input type="text" className='input input-bordered w-full text-[#869DCB] border-[#D7E1F4]' placeholder='Enter New Password'/>
                </div>
                <div className="mb-4">
                <label htmlFor= " Confirm New Password" className='text-[#4C689E]'> Confirm New Password</label>
                <input type="text" className='input input-bordered w-full text-[#869DCB] border-[#D7E1F4]' placeholder='Enter New Password'/>
                </div>
                <button className='btn bg-[#4169E1] w-full text-white'>Submit</button>
             </form>
            </div>
          </section>
  
        </main>
      </div>
    </div>
  );
};

export default Account;
