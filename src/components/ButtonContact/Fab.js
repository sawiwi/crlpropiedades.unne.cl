import React, { useState } from 'react';
import {iconsList} from '../../components/Icons/index'

const ContactWsp = () => {
  const { AiOutlineWhatsApp } = iconsList;
  const phoneNumber = '+56949583470';
  const whatsappBusinessLink = `https://wa.me/${phoneNumber}`;

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const hoverEffect = `hover:scale-105`;
  const buttonAnimate = `animate-heart`;
  return (
    <div className="select-none">
      <div
        className={`fixed bottom-8 right-8 rounded-full w-[60px] h-[60px] bg-green-500 drop-shadow-lg shadow-black z-30 flex justify-center items-center hover:cursor-pointer transition-all ${hoverEffect} ${buttonAnimate}`}
        onClick={handleClick}
      >
        <div
          className={`transition-all duration-300 ${
            isOpen ? 'rotate-15' : 'rotate-0'
          }`}
        >
          <a 
          href={whatsappBusinessLink}
          target='_blank'
         rel="noopener noreferrer"
      >
          <AiOutlineWhatsApp className={`{overflow-hidden rounded-full w-[30px] h-[30px] text-white flex items-center justify-center drop-shadow-lg shadow-black  transition-all ${hoverEffect}`} />
          </a>
        </div>
      </div>
      <div
        className={`fixed  right-8 rounded-full w-[60px] z-10 flex flex-col-reverse items-center gap-3 transition-all duration-500 transform ${
          isOpen ? 'bottom-28' : '-bottom-36 opacity-0'
        }`}
      >
      </div>
    </div>
  );
};

export default ContactWsp;
