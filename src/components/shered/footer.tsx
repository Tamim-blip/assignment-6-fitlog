import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/logo.png'

const Footer = () => {
    return (
       
<div className="mt-10 flex flex-col items-center gap-4 border-t-[0.5px] border-b border-blue-300 bg-[#090A0D] px-5 py-8 text-center sm:px-8 md:flex-row md:justify-between md:px-10 md:text-left">
  <div className="flex items-center gap-2">
    <Image
      src={Logo}
      alt="FitLog footer logo"
      className="h-8 w-8"
    />
    <h1 className="text-lg font-bold text-white">FITLOG</h1>
  </div>

  <p className="text-sm text-[#6B7280]">
    © 2026 FitLog — Workout Library. Train hard, log honest.
  </p>
</div>


    );
};

export default Footer;