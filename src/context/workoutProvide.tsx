"use client";

import React, { createContext, ReactNode, useState } from "react";
import { TWorkout } from "@/type/workoutType";

type WorkoutContextType = {
  saved: TWorkout[];
  setSeved: React.Dispatch<React.SetStateAction<TWorkout[]>>;
  myPlan: TWorkout[];
  setMyPlan: React.Dispatch<React.SetStateAction<TWorkout[]>>;
};

export const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);



const WorkoutProvider = ({ children } : {children :  ReactNode}
) => {
  const [saved, setSeved] = useState<TWorkout[]>([]);
  const [myPlan, setMyPlan] = useState<TWorkout[]>([]);

  const data: WorkoutContextType = {
    saved,
    setSeved,
    myPlan,
    setMyPlan,
  };

  return (
    <WorkoutContext.Provider value={data}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;