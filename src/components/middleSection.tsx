"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import Image from "next/image"
export function MiddleSection() {
  useGSAP(() => {
    gsap.fromTo('.middle-section', {
      y: -20,
      opacity: 0,
    },
      {
        y: 0,
        opacity: 1,
      });
  }, [])
  const patch = "14.1B"
  const last_update_date = "13 AUGUST"
  return <div className="flex opacity-0 middle-section flex-col md:flex-row justify-between items-start gap-3 md:gap-4  md:items-end">
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
}
