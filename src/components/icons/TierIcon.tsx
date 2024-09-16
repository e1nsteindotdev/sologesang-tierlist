import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function TierIcon({ tier }: { tier: string }) {
   switch (tier) {
      case "s":
         return <Image src={`/icons/${tier}-icon.svg`} width={65} height={81} alt="tier icon" className="w-[45px] md:w-[61px]" />
      case "a":
         return <Image src={`/icons/${tier}-icon.svg`} width={65} height={81} alt="tier icon" className="w-[54px] md:w-[74px]" />
      case "b":
         return <Image src={`/icons/${tier}-icon.svg`} width={65} height={81} alt="tier icon" className="w-[50px] md:w-[65px]" />
      case "c":
         return <Image src={`/icons/${tier}-icon.svg`} width={65} height={81} alt="tier icon" className="w-[57px] md:w-[69px]" />
      case "d":
         return <Image src={`/icons/${tier}-icon.svg`} width={65} height={81} alt="tier icon" className="w-[55px] md:w-[65px]" />
   }
   return <></>

}
