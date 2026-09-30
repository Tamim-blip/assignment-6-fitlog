'use client'

import { WorkoutContext } from '@/context/workoutProvide';
import React, { useContext } from 'react';

const PlanPage = () => {
    const {myPlan} = useContext(WorkoutContext)
    return (
        <div className='flex justify-around items-center text-center bg-[#232732] my-10 py-8 rounded-2xl'>
                <div>
                    <p className='text-[#8A92A0] mb-3'>Exercises</p>
                    <p className='font-bold text-4xl text-[#CCFF00]'>{myPlan.length}</p>
                </div>

                <div>
                    <p className='text-[#8A92A0] mb-3'>Minutes</p>
                    <p className='font-bold text-4xl text-[#FFFFFF]'>
                      {myPlan.reduce((sum, item) => sum + item.duration, 0)}
                    </p>
                </div>

                <div>
                    <p className='text-[#8A92A0] mb-3'>Calories</p>
                    <p className='font-bold text-4xl text-[#FFFFFF]'>
                         {myPlan.reduce((sum, item) => sum + item.caloriesBurned, 0)}
                    </p>
                </div>
            </div>
    );
};

export default PlanPage;