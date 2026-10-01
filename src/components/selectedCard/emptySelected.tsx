import Link from 'next/link';
import React from 'react';

const EmptySelected = () => {
    return (
      
<div className='text-center bg-[#111317] my-8 sm:my-12 lg:my-15 mx-4 sm:mx-8 lg:mx-15 px-4 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-30 rounded-2xl space-y-3 border border-dotted'>
    <h1 className='text-[#FFFFFF] font-bold text-xl sm:text-2xl'>
        NOTHING HERE YET
    </h1>

    <p className='text-[#A1A1AA] text-sm sm:text-base'>
        Browse the library and add a lift to get today moving.
    </p>

    <Link href='/'>
        <button className='bg-[#C2F10D] px-4 py-2 rounded-2xl text-[#000000] mt-4 cursor-pointer'>
            Go to workouts
        </button>
    </Link>
</div>

    );
};

export default EmptySelected;