import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "../css/sidebar.css";
import logo from "../assets/images/Subsum 1@2x.png";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { PiReceipt } from "react-icons/pi";
import { FaArrowsRotate } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { PiLightning } from "react-icons/pi";

const Sidebar: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation(); // Get current location

    const toggleDropdown = (menuItem: string) => {
        setActiveDropdown(activeDropdown === menuItem ? null : menuItem);
    };

    const handleLogout = () => {
        // redirect to login page
        navigate('/login');
    };

    // Helper function to determine if the link is active
    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side lg:bg-[#EFF3FB]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu  bg-[#EFF3FB] text-base-content min-h-full w-80 p-8 justify-between">
                    <div className='space-y-4'>
                        <img src={logo} className='w-48' alt="Logo" />
                        <li className='pt-6 '>
                            <Link to="/dashboard" className={`flex gap-4 p-4 rounded-2xl px-4 cyan-text text-[16px]  ${isActive('/dashboard') ? 'bg-[#4169E1] text-white hover:bg-[#4169E1]' : ''}`}>
                            <BsFillGrid1X2Fill className='text-lg'/>  Dashboard
                            </Link>
                        </li>
                        <li className='relative'>
                            <a onClick={() => toggleDropdown('buyAirtime')} className='cyan-text text-[16px]  cursor-pointer flex justify-between items-center'>
                            <div className='flex gap-4'>
                            <FaPhone  className='text-lg'/>Buy Airtime
                            </div>
                           
                                <span className="ml-2">{activeDropdown === 'buyAirtime' ? < IoIosArrowUp className="text-xl blue-text" />
                                    : <IoIosArrowDown  className="text-xl blue-text"/>}</span>
                            </a>
                            {activeDropdown === 'buyAirtime' && (
                                <ul className="pl-4 mt-2 space-y-2">
                                    <li><Link to="/buy-airtime">Option 1</Link></li>
                                    <li><Link to="/buy-airtime">Option 2</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className='relative'>
                            <a onClick={() => toggleDropdown('buyData')} className='cyan-text text-[16px] cursor-pointer flex justify-between items-center'>
                            <div className='flex gap-4'>
                            <FaWifi className='text-lg'/>  Buy Data
                            </div>
                                <span className="ml-2">{activeDropdown === 'buyData' ? < IoIosArrowUp className="text-xl blue-text" />
                                    : <IoIosArrowDown  className="text-xl blue-text"/>}</span>
                            </a>
                            {activeDropdown === 'buyData' && (
                                <ul className="pl-4 mt-2 space-y-2">
                                    <li><Link to="/buy-data">Option 1</Link></li>
                                    <li><Link to="/buy-data">Option 2</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className='relative'>
                            <a onClick={() => toggleDropdown('tvSubscription')} className='cyan-text text-[16px]  cursor-pointer flex justify-between items-center'>
                            <div className='flex gap-4'>
                            <AiOutlineFundProjectionScreen className='text-xl'/>  TV Subscription
                              </div>
                                <span className="ml-2">{activeDropdown === 'tvSubscription' ? < IoIosArrowUp className="text-xl blue-text" />
                                    : <IoIosArrowDown  className="text-xl blue-text"/>}</span>
                            </a>
                            {activeDropdown === 'tvSubscription' && (
                                <ul className="pl-4 mt-2 space-y-2">
                                    <li><Link to="/tv-subscription">Option 1</Link></li>
                                    <li><Link to="/tv-subscription">Option 2</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className='relative'>
                            <a onClick={() => toggleDropdown('payElectricBill')} className='cyan-text text-[16px]  cursor-pointer flex justify-between items-center'>
                            <div className='flex gap-4'>
                            <PiLightning className="text-xl"/>   Pay Electric Bill
                            </div>
                                <span className="ml-2">{activeDropdown === 'payElectricBill' ? < IoIosArrowUp className="text-xl blue-text" />
                                    : <IoIosArrowDown  className="text-xl blue-text"/>}</span>
                            </a>
                            {activeDropdown === 'payElectricBill' && (
                                <ul className="pl-4 mt-2 space-y-2">
                                    <li><Link to="/pay-electric-bill">Option 1</Link></li>
                                    <li><Link to="/pay-electric-bill">Option 2</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className='relative'>
                            <Link to="/airtime-to-cash" className={`flex gap-4 cyan-text text-[16px]   ${isActive('/airtime-to-cash') ? 'bg-[#4169E1]  text-white hover:bg-[#4169E1]' : ''}`}>
                            <FaArrowsRotate className='text-lg'/>
                            Airtime to Cash</Link>
                        </li>
                        <li className='relative'>
                            <Link to="/transaction-history" className={`flex gap-4 cyan-text text-[16px] ${isActive('/transaction-history') ? 'bg-[#4169E1] text-white hover:bg-[#4169E1]' : ''}`}>
                            <PiReceipt className="text-xl" />    Transaction History</Link>
                        </li>
                        <li className='relative'>
                            <Link to="/help-support" className={`flex gap-4 cyan-text text-[16px] ${isActive('/help-support') ? 'bg-[#4169E1] text-white hover:bg-[#4169E1]' : ''}`}><BiSupport className='text-xl' /> Help and Support</Link>
                        </li>
                        <li className='lg:hidden'>
                            <a onClick={handleLogout} className='cyan-text text-[16px] flex gap-4'><LuLogOut className='text-lg' />
                            Log Out</a>
                        </li>
                    </div>
                    <li className='hidden lg:block lg:mb-8'>
                        <a onClick={handleLogout}  className='flex gap-4 cyan-text text-[16px]'> <LuLogOut className='text-lg'/>
                        Log Out</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
