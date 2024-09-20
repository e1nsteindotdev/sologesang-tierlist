import { Slot } from "./CompSlot"

export function Map() {
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
