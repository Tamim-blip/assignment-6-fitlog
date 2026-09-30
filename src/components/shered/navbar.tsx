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
      <div className="sticky top-0 z-50 border-b border-blue-950 bg-gray-950">
  <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8">

    <div className="flex flex-wrap items-center justify-between gap-4">

      {/* Logo */}
      <div className="flex items-center gap-2 text-amber-50">
        <Image
          src={Imaage}
          alt="Nav Logo"
          className="h-8 w-8"
        />
        <p className="font-bold">FITLOG</p>
      </div>

      {/* Plan & Saved */}
      <div className="order-2 flex items-center gap-3 text-sm text-amber-50 sm:order-3 sm:gap-5">
        
        <Link
          href="/myPlan"
          className="flex items-center gap-1.5 whitespace-nowrap"
        >
          <p>Plan</p>
          <p className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#C2F800] px-2 text-black">
            {myPlan.length}
          </p>
        </Link>

        <Link
          href="/myPlan"
          className="flex items-center gap-1.5 whitespace-nowrap"
        >
          <p>Saved</p>
          <p className="flex h-7 min-w-7 items-center justify-center rounded-full border border-gray-700 px-2">
            {saved.length}
          </p>
        </Link>

      </div>

      {/* Navigation */}
      <div className="order-3 flex w-full items-center justify-center gap-4 text-sm text-amber-50 sm:order-2 sm:w-auto sm:gap-7">

        <Link
          className={`${
            pathname === "/"
              ? "rounded-2xl bg-[#1A2312] px-3 py-1 text-[#C2F800]"
              : ""
          }`}
          href="/"
        >
          Workouts
        </Link>

        <Link
          className={`${
            pathname === "/myPlan"
              ? "rounded-2xl bg-[#1A2312] px-3 py-1 text-[#C2F800]"
              : ""
          }`}
          href="/myPlan"
        >
          My Plan
        </Link>

      </div>

    </div>
  </div>
</div>
    );
};

export default Navbar;