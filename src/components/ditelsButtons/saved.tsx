'use client'

import { WorkoutContext } from '@/context/workoutProvide';
import { TWorkout } from '@/type/workoutType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

type SavedButtonProps = {
  workout: TWorkout;
};



const SavedButton = ({ workout }: SavedButtonProps) => {


    const {myPlan, setMyPlan} = useContext(WorkoutContext)

    const SavedButtonHandle = () => {


    setMyPlan([...myPlan, workout])
   toast.success("button is clicked")

}

    return (
        <div>

            <button onClick={() => SavedButtonHandle ()} className="bg-[#CCFF00] text-[#0F1115] px-3 py-2 rounded-2xl cursor-pointer ">Add to today&apos;s plan</button>
            
        </div>
    );
};

export default SavedButton;