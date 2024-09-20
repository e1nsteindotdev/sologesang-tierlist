"use client"
import { twMerge } from "tailwind-merge";
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Comp } from "./Comp";
import { TierHead } from "../sub-components/TierHead";

export function TierList({ tier }: { tier: string }) {
  const tierDescription = "GREAT"


  useGSAP(() => {
    gsap.fromTo(".tier", {
      x: -50,
      opacity: 0
    },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.3,
      }),

      gsap.fromTo(".slot-box", {
        opacity: 0,
        x: 22,
      },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
        })
  }, [])

  return <div className={twMerge("tier", "flex opacity-0 flex-col md:flex-row gap-3 w-full ")}>

    <TierHead tier={tier} tierDescription={tierDescription} />

    <div className={twMerge("flex w-full flex-wrap justify-center md:justify-start items-center bg-primary-light rounded-[12px] px-5 py-5 gap-x-4 gap-y-8")}>
      <Comp tier={tier} />
      <Comp tier={tier} />
      <Comp tier={tier} />
      <Comp tier={tier} />
      <Comp tier={tier} />
      <Comp tier={tier} />
      <Comp tier={tier} />
      <Comp tier={tier} />
      <Comp tier={tier} />
      <Comp tier={tier} />
      <Comp tier={tier} />
    </div>

  </div >
}
