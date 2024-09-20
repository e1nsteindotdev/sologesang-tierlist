import { ChampionIcon } from "@/components/icons/ChampionIcon";
import { CoinIcon } from "@/components/icons/CoinIcon";
import { Trait } from "./Trait"

export function SecondSection({ tier }: { tier: string }) {
  return <div className="flex order-2 flex-col gap-4 ">

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
        <ChampionIcon className="w-[22px] h-[25px] text-secondary" />
        <p className="text-[25px] font-[600]">champions: 4</p>
      </div>

      <div className="bg-primary flex items-center justify-start gap-2 px-4 py-2 rounded-[12px]">
        <CoinIcon className="w-[22px] h-[25px] text-secondary" />
        <p className="text-[25px] font-[600]">cost: 9</p>
      </div>
    </div>


  </div>

}
