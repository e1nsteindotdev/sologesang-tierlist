import { CoreItems } from "./CoreItems";
import { Map } from "./CompMap"
import { BonusTips } from "./BonusTip"
import { LevelSelector } from "./LevelSelector"

export function ThirdSection() {
  return <div className="flex flex-col order-4  gap-4">
    <CoreItems />
    <Map />
    <BonusTips />
    <LevelSelector />
  </div>
}
