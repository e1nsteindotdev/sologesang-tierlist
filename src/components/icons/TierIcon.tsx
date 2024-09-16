import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function TierIcon({ tier }: { tier: string }) {
   return <div className={twMerge(
      ""
   )}>
      <Image src={`/icons/${tier}-icon.svg`} width={65} height={81} alt="tier icon" className="" />
   </div>

}
