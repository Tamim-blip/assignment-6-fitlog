
import React from 'react';
import BannerImg from '@/assets/banner.png'
import Image from 'next/image';


const Banner = () => {
    return (
        <div>
            <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center bg-[#222630] my-6 lg:my-10 p-5 sm:p-7 lg:p-12 rounded-2xl gap-4 lg:gap-8'>

                <div className='max-w-150'>
                    <p className='text-[#C2F800] mb-3 lg:mb-5 text-xs lg:text-base'>
                        WORKOUT LIBRARY
                    </p>

                    <h1 className='font-bold text-2xl sm:text-3xl lg:text-5xl text-[#FFFFFF] mb-3 lg:mb-4'>
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className='text-[#9CA3AF] mb-4 lg:mb-7 text-xs sm:text-sm lg:text-base'>
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <button className='bg-[#C2F800] p-2 rounded-md text-[#000000] font-bold text-[10px]'>
                        BROWSE WORKOUTS
                    </button>
                </div>

                <div className='flex justify-center'>
                    <Image
                        src={BannerImg}
                        alt='banner img'
                        className='w-50 sm:w-60 lg:w-125 h-auto'
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;
