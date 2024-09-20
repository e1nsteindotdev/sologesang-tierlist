import Image from "next/image"
import { StarIcon } from "@/components/icons/StarIcon"
export function Slot({ champion }: { champion?: string }) {
  return <div className="relative">
    <div className="hexagon-bordered relative  w-[92px] h-[104px] bg-primary-light hexagon">

      <div className="w-[80px] h-[90px] absolute left-[6px] top-[7px] bg-secondary hexagon ">
        {
          champion && <Image src={'/zoe.png'} className="" width={85} height={95} alt="champion-slot" />
        }
      </div>
    </div>
    {champion &&
      <div className="bg-[#F6FF00]  rounded-[3px] py-[3px] center absolute gap-1 top-[8px]  px-1 left-[50%] transform translate-x-[-50%] ">
        <StarIcon className="text-black w-[15px] h-[15px]" />
        <StarIcon className="text-black w-[15px] h-[15px]" />
        <StarIcon className="text-black w-[15px] h-[15px]" />
        <StarIcon className="text-black w-[15px] h-[15px]" />
      </div>
    }
    {champion &&
      <div className="absolute  gap-1 bottom-0 left-0  w-full">
        <Image src={'/item-example.png'} className="rounded-sm border-[3px] absolute bottom-[10px] right-1 border-secondary" height={26} width={26} alt="item" />
        <Image src={'/item-example.png'} className="rounded-sm border-[3px] absolute bottom-[0px] left-[50%] transform translate-x-[-50%] border-secondary" height={26} width={26} alt="item" />
        <Image src={'/item-example.png'} className="rounded-sm border-[3px] absolute bottom-[10px] left-1 border-secondary" height={26} width={26} alt="item" />
      </div>
    }
  </div>
}
