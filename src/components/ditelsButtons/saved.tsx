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

          const alreadySelected = myPlan.some(
                exist => exist.id === workout.id
            );
        
            if (alreadySelected) {
                toast.error(`${workout.name} is already selected`);
                return;
            }


    setMyPlan([...myPlan, workout])
   toast.success(`${workout.name} is added to plan list`)

}

    return (
        <div>

            <button onClick={() => SavedButtonHandle ()} className="bg-[#CCFF00] text-[#0F1115] px-4 py-3 rounded-2xl cursor-pointer ">Add to today&apos;s plan</button>
            
        </div>
    );
};

export default SavedButton;