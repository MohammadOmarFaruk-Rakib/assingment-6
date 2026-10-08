import Link from "next/link";

import { CiCalculator1 } from "react-icons/ci";
import { FaClock, FaStar } from "react-icons/fa";

const Cards = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/fitlog"
  );

  const Data = await res.json();

  return (
    <section className="relative top-0 z-20 container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Data.map((item: any) => (
          <Link
            key={item.id}
            href={`/Workouts/${item.id}`}
          >
            <div
              className="
                overflow-hidden
                rounded-xl
                bg-[#15171D]
                border border-[#252830]
                text-white
                transition
                duration-300
                hover:border-[#C2F800]
                hover:shadow-[0_0_25px_rgba(194,248,0,0.45)]
              "
            >
              <div className="h-48 w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-3">
                <div className="mb-3 flex gap-2">
                  {item.muscleGroups.map((muscle: string) => (
                    <span
                      key={muscle}
                      className="rounded-md bg-[#C2F800] px-2 py-1 text-[9px] font-bold uppercase text-black"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                <h2 className="text-sm font-bold uppercase">
                  {item.name}
                </h2>

                <p className="mt-1 text-[10px] text-gray-500">
                  {item.equipment}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-[#252830] pt-3 text-[9px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaClock />
                    {item.duration} min
                  </span>

                  <span className="flex items-center gap-1">
                    <CiCalculator1 />
                    {item.caloriesBurned} kcal
                  </span>

                  <span className="flex items-center gap-1">
                    <FaStar />
                    {item.rating}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Cards;
