"use client";

import { useFitContext } from "@/context/FitProvider";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const Paths = usePathname();

  const { Newdata, SavedData } = useFitContext();

  const Navlinks = (
    <>
      <li
        className={`${
          Paths === "/"
            ? "rounded-2xl bg-[#1A2312] px-5 py-1 text-[#CCFF00]"
            : ""
        } font-semibold`}
      >
        <Link href="/">Workouts</Link>
      </li>

      <li
        className={`${
          Paths === "/my-plan"
            ? "rounded-2xl bg-[#1A2312] px-5 py-1 text-[#CCFF00]"
            : ""
        } font-semibold`}
      >
        <Link href="/my-plan">My Plan</Link>
      </li>
    </>
  );

  return (
    <section className="sticky top-0 z-50 border border-b border-[#252830] py-2 backdrop-blur-2xl">
      <nav className="container mx-auto flex items-center justify-between px-4 py-2 text-white">

        <section className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={30}
            height={30}
          />

          <p>FITLOG</p>
        </section>

        <section className="flex list-none items-center gap-4">
          {Navlinks}
        </section>

        <section className="flex items-center gap-8 font-semibold">
          <Link
            href="/my-plan"
            className="flex items-center gap-2"
          >
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#CCFF00] px-1 text-[11px] font-bold text-black">
              {Newdata.length}
            </span>
          </Link>


          <Link
            href="/my-plan"
            className="flex items-center gap-2"
          >
            <span>Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#30343D] px-1 text-[11px] font-normal text-[#B8BCC5]">
              {SavedData.length}
            </span>
          </Link>

        </section>
      </nav>
    </section>
  );
}
