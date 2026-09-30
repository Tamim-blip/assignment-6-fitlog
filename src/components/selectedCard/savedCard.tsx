
import { WorkoutContext } from '@/context/workoutProvide';
import { TWorkout } from '@/type/workoutType';
import { Clock, Flame, Star, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SavedCard = ({ item }: { item: TWorkout }) => {

    const { saved, setSeved } = useContext(WorkoutContext);

    const handleRemove = (id: number) => {
        setSeved(saved.filter(card => card.id !== id));
        toast.success(`${item.name} is removed`);
    };

    return (
        <div className="my-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#232732] px-4 py-3 sm:px-5">

            {/* Workout Info */}
            <div className="flex min-w-60 flex-1 gap-3 sm:gap-5">

                <Image
                    src={item.image}
                    alt={item.name}
                    height={100}
                    width={100}
                    className="h-20 w-20 shrink-0 rounded-2xl object-cover sm:h-25 sm:w-25"
                />

                <div className="min-w-0">
                    <h1 className="mb-1 truncate text-lg font-bold text-[#FFFFFF] sm:text-2xl">
                        {item.name}
                    </h1>

                    <p className="mb-2 truncate text-sm text-[#8A92A0] sm:text-base">
                        {item.equipment}
                    </p>

                    <div className="flex flex-wrap gap-3 sm:gap-5">

                        <p className="flex items-center gap-1 text-sm text-[#D1D5DB]">
                            <Clock className="h-4 w-4 text-[#CCFF00]" />
                            {item.duration}
                        </p>

                        <p className="flex items-center gap-1 text-sm text-[#D1D5DB]">
                            <Flame className="h-4 w-4 text-[#CCFF00]" />
                            {item.caloriesBurned}
                        </p>

                        <p className="flex items-center gap-1 text-sm text-[#D1D5DB]">
                            <Star className="h-4 w-4 text-[#CCFF00]" />
                            {item.rating}
                        </p>

                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-4">

                <Link href={`/workout/${item.id}`}>
                    <button className="cursor-pointer rounded-2xl bg-[#13161D] px-3 py-2 text-sm text-[#FFFFFF] sm:px-4 sm:text-base">
                        View Details
                    </button>
                </Link>

                
                <button
                    onClick={() => handleRemove(item.id)}
                    className="cursor-pointer text-xl text-red-700 sm:text-2xl"
                >
                    <X />
                </button>

            </div>
        </div>
    );
};

export default SavedCard;
