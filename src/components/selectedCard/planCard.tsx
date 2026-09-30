import { WorkoutContext } from '@/context/workoutProvide';
import { TWorkout } from '@/type/workoutType';
import { Clock, Flame, Star, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const PlanCard = ({ item }: { item: TWorkout }) => {

    const { myPlan, setMyPlan } = useContext(WorkoutContext);

    const handleRemove = (id: number) => {

        setMyPlan(myPlan.filter(exist => exist.id !== id));
        toast.success(`${item.name} is removed`)
    };

    return (
        <div className='flex justify-between my-10 bg-[#232732] rounded-2xl px-5 py-3'>

            <div className='flex gap-5'>

                <Image
                    src={item.image}
                    alt={item.name}
                    height={100}
                    width={100}
                    className='rounded-2xl'
                />

                <div>
                    <h1 className='font-bold text-[#FFFFFF] text-2xl mb-1'>
                        {item.name}
                    </h1>

                    <p className='text-[#8A92A0] mb-2'>
                        {item.equipment}
                    </p>

                    <div className='flex gap-5'>
                        <p className='flex gap-1 text-[#D1D5DB]'>
                            <Clock className='text-[#CCFF00]' />
                            {item.duration}
                        </p>

                        <p className='flex gap-1'>
                            <Flame className='text-[#CCFF00]' />
                            {item.caloriesBurned}
                        </p>

                        <p className='flex gap-1'>
                            <Star className='text-[#CCFF00]' />
                            {item.rating}
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-6'>

                <Link href={`/workout/${item.id}`}>
                    <button className='bg-[#13161D] px-4 py-2 rounded-2xl text-[#FFFFFF] cursor-pointer'>
                        View Details
                    </button>
                </Link>

                <button className='bg-[#CCFF00] px-4 py-2 rounded-2xl text-[#000000] cursor-pointer'>
                    ✔︎ Mark as Done
                </button>

                <button
                    onClick={() => handleRemove(item.id)}
                    className='text-red-700 text-2xl cursor-pointer'
                >
                    <X />
                </button>

            </div>
        </div>
    );
};

export default PlanCard;