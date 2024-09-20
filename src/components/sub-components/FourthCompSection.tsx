import { ComponentItem } from "./ComponentItem"
import { Augment } from "./Augment"

export function FourthSection() {
  return <div className="flex flex-col gap-4 order-3 2xl:order-4">
    <div className="bg-secondary px-6 py-2 rounded-[16px] grow-0 center"><p className="font-[500] text-[25px]">AUGMENTS</p></div>
    <div className="flex-1 items-start justify-start gap-3 gap-y-3 p-3 rounded-[16px] bg-primary">
      <div className="grid grid-cols-2 gap-3">
        <Augment />
        <Augment />
        <Augment />
        <Augment />
        <Augment />
        <Augment />
      </div>
    </div>
    <div className="bg-secondary px-6 py-2 rounded-[16px] grow-0 center"><p className="font-[500] text-[25px]">COMPONENTS</p></div>

    <div className="flex justify-center grow-0 items-center gap-1 p-3 rounded-[16px] bg-primary">
      <div className="items-grid gap-2">
        <ComponentItem />
        <ComponentItem />
        <ComponentItem />
        <ComponentItem />
        <ComponentItem />
      </div>
    </div>
  </div>
}
