import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function TraitIcon({ color, className }: { name: string, color?: string, className?: string }) {
   const src = "/traits/example.png"
   return <div className={twMerge(
      color,
      className,
      ""
   )}>
      <Image src={src} width={17} height={17} alt="trait icon" />
   </div>
}
