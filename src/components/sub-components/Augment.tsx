import Image from "next/image"
export function Augment() {
  return <div className="col-span-1 py-1 center bg-secondary rounded-[8px]">
    <Image src={"/augment-example.png"} width={48} height={48} alt="augment-icon" />
  </div >
}
