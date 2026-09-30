import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/logo.png'

const Footer = () => {
    return (
        <div className='flex justify-between bg-[#090A0D] py-10 px-10 mt-10 border-t-[0.5px] border-b-blue-300'>
            <div className='flex gap-1'>
                <Image src = {Logo} alt= 'footer logo'></Image>
                <h1>FITLOG</h1>
            </div>
            <p className='text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            
        </div>
    );
};

export default Footer;