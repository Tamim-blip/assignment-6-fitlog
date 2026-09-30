'use client'
import PlanPage from '@/components/dashboard/plan';
import SavedPage from '@/components/dashboard/saved';
import EmptySelected from '@/components/selectedCard/emptySelected';
import PlanCard from '@/components/selectedCard/planCard';
import SavedCard from '@/components/selectedCard/savedCard';
import { WorkoutContext } from '@/context/workoutProvide';

import React, { useContext, useState } from 'react';



const MyPlanPage = () => {

    const { saved, myPlan } = useContext(WorkoutContext)

    const [buttonType, setButtonType] = useState("plan")

    const HandleButton = (type : "plan" | "saved" ) => {

        setButtonType(type)

    }



    
    return (
        <div className='container mx-auto mt-15 '>
            <h1 className='font-bold text-3xl text-[#FFFFFF] mb-2'>MY PLAN</h1>
            <p className='text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>



            {/* dashbord start */}

            {
                buttonType === "plan" ? <PlanPage></PlanPage> : <SavedPage></SavedPage>
            }

            {/* dashbord end */}

      {/* button start */}
<div className="flex items-center gap-2 rounded-2xl bg-[#1B1D24] p-1 w-[180]">
  <button
    onClick={() => HandleButton("plan")}
    className={`cursor-pointer rounded-xl px-6 py-2 text-sm font-medium transition-all duration-200 
        ${buttonType === "plan" ? "bg-[#2B303D] text-white shadow-sm" : "text-[#8A92A0] hover:text-white"
    }`}>
    Plan
  </button>

  <button
    onClick={() => HandleButton("saved")}
    className={`cursor-pointer rounded-xl px-6 py-2 text-sm font-medium transition-all duration-200 
    ${buttonType === "saved" ? "bg-[#2B303D] text-white shadow-sm": "text-[#8A92A0] hover:text-white"
    }`}>
    Saved
  </button>
</div>

{/* button end */}


<div>

    {

      buttonType === "plan" ? myPlan.length > 0 ?
         myPlan.map(item => <PlanCard key = {item.id} item = {item}></PlanCard>) : <EmptySelected></EmptySelected>
         : saved.length > 0 ? saved.map(item => <SavedCard key = {item.id} item = {item}></SavedCard>) : <EmptySelected></EmptySelected>
         
    }

    
    
</div>



        </div>
    );
};

export default MyPlanPage;