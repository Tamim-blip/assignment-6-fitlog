
import { TWorkout } from "@/type/workoutType";
import Image from "next/image";
import SavedButton from "@/components/ditelsButtons/saved";
import PlanButton from "@/components/ditelsButtons/planbutton";

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
    <div className="container mx-auto my-6 flex flex-col gap-8 px-4 sm:px-6 lg:my-10 lg:flex-row lg:justify-between lg:gap-10 lg:px-0">

      {/* Left */}
      <div className="w-full lg:w-1/2">
        <Image
          src={workout.image}
          alt={workout.name}
          width={650}
          height={650}
          className="w-full rounded-2xl object-cover"
        />
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/2">

        <h1 className="mb-2 text-2xl font-bold text-[#FFFFFF] sm:text-3xl">
          {workout.name}
        </h1>

        <p className="mb-2 text-sm text-[#9CA3AF] sm:text-base">
          {workout.description}
        </p>

        {/* Muscle Group */}
        <div className="my-5 flex flex-wrap gap-2 text-amber-50 sm:my-6 sm:gap-4">
          {workout.muscleGroups.map((data, ind) => (
            <div
              key={ind}
              className="rounded-2xl bg-[#CCFF00] px-2 py-0.5 text-sm text-gray-950"
            >
              {data}
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="my-5 space-y-3 rounded-2xl bg-[#232834] p-4 sm:p-5">

          <div className="flex justify-between gap-4">
            <p className="text-sm text-[#9CA3AF]">EQUIPMENT</p>
            <p className="text-right text-sm text-[#E5E7EB]">
              {workout.equipment}
            </p>
          </div>

          <div className="flex justify-between gap-4">
            <p className="text-sm text-[#9CA3AF]">DIFFICULTY</p>
            <p className="text-right text-sm text-[#E5E7EB]">
              {workout.difficulty}
            </p>
          </div>

          <div className="flex justify-between gap-4">
            <p className="text-sm text-[#9CA3AF]">SETS</p>
            <p className="text-right text-sm text-[#E5E7EB]">
              {workout.sets}
            </p>
          </div>

          <div className="flex justify-between gap-4">
            <p className="text-sm text-[#9CA3AF]">REPS</p>
            <p className="text-right text-sm text-[#E5E7EB]">
              {workout.reps}
            </p>
          </div>

          <div className="flex justify-between gap-4">
            <p className="text-sm text-[#9CA3AF]">DURATION</p>
            <p className="text-right text-sm text-[#E5E7EB]">
              {workout.duration}
            </p>
          </div>

          <div className="flex justify-between gap-4">
            <p className="text-sm text-[#9CA3AF]">CALORIES</p>
            <p className="text-right text-sm text-[#E5E7EB]">
              {workout.caloriesBurned}
            </p>
          </div>

          <div className="flex justify-between gap-4">
            <p className="text-sm text-[#9CA3AF]">RATING</p>
            <p className="text-right text-sm text-[#E5E7EB]">
              {workout.rating}
            </p>
          </div>

        </div>

        {/* Instructions */}
        <div className="text-amber-50">

          <h1 className="my-4 text-xl font-bold text-[#FFFFFF] sm:text-2xl">
            INSTRUCTIONS
          </h1>

          {workout.instructions.map((data, ind) => (
            <div key={ind}>
              <ol>
                <li className="mb-2 text-sm text-[#9CA3AF] sm:text-base">
                  ✔︎ {data}
                </li>
              </ol>
            </div>
          ))}

        </div>

        {/* Buttons */}
        <div className="my-6 flex flex-row gap-3 sm:my-7 sm:flex-row  sm:gap-4">
          <SavedButton workout={workout} />
          <PlanButton workout={workout} />
        </div>

      </div>
    </div>
  );
};

export default PageDetails;