import { getTextColor, starColor } from "@/lib/tailwind-utils";
import { StarIcon } from "@radix-ui/react-icons";
import { twMerge } from "tailwind-merge";
import { TierIcon } from "../icons/TierIcon";

export function TierHead({ tier, tierDescription }: { tier: string, tierDescription: string }) {
  return <div className={twMerge("relative flex-1 center bg-primary-light rounded-[12px] min-w-[108px] pb-2 pt-4 md:py-0")}>

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

      <p className={twMerge(getTextColor(tier), " text-[20px] font-[800] uppercase")} >
        {tierDescription}
      </p>
    </div>
  </div>
}
