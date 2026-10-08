"use client";

import { useFitContext } from "@/context/FitProvider";

export default function Stats({ activeTab }) {
  const { Newdata, SavedData } = useFitContext();

  const currentData =
    activeTab === "today" ? Newdata : SavedData;

  const totalExercises = currentData.length;

  const totalMinutes = currentData.reduce(
    (total, item) => total + Number(item.duration || 0),
    0
  );

  const totalCalories = currentData.reduce(
    (total, item) => total + Number(item.caloriesBurned || 0),
    0
  );

  return (
    <div className="container mx-auto mt-50 mb-20 grid h-[400px] grid-cols-3 rounded-2xl bg-[#232732] p-5">

      <div className="flex h-full flex-col items-center justify-center border-r border-black text-center">
        <p className="text-xs text-[#7F8490]">
          Exercises
        </p>

        <h2 className="mt-1 text-4xl font-bold text-[#C2F800]">
          {totalExercises}
        </h2>
      </div>

      <div className="flex h-full flex-col items-center justify-center border-r border-black text-center">
        <p className="text-xs text-[#7F8490]">
          Minutes
        </p>

        <h2 className="mt-1 text-4xl font-bold text-white">
          {totalMinutes}
        </h2>
      </div>

      <div className="flex h-full flex-col items-center justify-center text-center">
        <p className="text-xs text-[#7F8490]">
          Calories
        </p>

        <h2 className="mt-1 text-4xl font-bold text-white">
          {totalCalories}
        </h2>
      </div>

    </div>
  );
}
