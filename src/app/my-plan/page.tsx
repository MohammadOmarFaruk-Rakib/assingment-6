import Tab from "@/Components/Tab";

export default function page() {
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-[30px] font-bold ">MY PLAN</h1>
        <p className="text-[14px] text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>


      <Tab/>
    </div>
  );
}
