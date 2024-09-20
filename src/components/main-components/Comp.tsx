"use client"
import { twMerge } from "tailwind-merge";
import Image from "next/image"
import { TriangleIcon } from "../icons/TriangleIcon";
import { TraitIcon } from "../icons/TraitIcon";
import { getBorderColor } from "@/lib/tailwind-utils";
import { useRef } from "react";
import { CompModal } from "./CompModal";

export function Comp({ tier }: { tier: string }) {
  // this represents one particular tier
  const compRef = useRef<HTMLDialogElement>(null)

  return <div className={twMerge("relative opacity-0 slot-box")}>
    <CompModal compRef={compRef} tier={tier} />
    <div
      className={twMerge("absolute top-[-10px] left-[50%] transform translate-x-[-50%]  py-[6px] bg-[#2054FF] px-[6px] rounded-sm")}>
      <TriangleIcon className={"w-[12px] h-[12px]  "} />
    </div>

    <Image
      onClick={() => {
        compRef?.current?.showModal();
      }}
      src="/zoe.png" width={85} height={85} className={twMerge(`border-[7px] pointer-cursor rounded-[16px]`, getBorderColor(tier))} alt="zoe" />
    <div className={twMerge(
      "absolute bg-[#3F2082] py-[4.5px] px-[3.5px] rounded-[6px]",
      "absolute left-[50%] transform translate-x-[-50%] bottom-[-12px]"
    )}>
      <TraitIcon name="example" />
    </div>

  </div>
}








