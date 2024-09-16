import { twMerge } from "tailwind-merge";
import { StarIcon } from "@/components/icons/StarIcon"
import { TierIcon } from "./icons/TierIcon";
import Image from "next/image";
import { TriangleIcon } from "./icons/TriangleIcon";
import { TraitIcon } from "./icons/TraitIcon";
import { getBorderColor, getTextColor, starColor } from "@/lib/tailwind-utils";

export function TierList({ tier }: { tier: string }) {
  const tierDescription = "GREAT"

  function TierListSlot() {
    const borderColor = `border-tier-${tier}`
    return <div className={twMerge("relative")}>

      <div className={twMerge("absolute top-[-10px] left-[50%] transform translate-x-[-50%]  py-[6px] bg-[#2054FF] px-[6px] rounded-sm")}>
        <TriangleIcon className={"w-[12px] h-[12px]  "} />
      </div>

      <Image src="/zoe.png" width={85} height={85} className={twMerge(`border-[7px]   rounded-[16px]`, getBorderColor(tier), borderColor)} alt="zoe" />

      <div className={twMerge(
        "absolute bg-[#3F2082] py-[4.5px] px-[3.5px] rounded-[6px]",
        "absolute left-[50%] transform translate-x-[-50%] bottom-[-12px]"
      )}>
        <TraitIcon name="example" />
      </div>


    </div>
  }


  return <div className={twMerge("flex flex-col md:flex-row gap-3 w-full ")}>

    <div className={twMerge("relative flex-1 center bg-primary-light rounded-[12px] min-w-[108px] pb-2 pt-4 md:py-0")}>

      <div className="transform top-[50%] translate-y-[-50%] absolute left-[-20px] md:left-[-32px]  flex flex-col gap-2">
        <StarIcon color={starColor(tier)[0]} className="size-[16px] md:size-4 lg:size-5" />
        <StarIcon color={starColor(tier)[1]} className="size-[16px] md:size-4 lg:size-5" />
        <StarIcon color={starColor(tier)[2]} className="size-[16px] md:size-4 lg:size-5" />
        <StarIcon color={starColor(tier)[3]} className="size-[16px] md:size-4 lg:size-5" />
      </div>
      <div className={twMerge("flex flex-col center gap-1 md:gap-2")}>
        <div className="flex items-center">
          <TierIcon tier={tier} />
        </div>

        <p className={twMerge(`text-tier-${tier}`, " text-[20px] font-[800] uppercase")} >
          {tierDescription}
        </p>
      </div>
    </div>

    <div className={twMerge("flex w-full flex-wrap justify-center md:justify-start items-center bg-primary-light rounded-[12px] px-5 py-5 gap-x-4 gap-y-8")}>
      <TierListSlot />
      <TierListSlot />
      <TierListSlot />
      <TierListSlot />
      <TierListSlot />
      <TierListSlot />
      <TierListSlot />
      <TierListSlot />
      <TierListSlot />
      <TierListSlot />
      <TierListSlot />
    </div>

  </div >
}
