import Image from "next/image";
import React from "react";
import { Clock3, Flame, Star } from "lucide-react";
import { TWorkout } from "@/type/workoutType";
import Link from "next/link";

type WorkoutCardProps = {
  workout: TWorkout;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#15161b] text-white">
      {/* Image */}
      <Link href= {`/workout/${workout.id}`}>
      <div className="relative h-62.5 w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>
      </Link>

      {/* Content */}
      <div className="p-7">
        {/* Muscle Groups */}
        <div className="mb-5 flex gap-3">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400 px-4 py-1 text-sm font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="text-2xl font-extrabold uppercase tracking-wide">
          {workout.name}
        </h2>

        {/* Equipment */}
        <p className="mt-2 text-base text-zinc-400">
          {workout.equipment}
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-zinc-800" />

        {/* Stats */}
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <Clock3 size={18} />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-2">
            <Flame size={18} />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-2">
            <Star size={18} />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;