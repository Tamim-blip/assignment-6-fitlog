'use client'
import { WorkoutContext } from '@/context/workoutProvide';
import React, { useContext } from 'react';



const MyPlanPage = () => {

    const { saved, myPlan } = useContext(WorkoutContext)
    return (
        <div className='container mx-auto mt-15 '>
            <h1 className='font-bold text-3xl text-[#FFFFFF] mb-2'>MY PLAN</h1>
            <p className='text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>



            {/* dashbord start */}

            {/* dashbord end */}



            <div>

                <button></button>
                <button></button>
               
            </div>

        </div>
    );
};

export default MyPlanPage;