import React from 'react';
import WorkoutCard from '../../components/shered/workoutCard';
import { TWorkout } from '@/type/workoutType';

const Library = async () => {
  const res = await fetch(
    'https://api.abcz.workers.dev/api/fitlog',
    { cache: 'force-cache' }
  );

  const data: TWorkout[] = await res.json();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-0">
      <div className="my-8 sm:my-10">
        <h1 className="text-2xl font-bold text-[#FFFFFF] sm:text-3xl">
          THE LIBRARY
        </h1>

        <p className="text-sm text-[#9CA3AF] sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;