import React, { useState } from 'react';
import nineMobile from '../assets/images/networks/9mobile.png';
import airtel from '../assets/images/networks/airtel.png';
import mtn from '../assets/images/networks/mtn.png';

const CustomSelect: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Etisalat');

  const options = [
    { label: 'Etisalat', imgSrc: nineMobile },
    { label: 'MTN', imgSrc: mtn }, // Add your other images here
    // { label: 'Glo', imgSrc: 'path_to_glo_image' },
    { label: 'Airtel', imgSrc: airtel }
  ];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="relative inline-block w-full bg-white border-[#D7E1F4] max-w-xs">
      <div className="flex items-center border border-[#D7E1F4] p-2 rounded-lg cursor-pointer" onClick={() => document.getElementById('dropdown')?.classList.toggle('hidden')}>
        <img src={options.find(option => option.label === selectedOption)?.imgSrc} alt={selectedOption} className="w-7 h-7 mr-2" />
        <span>{selectedOption}</span>
      </div>
      <ul id="dropdown" className="absolute left-0 mt-1 w-full bg-white border border-[#D7E1F4] rounded-lg shadow-lg hidden">
        {options.map((option) => (
          <li key={option.label} className="flex items-center p-2 cursor-pointer hover:bg-gray-100" onClick={() => handleSelect(option.label)}>
            <img src={option.imgSrc} alt={option.label} className="w-6 h-6 mr-2" />
            <span>{option.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelect;
