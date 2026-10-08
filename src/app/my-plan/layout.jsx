import Navbar from "@/Components/Navbar";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

