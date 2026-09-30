'use client'

import { WorkoutContext } from '@/context/workoutProvide';
import { TWorkout } from '@/type/workoutType';
import React, { useContext } from 'react';

type SavedButtonProps = {
  workout: TWorkout;
};



const PlanButton = ({ workout }: SavedButtonProps) => {


    const {myPlan, setMyPlan} = useContext(WorkoutContext)

    const MyPlanButtonHandle = () => {


    setMyPlan([...myPlan, workout])
    alert("button is clicked")

}

    return (
        <div>

            <button onClick={() => MyPlanButtonHandle ()}  className="border border-amber-50 rounded-2xl text-[#D1D5DB] px-2 py-1">Save for later</button>
            
        </div>
    );
};

export default PlanButton ;