
"use client";

import { useFitContext } from "@/context/FitProvider";
import { useState } from "react";
import Link from "next/link";
import Stats from "./Stats";
import {FiClock,FiZap,FiStar,FiCheck,FiX,} from "react-icons/fi";

const Tab = () => {
  const {
    Newdata,
    SavedData,
    RemoveToday,
    RemoveSaved,
  } = useFitContext();

  const [activeTab, setActiveTab] = useState("today");

  const Datas = activeTab === "today" ? Newdata : SavedData;

  const handleRemove = (id) => {
    if (activeTab === "today") {
      RemoveToday(id);
    } else {
      RemoveSaved(id);
    }
  };

  return (
    <>
      <Stats activeTab={activeTab} />

      <div className="container mx-auto w-full">

        <div className="mb-5 flex items-center justify-between">

          <div className="flex items-center gap-1">

            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`rounded-lg px-5 py-2 text-xs font-medium transition ${
                activeTab === "today"
                  ? "bg-[#252932] text-white"
                  : "text-[#7F8490] hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-5 py-2 text-xs font-medium transition ${
                activeTab === "saved"
                  ? "bg-[#252932] text-white"
                  : "text-[#7F8490] hover:text-white"
              }`}
            >
              Saved
            </button>

          </div>

        </div>

        <div className="flex w-full flex-col gap-3">

          {Datas.length === 0 ? (

            <div className="py-16 text-center">

              <p className="text-sm text-[#7F8490]">
                {activeTab === "today"
                  ? "No workouts added to today's plan yet."
                  : "No workouts saved yet."}
              </p>

            </div>

          ) : (

            Datas.map((item) => (

              <div
                key={item.id}
                className="flex min-h-[96px] w-full items-center gap-4 rounded-xl bg-[#15171D] px-4 py-3"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[66px] w-[122px] shrink-0 rounded-lg object-cover"
                />


                <div className="min-w-0 flex-1">

                  <h2 className="text-sm font-bold uppercase text-white">
                    {item.name}
                  </h2>

                  <p className="mt-1 text-xs text-[#7F8490]">
                    {Array.isArray(item.muscleGroups)
                      ? item.muscleGroups.join(", ")
                      : item.muscleGroups ||
                        "No muscle group"}
                  </p>

                  <div className="mt-2 flex items-center gap-4 text-xs text-[#B8BCC5]">


                    <span className="flex items-center gap-1">
                      <FiClock
                        className="text-[#C2F800]"
                        size={14}
                      />

                      {item.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                      <FiZap
                        className="text-[#C2F800]"
                        size={14}
                      />

                      {item.caloriesBurned} kcal
                    </span>


                    <span className="flex items-center gap-1">
                      <FiStar
                        className="text-[#C2F800]"
                        size={14}
                      />

                      {item.rating}
                    </span>

                  </div>

                </div>


                <div className="flex shrink-0 items-center gap-3">


                  <Link
                    href={`/Workouts/${item.id}`}
                    className="rounded-full border border-[#30343D] px-5 py-2 text-xs text-white transition hover:border-[#C2F800]"
                  >
                    View Details
                  </Link>


                  <button
                    type="button"
                    onClick={() =>
                      handleRemove(item.id)
                    }
                    className="flex items-center gap-2 rounded-full bg-[#C2F800] px-5 py-2 text-xs font-bold text-black transition hover:bg-[#b4e600]"
                  >
                    <FiCheck size={14} />

                    Mark as Done
                  </button>


                  <button
                    type="button"
                    onClick={() =>
                      handleRemove(item.id)
                    }
                    className="px-1 text-lg text-[#6F7480] transition hover:text-white"
                  >
                    <FiX size={18} />
                  </button>

                </div>

              </div>

            ))
          )}

        </div>
      </div>
    </>
  );
};

export default Tab;

