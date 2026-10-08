import Addbuttons from "@/Components/Addbuttons";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

const Page = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const SingleData = await res.json();

  return (
    <>
      <Navbar />

      <section className="px-4 py-7 text-white">
        <div className="container mx-auto">
          <div className="flex justify-center gap-8 p-5 lg:grid-cols-[380px_1fr]">
            <div className="rounded-xl">
              <img
                src={SingleData.image}
                alt={SingleData.name}
                className="h-[800px] w-[600px] rounded-2xl object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl font-black uppercase leading-none">
                {SingleData.name}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-5 text-[#737984]">
                {SingleData.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {SingleData.muscleGroups?.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#C2F800] px-3 py-1 text-[9px] font-bold uppercase text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-[#252830] bg-[#15171D]">
                <div className="flex items-center justify-between border-b border-[#252830] px-4 py-3">
                  <span className="text-[9px] font-bold uppercase text-[#737984]">
                    Equipment
                  </span>
                  <span className="text-xs">
                    {SingleData.equipment}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#252830] px-4 py-3">
                  <span className="text-[9px] font-bold uppercase text-[#737984]">
                    Difficulty
                  </span>
                  <span className="text-xs">
                    {SingleData.difficulty}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#252830] px-4 py-3">
                  <span className="text-[9px] font-bold uppercase text-[#737984]">
                    Sets
                  </span>
                  <span className="text-xs">
                    {SingleData.sets}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#252830] px-4 py-3">
                  <span className="text-[9px] font-bold uppercase text-[#737984]">
                    Reps
                  </span>
                  <span className="text-xs">
                    {SingleData.reps}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#252830] px-4 py-3">
                  <span className="text-[9px] font-bold uppercase text-[#737984]">
                    Duration
                  </span>
                  <span className="text-xs">
                    {SingleData.duration} min
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#252830] px-4 py-3">
                  <span className="text-[9px] font-bold uppercase text-[#737984]">
                    Calories
                  </span>
                  <span className="text-xs">
                    {SingleData.caloriesBurned} kcal
                  </span>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-[9px] font-bold uppercase text-[#737984]">
                    Rating
                  </span>
                  <span className="text-xs">
                    {SingleData.rating}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xs font-bold uppercase">
                  Instructions
                </h2>

                <ol className="mt-3 space-y-2">
                  {SingleData.instructions?.map(
                    (instruction, index) => (
                      <li
                        key={index}
                        className="text-[10px] leading-4 text-[#737984]"
                      >
                        {index + 1}. {instruction}
                      </li>
                    )
                  )}
                </ol>
              </div>

              <div className="mt-6 flex gap-3">
                <Addbuttons app={SingleData} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
