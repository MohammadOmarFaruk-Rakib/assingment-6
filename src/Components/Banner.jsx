import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative top-0 z-10 container mx-auto px-8 py-12">
      <div className="flex min-h-[520px] items-center justify-between rounded-2xl bg-[#15171D] px-10 md:px-16">
        <div className="max-w-[50%]">
          <p className="mb-4 text-[11px] tracking-wider text-[#C2F800]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-[45px] font-bold">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-md text-sm leading-5 text-[#737984]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="mt-6 rounded bg-[#C2F800] px-4 py-2.5 text-xs font-bold text-black">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Image Area */}
        <div>
          <Image
            src="/banner.png"
            width={400}
            height={400}
            alt="the image of banner"
          />
        </div>
      </div>
    </section>
  );
}
