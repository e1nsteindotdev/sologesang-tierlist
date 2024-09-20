import Image from "next/image"
export function ComponentItem() {
  return <div className="relative rounded-[8px] col-span-1 row-span-1 h-auto">
    <Image src={"/item-example.png"} className="rounded-[4px]" width={40} height={40} alt="item-icon" />
    <p className="absolute top-[5%] left-[50%] transfrom translate-x-[-40%] translate-y-[-100%] text-[19px] font-[900] text-white text-stroke">X3</p>
  </div>
}
