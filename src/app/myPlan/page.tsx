'use client'

import PlanPage from '@/components/dashboard/plan';
import SavedPage from '@/components/dashboard/saved';
import EmptySelected from '@/components/selectedCard/emptySelected';
import PlanCard from '@/components/selectedCard/planCard';
import SavedCard from '@/components/selectedCard/savedCard';
import { WorkoutContext } from '@/context/workoutProvide';
import { TWorkout } from '@/type/workoutType';

import React, { useContext, useState } from 'react';

const MyPlanPage = () => {

    const { saved, myPlan } = useContext(WorkoutContext);

    const [buttonType, setButtonType] = useState<"plan" | "saved">("plan");

    const HandleButton = (type: "plan" | "saved") => {
        setButtonType(type);
    };

    const [sortBy, setSortBy] = useState<"rating" | "time" | "calore">("rating")


    const sortWorkout = (workout : TWorkout[]) => {

        const sortedWorkout = [...workout]

        if(sortBy === "rating"){
            sortedWorkout.sort((a,b) => b.rating - a.rating)
        }else if(sortBy === "calore"){
            sortedWorkout.sort((a,b) => b.caloriesBurned - a.caloriesBurned)
        }else if(sortBy === "time"){
            sortedWorkout.sort((a,b) => b.duration - a.duration)
        }

        return sortedWorkout


    }


    const soretdSaved = sortWorkout(saved)
    const sortedPlan = sortWorkout(myPlan)

    return (
        <div className='container mx-auto mt-10 sm:mt-15 px-4 sm:px-6 lg:px-8'>

            {/* Header */}
            <h1 className='font-bold text-2xl sm:text-3xl text-[#FFFFFF] mb-2'>
                MY PLAN
            </h1>

            <p className='text-[#8A92A0] text-sm sm:text-base'>
                Cap of five lifts for today. Finish them, then load more.
            </p>


            {/* Dashboard */}
            {
                buttonType === "plan"
                    ? <PlanPage />
                    : <SavedPage />
            }


            {/* Buttons + Sort */}
            <div className='mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>

                {/* Buttons */}
                <div className="flex items-center gap-1 sm:gap-2 rounded-2xl bg-[#1B1D24] p-1 w-fit">

                    <button
                        onClick={() => HandleButton("plan")}
                        className={`
                            cursor-pointer rounded-xl 
                            px-4 sm:px-6 
                            py-2 
                            text-xs sm:text-sm 
                            font-medium 
                            transition-all duration-200
                            ${buttonType === "plan"
                                ? "bg-[#2B303D] text-white shadow-sm"
                                : "text-[#8A92A0] hover:text-white"
                            }
                        `}
                    >
                        Plan
                    </button>

                    <button
                        onClick={() => HandleButton("saved")}
                        className={`
                            cursor-pointer rounded-xl 
                            px-4 sm:px-6 
                            py-2 
                            text-xs sm:text-sm 
                            font-medium 
                            transition-all duration-200
                            ${buttonType === "saved"
                                ? "bg-[#2B303D] text-white shadow-sm"
                                : "text-[#8A92A0] hover:text-white"
                            }
                        `}
                    >
                        Saved
                    </button>

                </div>


                {/* Sort */}
                <div className=" w-full sm:w-auto">

                    <fieldset className="fieldset w-full sm:w-auto">
                       <div className='flex gap-4'>
                         <legend className="fieldset-legend text-amber-50 font-bold">Sort by</legend>

                
                        <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "calore" | "time" | "rating")}
                           
                            className="select w-full sm:w-40 bg-[#1B1D24] border-[#2B303D] text-white"
                        >
                            
                            <option value={"calore"}>  Calories </option>
                            <option value={"time"}> Duration </option>
                            <option value={"rating"}> Rating </option>
                             </select>
                       </div>

                    </fieldset>

                </div>

            </div>
                                
            
                {/* Cards */}
            <div className="mt-4 sm:mt-6">

                {
                    buttonType === "plan"
                        ? sortedPlan.length > 0
                            ? sortedPlan.map(item => (
                                <PlanCard
                                    key={item.id}
                                    item={item}
                                />
                            ))
                            : <EmptySelected />

                        : soretdSaved.length > 0
                            ? soretdSaved.map(item => (
                                <SavedCard
                                    key={item.id}
                                    item={item}
                                />
                            ))
                            : <EmptySelected />
                }

            </div>

        </div>
    );
};

export default MyPlanPage;