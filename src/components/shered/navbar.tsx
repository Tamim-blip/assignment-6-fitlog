'use client'
import Image from 'next/image';
import React, { useContext } from 'react';
import Imaage from '@/assets/logo.png'
import Link from 'next/link';
import { WorkoutContext } from '@/context/workoutProvide';
import { usePathname } from 'next/navigation';

const Navbar = () => {

     const pathname = usePathname()

    const {saved, myPlan} = useContext(WorkoutContext)
    return (
        <div className='bg-gray-950 border border-b-blue-950 sticky top-0 z-50'>
            <div className='container mx-auto flex justify-between my-4'>
            <div className='flex gap-1 text-amber-50'>
                <Image src={Imaage} alt='Nav Logo'></Image>
                <p>FITLOG</p>
            </div>

            <div className='flex gap-7 text-amber-50 items-center justify-center'>
                <Link className= {`${pathname === '/' ? "bg-[#1A2312] text-[#C2F800] px-3 py-1 rounded-2xl" : ""}`} href= '/'> Workouts</Link>
                <Link className= {`${pathname === '/myPlan' ? "bg-[#1A2312] text-[#C2F800] px-3 py-1 rounded-2xl" : ""}`} href= '/myPlan'>My Plan</Link>
            </div>

            <div className='flex gap-6 items-center text-amber-50'>
                
               <Link href= '/myPlan' className='flex gap-2'>
                 <p>plan</p>
                 <p className='border bg-[#C2F800] text-[#000000] rounded-4xl px-2 py-4]'>{myPlan.length}</p>
               </Link>
                <Link href= "/myPlan" className='flex gap-2'>
                    <p>Saved</p>
                    <p className='border rounded-4xl px-2 py-4]'>{saved.length}</p>
                </Link>
            </div>
            
        </div>
        </div>
    );
};

export default Navbar;