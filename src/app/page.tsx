import { MiddleSection } from "@/components/middleSection";
import { Navbar } from "@/components/navbar";
import { TierList } from "@/components/tierlist";
import Image from "next/image";

export default function HomePage() {
  const patch = "14.8B"
  const last_update_date = "24 AUGUST"
  return (
    <main className="xl:px-[280px] lg:px-[150px] md:px-[60px] px-[30px] font-druk max-w-[100vw] overflow-x-hidden flex min-h-screen flex-col justify-start bg-primary text-white py-6 
      gap-8 md:gap-10">
      <Navbar />

      <div className="flex gap-[26px] w-full flex-col ">

        <MiddleSection />

        <div className="flex w-full flex-1 flex-col gap-4">
          <TierList tier={"s"} />
          <TierList tier={"a"} />
          <TierList tier={"b"} />
          <TierList tier={"c"} />
          <TierList tier={"d"} />
        </div>
      </div>
    </main>

  );
}
