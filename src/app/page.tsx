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


        <div className="flex flex-col md:flex-row justify-between items-start gap-3 md:gap-4  md:items-end">
          <div className="flex gap-2 center py-4 px-5 rounded-[12px] bg-primary-light">
            <Image src="/tft-logo.png" className="w-[50px] h-[45px] md:w-[76px] md:h-[70px]" width={76} height={70} alt="tft-logo" />
            <div className="flex flex-col">
              <p className="font-[900] leading-none text-[30px]  md:text-[44px] text-accent-1">TIER LIST</p>
              <p className="font-[700] leading-none text-[16px] md:text-[21px] pl-1 text-accent-1">PATCH {patch}</p>
            </div>

          </div>

          <div className="flex items-start flex-col md:items-end gap-2 md:gap-3">
            <p className="p-3 py-[8px] md:py-[10px] rounded-[12px] bg-primary-light text-[12px] md:text-[14.5px] font-[800]">LAST UPDATE: {last_update_date}</p>
            <div className="p-3 py-[8px] md:py-[10px] flex  rounded-[12px] bg-primary-light ">
              <a href={"https://www.twitch.tv/sologesang"} target="_blank" className="text-[12px] inline-block whitespace-nowrap md:text-[14.5px] font-[800]">CURATED AND UPDATED BY:
                <span className="font-[900] px-[3px] text-[12px] md:text-[15px] text-[#009DFF]">SOLOGESANG
                  <Image src="/icons/go-to-link-icon.svg" width={18} height={18} className="pb-1 inline mx-1" alt="go to link icon" />
                </span>
              </a>
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
