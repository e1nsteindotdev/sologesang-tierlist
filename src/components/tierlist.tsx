import { twMerge } from "tailwind-merge";
import { StarIcon } from "@/components/icons/StarIcon"
import { TierIcon } from "./icons/TierIcon";
import Image from "next/image";
import { TriangleIcon } from "./icons/TriangleIcon";
import { TraitIcon } from "./icons/TraitIcon";

export function TierList({ tier }: { tier: string }) {

  function TierListSlot() {
    return <div className={twMerge("relative")}>

      <div className={twMerge("absolute top-[-10px] left-[50%] transform translate-x-[-50%]  py-[6px] bg-[#2054FF] px-[6px] rounded-sm")}>
        <TriangleIcon className={"w-[12px] h-[12px]  "} />
      </div>


      <Image src="/zoe.png" width={85} height={85} className={twMerge(`border-[7px]   rounded-[16px]`, `border-tier-${tier}`)} alt="zoe" />

      <div className={twMerge(
        "absolute bg-[#3F2082] py-[4.5px] px-[3.5px] rounded-[6px]",
        "absolute left-[50%] transform translate-x-[-50%] bottom-[-12px]"
      )}>
        <TraitIcon name="example" />
      </div>


    </div>
  }

  function starColor(tier: string) {
    switch (tier) {
      case "s":
        return ['tier-s', 'tier-s', 'tier-s', 'tier-s']
      case "a":
        return ['tier-a', 'tier-a', 'tier-a', '[#6833D0]']
      case "b":
        return ['tier-b', 'tier-b', '[#6833D0]', '[#6833D0]']
      case "c":
        return ['tier-c', '[#6833D0]', '[#6833D0]', '[#6833D0]']
      case "d":
        return ['[#6833D0]', '[#6833D0]', '[#6833D0]', '[#6833D0]']
    }

    return ['tier-[#6833D0]', 'tier-[#6833D0]', 'tier-[#6833D0]', 'tier-[#6833D0]']

  }

  return <div className={twMerge("flex gap-3 w-full ")}>

    <div className={twMerge("relative flex-1 center bg-primary-light rounded-[12px] min-w-[108px]")}>

      <div className="transform top-[50%] translate-y-[-50%] absolute left-[-32px]  flex flex-col gap-2">
        <StarIcon color={starColor(tier)[0]} className="size-[9px] md:size-4 lg:size-5" />
        <StarIcon color={starColor(tier)[1]} className="size-[9px] md:size-4 lg:size-5" />
        <StarIcon color={starColor(tier)[2]} className="size-[9px] md:size-4 lg:size-5" />
        <StarIcon color={starColor(tier)[3]} className="size-[9px] md:size-4 lg:size-5" />
      </div>
      <div className="flex flex-col center gap-2">
        <TierIcon tier={tier} />
        <p
          className={twMerge(
            `text-tier-${tier}`,
            " text-[16px] font-[700] uppercase"
          )}
        >great</p>
      </div>
    </div>




    <div className={twMerge("flex w-full flex-wrap justify-start items-center bg-primary-light rounded-[12px] px-5 py-5 gap-x-4 gap-y-11")}>
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
