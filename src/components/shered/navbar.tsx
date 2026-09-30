import Image from 'next/image';
import React from 'react';
import Imaage from '@/assets/logo.png'
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='bg-gray-950 border border-b-blue-950 sticky top-0 z-50'>
            <div className='container mx-auto flex justify-between my-4'>
            <div className='flex gap-1 text-amber-50'>
                <Image src={Imaage} alt='Nav Logo'></Image>
                <p>FITLOG</p>
            </div>

            <div className='flex gap-4 text-amber-50'>
                <Link href= '/'> Workout</Link>
                <Link href= '/myPlan'>My Plan</Link>
            </div>

            <div className='flex gap-4 text-amber-50'>
                <p>plan</p>
                <p>Saved</p>
            </div>
            
        </div>
        </div>
    );
};

export default Navbar;