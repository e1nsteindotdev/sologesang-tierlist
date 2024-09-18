"use client"
import { twMerge } from "tailwind-merge";
import Image from "next/image"
import { TriangleIcon } from "./icons/TriangleIcon";
import { TraitIcon } from "./icons/TraitIcon";
import { getBorderColor, getTextColor, starColor } from "@/lib/tailwind-utils";
import { useRef } from "react";
import { StarIcon } from "./icons/StarIcon";
import { ChampionIcon } from "./icons/ChampionIcon";
import { CoinIcon } from "./icons/CoinIcon";
import { RightChevronIcon } from "./icons/RightChevronIcon";
import { DividerVerticalIcon } from "@radix-ui/react-icons";

export function TierListComp({ tier }: { tier: string }) {
  const compRef = useRef<HTMLDialogElement>(null)
  compRef?.current?.showModal()


  function Comp() {
    return <dialog
      data-modal
      className="secondLayer text-white rounded-[32px] bg-primary-light"
      ref={compRef}
      onClick={(e) => {
        const dimensions = compRef?.current?.getBoundingClientRect()
        if (dimensions && (e.clientX < dimensions.left || e.clientX > dimensions.right || e.clientY < dimensions.top || e.clientY > dimensions.bottom)) {
          compRef?.current?.classList.add('close'); // run animation here
          compRef?.current?.close();
        }
      }}
    >
      <div className="bg-primary-light rounded-[32px] p-4 gap-4 flex items-stretch justify-center" >

        <FirstSection tier={tier} />
        <SecondSection tier={tier} />
        <ThirdSection />
        <FourthSection />

      </div>
    </dialog>
  }

  return <div className={twMerge("relative opacity-0 slot-box")}>
    <Comp />
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


function FirstSection({ tier }: { tier: string }) {
  return <div className="gap-4 flex flex-col flex-1 justify-center ">

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

function SecondSection({ tier }: { tier: string }) {
  function Trait() {
    return <div className="bg-accent-2 rounded-[52px] flex items-center justify-start">
      <div className="rounded-full bg-secondary p-3">
        <Image src={'/trait-example.png'} width={32} height={32} className="" alt="trait-icon" />
      </div>
      <div className="flex flex-col pl-3 pr-8 items-start justify-start">
        <p className="text-[16px] font-[900]">BASTION</p>
        <p className="text-[14px] font-[900]">3 <span className="opacity-40 font-[800]">/ 6 / 8 / 10</span></p>
      </div>
    </div>
  }
  return <div className="flex flex-col gap-4 ">

    <div className="bg-secondary px-12 py-2 rounded-[16px] grow-0 center"><p className="font-[500] text-[25px]">TRAITS</p></div>

    <div className="bg-primary p-3 rounded-[16px] flex-1 flex flex-col justify-start items-start gap-3">
      <Trait />
      <Trait />
      <Trait />
      <Trait />
      <Trait />
      <Trait />
    </div>


    <div className="flex flex-col gap-3">
      <div className="bg-primary flex items-center justify-start gap-2 px-4 py-2 rounded-[12px]">
        <ChampionIcon className="w-[19px] h-[22.4px] text-secondary" />
        <p className="text-[25px] font-[600]">Champions: 4</p>
      </div>

      <div className="bg-primary flex items-center justify-start gap-2 px-4 py-2 rounded-[12px]">
        <CoinIcon className="w-[21px] h-[20px] text-secondary" />
        <p className="text-[25px] font-[600]">Cost: 9</p>
      </div>
    </div>


  </div>

}

function BonusTips() {
  function Tip() {
    return <div className="bg-[#7F44FF] flex flex-col justify-start  gap-2 px-4 py-3 rounded-[12px]">
      <div className="flex-1 center px-6 py-1 text-white rounded-[8px] bg-[#5F31C5] opacity-70"><p className="text-white text-[16px] font-[700]">BONUS TIP</p></div>
      <p className="font-[600] text-[14px] text-white max-w-[140px] text-center opacity-80">You are so trash that there is no tip that I can give that would make you win the game</p>
    </div>
  }
  return <div className="flex items-center justify-start p-3 gap-3 bg-primary rounded-[16px]">
    <Tip />
    <Tip />
    <Tip />
    <Tip />
  </div>
}


function Map() {
  function Slot({ champion }: { champion?: string }) {
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

  function Row() {
    return <div className="flex gap-[16px]">
      <Slot />
      <Slot champion={"asdf"} />
      <Slot />
      <Slot />
      <Slot />
      <Slot />
      <Slot />
    </div>
  }
  return <div className="bg-primary center p-[27px] rounded-[14px] flex flex-col">
    <div className="flex flex-col gap-[-20px]">
      <Row />
      <div className="flex gap-0 center m-[-12px]">
        <div className="w-[65px] h-4 bg-transparent"></div>
        <Row />
      </div>
      <Row />
      <div className="flex gap-0 center m-[-12px]">
        <div className="w-[65px] h-4 bg-transparent"></div>
        <Row />
      </div>
    </div>


  </div>
}
function LevelSelector() {
  return <div className="flex flex-1 gap-[12px]">
    <div className="bg-secondary px-6 py-2 rounded-[16px] grow-0 center"><p className="font-[500] text-[25px]">SELECT LEVEL</p></div>
    <div className="bg-primary flex flex-1 rounded-[16px]">
      <div className="flex-1 center">
        <p className="text-[25px] font-medium text-[#6F40D6]">04</p>
      </div>

      <div className="flex-1 center">
        <p className="text-[25px] font-medium text-[#6F40D6]">04</p>
      </div>

      <div className="flex-1 center">
        <p className="text-[25px] font-medium text-[#6F40D6]">04</p>
      </div>

      <div className="flex-1 center">
        <p className="text-[25px] font-medium text-[#6F40D6]">04</p>
      </div>

      <div className="flex-1 center ">
        <p className="text-[25px] font-medium text-[#6F40D6]">04</p>
      </div>
      <div className="flex-1 center">
        <p className="text-[25px] font-medium text-[#6F40D6]">04</p>
      </div>
      <div className="flex-1 center">
        <p className="text-[25px] font-medium text-[#6F40D6]">04</p>
      </div>
    </div>
  </div>
}

function CoreItems() {
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
  </div>
}
function ThirdSection() {
  return <div className="flex flex-col  gap-4">
    <CoreItems />
    <Map />
    <BonusTips />
    <LevelSelector />
  </div>
}

function FourthSection() {
  return <div className="flex flex-col gap-4">
    <div className="bg-secondary px-6 py-2 rounded-[16px] grow-0 center"><p className="font-[500] text-[25px]">AUGMENTS</p></div>
    <div className="flex-1 items-start justify-start gap-3 gap-y-3 p-3 rounded-[16px] bg-primary">
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-1 py-1 center bg-secondary rounded-[8px]">
          <Image src={"/augment-example.png"} width={48} height={48} alt="augment-icon" />
        </div >
        <div className="col-span-1 py-1 center bg-secondary rounded-[8px]">
          <Image src={"/augment-example.png"} width={50} height={50} alt="augment-icon" />
        </div >
        <div className="col-span-1 py-1 center bg-secondary rounded-[8px]">
          <Image src={"/augment-example.png"} width={50} height={50} alt="augment-icon" />
        </div >
        <div className="col-span-1 py-1 center bg-secondary rounded-[8px]">
          <Image src={"/augment-example.png"} width={50} height={50} alt="augment-icon" />
        </div >
        <div className="col-span-1 py-1 center bg-secondary rounded-[8px]">
          <Image src={"/augment-example.png"} width={50} height={50} alt="augment-icon" />
        </div >
        <div className="col-span-1 py-1 center bg-secondary rounded-[8px]">
          <Image src={"/augment-example.png"} width={50} height={50} alt="augment-icon" />
        </div >
        <div className="col-span-1 py-1 center bg-secondary rounded-[8px]">
          <Image src={"/augment-example.png"} width={50} height={50} alt="augment-icon" />
        </div >
        <div className="col-span-1 py-1 center bg-secondary rounded-[8px]">
          <Image src={"/augment-example.png"} width={50} height={50} alt="augment-icon" />
        </div >
      </div>
    </div>
    <div className="bg-secondary px-6 py-2 rounded-[16px] grow-0 center"><p className="font-[500] text-[25px]">COMPONENTS</p></div>

    <div className="flex justify-center grow-0 items-center gap-1 p-3 rounded-[16px] bg-primary">
      <div className="items-grid gap-2">

        <div className="relative rounded-[8px] col-span-1 row-span-1 h-auto">
          <Image src={"/item-example.png"} className="rounded-[4px]" width={40} height={40} alt="item-icon" />
          <p className="absolute top-[5%] left-[50%] transfrom translate-x-[-40%] translate-y-[-100%] text-[19px] font-[900] text-white text-stroke">X3</p>
        </div>

        <div className="relative rounded-[8px] col-span-1 row-span-1 h-auto">
          <Image src={"/item-example.png"} className="rounded-[4px]" width={40} height={40} alt="item-icon" />
          <p className="absolute top-[5%] left-[50%] transfrom translate-x-[-40%] translate-y-[-100%] text-[19px] font-[900] text-white text-stroke">X3</p>
        </div>
        <div className="relative rounded-[8px] col-span-1 row-span-1 h-auto">
          <Image src={"/item-example.png"} className="rounded-[4px]" width={40} height={40} alt="item-icon" />
          <p className="absolute top-[5%] left-[50%] transfrom translate-x-[-40%] translate-y-[-100%] text-[19px] font-[900] text-white text-stroke">X3</p>
        </div>
        <div className="relative rounded-[8px] col-span-1 row-span-1 h-auto">
          <Image src={"/item-example.png"} className="rounded-[4px]" width={40} height={40} alt="item-icon" />
          <p className="absolute top-[5%] left-[50%] transfrom translate-x-[-40%] translate-y-[-100%] text-[19px] font-[900] text-white text-stroke">X3</p>
        </div>
        <div className="relative rounded-[8px] col-span-1 row-span-1 h-auto">
          <Image src={"/item-example.png"} className="rounded-[4px]" width={40} height={40} alt="item-icon" />
          <p className="absolute top-[5%] left-[50%] transfrom translate-x-[-40%] translate-y-[-100%] text-[19px] font-[900] text-white text-stroke">X3</p>
        </div>

      </div>
    </div>
  </div>
}
