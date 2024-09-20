import { FirstSection } from "../sub-components/FirstCompSection";
import { FourthSection } from "../sub-components/FourthCompSection";
import { SecondSection } from "../sub-components/SecondCompSection";
import { ThirdSection } from "../sub-components/ThirdCompSection";
import { forwardRef } from "react"

export const CompModal = forwardRef(function Comp({ compRef, tier }: { compRef: any, tier: string }) {
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
})
