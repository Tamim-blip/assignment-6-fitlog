import React from 'react';
import WorkoutCard from '../../components/shered/workoutCard';
import { TWorkout } from '@/type/workoutType';

const Library = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {cache: 'force-cache'});

  const data: TWorkout[] = await res.json();

  return (
    <div className="container mx-auto">
      <div className="my-5">
        <h1 className="font-bold text-3xl text-[#FFFFFF]">
          THE LIBRARY
        </h1>

        <p className="text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className='grid grid-cols-3 gap-4'>
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