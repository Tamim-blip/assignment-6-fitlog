'use client'
import { WorkoutContext } from '@/context/workoutProvide';
import React, { useContext } from 'react';



const MyPlanPage = () => {

    const {saved} = useContext(WorkoutContext)
    return (
        <div className='text-amber-50'>
            <p>{saved.length}</p>
            
        </div>
    );
};

export default MyPlanPage;