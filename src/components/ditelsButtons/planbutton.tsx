'use client'

import { WorkoutContext } from '@/context/workoutProvide';
import { TWorkout } from '@/type/workoutType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

type SavedButtonProps = {
  workout: TWorkout;
};



const PlanButton = ({ workout }: SavedButtonProps) => {


    const {saved, setSeved} = useContext(WorkoutContext)

    const MyPlanButtonHandle = () => {


    setSeved([...saved, workout])
    toast.success("button is clicked")

}

    return (
        <div>

            <button onClick={() => MyPlanButtonHandle ()}  className="border border-amber-50 rounded-2xl text-[#E5E7EB] px-4 py-2 cursor-pointer">Save for later</button>
            
        </div>
    );
};

export default PlanButton ;