export default function Loading() {
  return (
    <div className="flex min-h-[400px] items-center justify-center bg-[#0C0D10]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#252830] border-t-[#C2F800]"></div>

        <p className="text-sm font-semibold text-[#C2F800]">
          Loading exercises...
        </p>
      </div>
    </div>
  );
}
