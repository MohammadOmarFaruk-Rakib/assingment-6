
import Banner from "@/Components/Banner";
import Cards from "@/Components/Cards";
import Navbar from "@/Components/Navbar";
import { Suspense } from "react";
import Loading from "../Components/Loading";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <section>
      <Navbar/>
      <Banner/>

      <Suspense fallback={<Loading/>}>
      <Cards/>
      </Suspense>
      <Footer/>
    </section>
  );
}
