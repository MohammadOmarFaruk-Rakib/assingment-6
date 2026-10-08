"use client";

import { createContext, useContext, useState } from "react";

const FitContext = createContext(null);

export const useFitContext = () => {
  return useContext(FitContext);
};

export default function FitProvider({ children }) {
  const [Newdata, setNewdata] = useState([]);
  const [SavedData, setSavedData] = useState([]);

  const AddToday = (New) => {
    setNewdata((prev) => {
      const alreadyExists = prev.some(
        (item) => item.id === New.id
      );

      if (alreadyExists) {
        return prev;
      }

      return [...prev, New];
    });
  };

  const AddSaved = (New) => {
    setSavedData((prev) => {
      const alreadyExists = prev.some(
        (item) => item.id === New.id
      );

      if (alreadyExists) {
        return prev;
      }

      return [...prev, New];
    });
  };

  // Remove from Today's Plan
  const RemoveToday = (id) => {
    setNewdata((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  // Remove from Saved
  const RemoveSaved = (id) => {
    setSavedData((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const Sharedobj = {
    Newdata,
    SavedData,

    AddToday,
    AddSaved,

    RemoveToday,
    RemoveSaved,

    setNewdata,
    setSavedData,
  };

  return (
    <FitContext.Provider value={Sharedobj}>
      {children}
    </FitContext.Provider>
  );
};
