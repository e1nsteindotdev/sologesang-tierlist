import { Navbar } from "@/components/navbar";
import { TierList } from "@/components/tierlist";
import Image from "next/image";

export default function HomePage() {
  const patch = "14.8B"
  const last_update_date = "24 AUGUST"
  return (
    <main className="xl:px-[280px] lg:px-[150px] md:px-[60px] px-[30px] font-druk max-w-[100vw] overflow-x-hidden flex min-h-screen flex-col justify-start bg-primary text-white py-6 gap-10">
      <Navbar />

      <div className="flex gap-[26px] w-full flex-col ">


        <div className="flex justify-between items-end">
          <div className="flex gap-2 center py-2 px-5 rounded-[12px] bg-primary-light">
            <Image src="/tft-logo.png" width={76} height={70} alt="tft-logo" />
            <div className="flex flex-col gap-2">
              <p className="font-[900] h-[44px] text-[44px] text-accent-1">TIER LIST</p>
              <p className="font-[700] text-[21px] pl-1 text-accent-1">PATCH {patch}</p>
            </div>

          </div>

          <div className="flex tracking-wide flex-col items-end gap-3">
            <div className="p-3 py-[10px] rounded-[12px] bg-primary-light">
              <p className="text-[14.5px] font-[800]">LAST UPDATE: {last_update_date}</p>
            </div>
            <div className="p-3 py-[10px] flex rounded-[12px] bg-primary-light ">
              <a href={"https://www.twitch.tv/sologesang"} target="_blank" className="text-[14.5px] font-[800]">CURATED AND UPDATED BY:
                <span className="font-[900] px-[3px] text-[15px] text-[#009DFF]">SOLOGESANG</span> </a>
              <Image src="/icons/go-to-link-icon.svg" width={18} height={18} className="pb-1" alt="go to link icon" />
            </div>

          </div>
        </div>




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
