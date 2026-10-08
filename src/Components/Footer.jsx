export default function Footer() {
  return (
    <footer className="w-full relative top-0 z-30 border border-t-[#252830] bg-[#08090B]">
      <div className="container mx-auto flex min-h-[90px] items-center justify-between px-4">

        <div className="flex items-center gap-2">
          <div className="text-[#C2F800]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 7h3v10H4V7Zm13 0h3v10h-3V7ZM7 10h10v4H7v-4ZM2 9h2v6H2V9Zm18 0h2v6h-2V9Z" />
            </svg>
          </div>

          <span className="text-sm font-bold tracking-wide text-white">
            FITLOG
          </span>
        </div>


        <p className="text-xs text-[#737984]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}
