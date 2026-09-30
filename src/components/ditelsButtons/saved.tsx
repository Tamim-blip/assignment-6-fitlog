'use client'

import { WorkoutContext } from '@/context/workoutProvide';
import { TWorkout } from '@/type/workoutType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

type SavedButtonProps = {
  workout: TWorkout;
};



const SavedButton = ({ workout }: SavedButtonProps) => {


    const {saved, setSeved} = useContext(WorkoutContext)

    const SavedButtonHandle = () => {


    setSeved([...saved, workout])
   toast.success("button is clicked")

}

    return (
        <div>

            <button onClick={() => SavedButtonHandle ()} className="bg-[#CCFF00] text-[#0F1115] px-3 py-2 rounded-2xl">Add to today&apos;s plan</button>
            
        </div>
    );
};

export default SavedButton;