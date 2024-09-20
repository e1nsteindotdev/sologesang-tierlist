import { getBorderColor, getTextColor, starColor } from "@/lib/tailwind-utils";
import { StarIcon } from "@/components/icons/StarIcon";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function FirstSection({ tier }: { tier: string }) {
  return <div className="gap-4 order-1 flex flex-col flex-1 justify-center ">

    <div className="p-6 rounded-[16px] flex-1 flex flex-col justify-start items-start bg-primary gap-6">
      <Image src={"/zoe.png"} className={twMerge("rounded-[16px] border-[7px]", getBorderColor(tier))} width={200} height={220} alt="champion image" />
      <div className="">
        <p className="text-[31px] font-bold">SCHOLAR NORRA</p>
        <div className="flex justify-start items-center gap-4">
          <p className={twMerge("text-[25px] font-[900]", getTextColor(tier))}>A-TIER</p>
          <p className="italic font-[800] text-[20px]">GOOD</p>
        </div>
        <div className="top-[50%] flex gap-2">
          <StarIcon color={starColor(tier)[0]} className="size-[16px] md:size-4 lg:size-5" />
          <StarIcon color={starColor(tier)[1]} className="size-[16px] md:size-4 lg:size-5" />
          <StarIcon color={starColor(tier)[2]} className="size-[16px] md:size-4 lg:size-5" />
          <StarIcon color={starColor(tier)[3]} className="size-[16px] md:size-4 lg:size-5" />
        </div>
      </div>
      <p className="text-[21px] font-[800]">DIFFICULTY: Medium</p>
    </div>


    <div className="flex-2 px-6 py-4 gap-2 rounded-[16px] bg-primary flex max-w-[240px] flex-col justify-start items-center">
      <p className="w-[140px] py-1 text-center rounded-[16px] bg-primary-light text-[20px] font-bold">TIP</p>
      <p className="font-bold flex text-[16px] opacity-80 text-center pb-3">
        You are so trash that there is no tip that I can give that would make you win the game
      </p>
    </div>

  </div>
}
