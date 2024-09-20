import Image from "next/image"
import { RightChevronIcon } from "@/components/icons/RightChevronIcon"

export function CoreItems() {
  return <div className="flex gap-3 flex-1">
    <div className="bg-secondary px-12 py-2 rounded-[16px] grow-0 center"><p className="font-[500] text-[25px]">CORE ITEMS</p></div>
    <div className="flex flex-1 center gap-6 py-2 px-3 rounded-[16px] bg-primary">
      <Image src="/item-example.png" width={38} height={38} alt="item" />
      <RightChevronIcon className="w-[7px] h-[13px]" />
      <Image src="/item-example.png" width={38} height={38} alt="item" />
      <RightChevronIcon className="w-[7px] h-[13px]" />
      <Image src="/item-example.png" width={38} height={38} alt="item" />
      <RightChevronIcon className="w-[7px] h-[13px]" />
      <Image src="/item-example.png" width={38} height={38} alt="item" />
      <RightChevronIcon className="w-[7px] h-[13px]" />
      <Image src="/item-example.png" width={38} height={38} alt="item" />
      <RightChevronIcon className="w-[7px] h-[13px]" />
    </div>
  </div>;
}

