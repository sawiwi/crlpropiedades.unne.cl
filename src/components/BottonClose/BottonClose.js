import React from 'react';
import { iconsList } from '../Icons';

const ButtonClose = ({ className = '', onClick = () => {} }) => {
  const { GrClose } = iconsList;

  return (
    <button
      className={`w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary duration-300 text-white border-none outline-none focus:outline-none ${className} `}
      onClick={onClick}
    >
      <span className="sr-only text-white">Close</span>
      <GrClose className="w-5 h-5 text-white" />
    </button>
  );
};

export default ButtonClose;
