import React from 'react';
import BannerImg from '@/assets/banner.png'
import Image from 'next/image';


const Banner = () => {
    return (
        <div>
            <div className='container mx-auto flex justify-between items-center bg-[#222630] my-10 p-12 rounded-2xl'>
            <div className=' max-w-150'>
                <p className='text-[#C2F800] mb-5'>WORKOUT LIBRARY</p>
                <h1 className='font-bold text-5xl text-[#FFFFFF] mb-4'>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                <p className='text-[#9CA3AF] mb-7'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>
                <button className='bg-[#C2F800] p-2 rounded-md text-[#000000] font-bold text-[10px]'>BROWSE WORKOUTS</button>
            </div>

            <div>
                <Image src={BannerImg} alt='banner img'></Image>
            </div>
            
        </div>
            
        </div>
    );
};

export default Banner;