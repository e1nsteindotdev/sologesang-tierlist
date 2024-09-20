import Image from "next/image"
export function Trait() {
  return <div className="bg-accent-2 rounded-[52px] flex items-center justify-start">
    <div className="rounded-full bg-secondary p-3">
      <Image src={'/trait-example.png'} width={32} height={32} className="" alt="trait-icon" />
    </div>
    <div className="flex flex-col pl-3 pr-8 items-start justify-start">
      <p className="text-[16px] font-[900]">BASTION</p>
      <p className="text-[14px] font-[900]">3 <span className="opacity-40 font-[800]">/ 6 / 8 / 10</span></p>
    </div>
  </div>;
}

