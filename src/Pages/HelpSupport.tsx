import React from 'react';

import { IoArrowForwardOutline } from "react-icons/io5";
import faq from "../assets/images/frame/faq.png"
import liveChat from "../assets/images/frame/live-chat.png"
import phone from "../assets/images/frame/phone.png"
import report from "../assets/images/frame/report.png"
import review from "../assets/images/frame/review.png"
import  whatsapp from "../assets/images/frame/whatsapp.png"
import Layout from '../components/Layout';

const HelpSupport:React.FC = () => {
  return (
    <Layout>
    
          {/* Page content goes here */}
          <section className='flex flex-col md:flex-row gap-7  '>
          {/* <div>01</div> */}
          <div className="flex flex-col space-y-8">
          <div className="dashboard-card border-[1.5px] w-[300px] p-2 flex gap-3">
            <div>
            <img src={faq} width={65} alt="" />
            </div>
          <div className='flex flex-col gap-2 my-auto'>
         <p className='cyan-text '>Frequently Asked Questions</p>
         <p className='flex gap-2 font-semibold blue-text '>See FAQ  <IoArrowForwardOutline className='my-auto text-xl'/></p>
          </div>
          </div>

          <div className="dashboard-card border-[1.5px] w-[300px] p-2 flex gap-3">
            <div>
            <img src={whatsapp} width={65} alt="" />
            </div>
          <div className='flex flex-col gap-2 my-auto'>
         <p className='cyan-text '>Whatsapp</p>
         <p className='flex gap-2 font-semibold blue-text '>Drop a message  <IoArrowForwardOutline className='my-auto text-xl'/></p>
          </div>
          </div>

         <div className="dashboard-card border-[1.5px] w-[300px] p-2 flex gap-3">
            <div>
            <img src={report} width={65} alt="" />
            </div>
          <div className='flex flex-col gap-2 my-auto'>
         <p className='cyan-text '>Report our Support</p>
         <p className='flex gap-2 font-semibold blue-text '>Not Satisfied?  <IoArrowForwardOutline className='my-auto text-xl'/></p>
          </div>
          </div>
          </div>
        
          <div className='flex flex-col space-y-8'> 
          <div className="dashboard-card border-[1.5px] w-[300px] p-2 flex gap-3">
            <div>
            <img src={liveChat} width={65} alt="" />
            </div>
          <div className='flex flex-col gap-2 my-auto'>
         <p className='cyan-text '>Live Chat</p>
         <p className='flex gap-2 font-semibold blue-text '>Chat Now  <IoArrowForwardOutline className='my-auto text-xl'/></p>
          </div>
          </div>
          <div className="dashboard-card border-[1.5px] w-[300px] p-2 flex gap-3">
            <div>
            <img src={phone} width={65} alt="" />
            </div>
          <div className='flex flex-col gap-2 my-auto'>
         <p className='cyan-text '>Phone Call</p>
         <p className='flex gap-2 font-semibold blue-text '>Call Us <IoArrowForwardOutline className='my-auto text-xl'/></p>
          </div>
          </div>
          <div className="dashboard-card border-[1.5px] w-[300px] p-2 flex gap-3">
            <div>
            <img src={review} width={65} alt="" />
            </div>
          <div className='flex flex-col gap-2 my-auto'>
         <p className='cyan-text '>Review Our App</p>
         <p className=' text-[#4169E1] font-semibold badge  bg-[#EFF5FB]'>Coming soon</p>
          </div>
          </div>
          </div>
          
          
          </section>
          </Layout>
  );
};

export default HelpSupport;
