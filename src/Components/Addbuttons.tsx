"use client";

import { useFitContext } from "@/context/FitProvider";
import { toast } from "react-toastify";

function Addbuttons({ app }) {
  const {
    AddToday,
    AddSaved,
    Newdata,
    SavedData,
  } = useFitContext();

  const OnHandleAdd = () => {
    if (Newdata.some((item) => item.id === app.id)) {
      toast.info("Already added to today's plan");
      return;
    }

    AddToday(app);
    toast.success("Added to today's plan!");
  };

  const OnHandleSave = () => {
    if (SavedData.some((item) => item.id === app.id)) {
      toast.info("Already saved");
      return;
    }

    AddSaved(app);
    toast.success("Saved for later!");
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={OnHandleAdd}
        className="rounded-full bg-[#C2F800] px-5 py-2 text-sm font-bold text-black"
      >
        Add To Today's Plan
      </button>

      <button
        onClick={OnHandleSave}
        className="rounded-full border border-[#30343D] px-5 py-2 text-sm text-white"
      >
        Save For Later
      </button>
    </div>
  );
}

export default Addbuttons;
