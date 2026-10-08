import Image from "next/image";

export default function Banner() {
  return (
    <section className=" relative top-0 z-10 container mx-auto px-8 py-12 ">
      <div className="min-h-[520px] bg-[#15171D] rounded-2xl flex items-center justify-between px-10 md:px-16">
        <div className="max-w-[50%]">
          <p className="text-[#C2F800] text-[11px] tracking-wider mb-4">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-[45px]  font-bold">TRAIN WITH INTENT. LOG
            EVERY SET.</h1>

          <p className="text-[#737984] text-sm leading-5 mt-5 max-w-md">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="mt-6 bg-[#C2F800] text-black text-xs font-bold px-4 py-2.5 rounded">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Image Area - Keep Empty For Now */}
        <div>
          {/* Your image will go here */}
          <Image src='/banner.png' width={400} height={400} alt="the image of banner"/>
        </div>
      </div>
    </section>
  );
}
