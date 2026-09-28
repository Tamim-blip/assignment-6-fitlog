import React from "react";
import { TWorkout } from "@/type/workoutType";
import Image from "next/image";
import SavedButton from "@/components/ditelsButtons/saved";


type PageDetailsProps = {
  params: Promise<{
    id: string;
  }>;
};

const PageDetails = async ({ params }: PageDetailsProps) => {
  const { id } = await params;

  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  const data: TWorkout[] = await res.json();

  const workout = data.find((item) => item.id === Number(id));

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <div className="container mx-auto flex justify-between gap-5 my-10">
        {/* Left */}
      <div >
        <Image
          src={workout.image}
          alt={workout.name}
          width={650}
          height={650}
          className="rounded-2xl"
        />
      </div>


      {/* Right */}

      <div>
        <h1 className="font-bold text-3xl text-[#FFFFFF] mb-2">{workout.name}</h1>

        <p className="text-[#9CA3AF] mb-2">{workout.description}</p>

        {/* Muscle Group */}

        <div className="text-amber-50 flex gap-4 my-6">
            {
                workout.muscleGroups.map( (data, ind) => <div key={ind}  className="bg-[#CCFF00] px-2 py-0.5 rounded-2xl text-gray-950">{data}</div>)
            }
        </div>

        {/* Table */}

        <div className="bg-[#232834] my-5 p-5 rounded-2xl space-x-2 ">

            <div className="flex justify-between mb-2">
                <p className="text-[#9CA3AF]">EQUIPMENT</p>
                <p className="text-[#E5E7EB]">{workout.equipment}</p>
            </div>

            <div className="flex justify-between mb-2">
                <p className="text-[#9CA3AF]">DIFFICULTY</p>
                <p className="text-[#E5E7EB]">{workout.difficulty}</p>
            </div>

            <div className="flex justify-between mb-2">
                <p className="text-[#9CA3AF]">SETS</p>
                <p className="text-[#E5E7EB]">{workout.sets}</p>
            </div>

            <div className="flex justify-between mb-2">
                <p className="text-[#9CA3AF]">REPS</p>
                <p className="text-[#E5E7EB]">{workout.reps}</p>
            </div>

            <div className="flex justify-between mb-2">
                <p className="text-[#9CA3AF]">DURATION</p>
                <p className="text-[#E5E7EB]">{workout.duration}</p>
            </div>

            <div className="flex justify-between mb-2">
                <p className="text-[#9CA3AF]">CALORIES</p>
                <p className="text-[#E5E7EB]">{workout.caloriesBurned}</p>
            </div>

            <div className="flex justify-between mb-2">
                <p className="text-[#9CA3AF]">RATING</p>
                <p className="text-[#E5E7EB]">{workout.rating}</p>
            </div>


        </div>


        {/* Instraction */}

        <div className="text-amber-50">

            <h1 className="text-[#FFFFFF] font-bold text-2xl my-4">INSTRUCTIONS</h1>
            {
                workout.instructions.map((data, ind) => <div key={ind}>
                    <ol>
                        <li className="text-[#9CA3AF] mb-2"> ✔︎ {data}</li>
                    </ol>
                </div>)
            }
        </div>

        <div className="my-7 flex gap-4">

            <SavedButton workout = {workout}></SavedButton>
            
            <button  className="border border-amber-50 rounded-2xl text-[#D1D5DB] px-2 py-1">Save for later</button>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;