import { Slot } from "./CompSlot"

export function Map() {
  const mapList = [
    ["zoe", "zed", "yasuo", null, "graves", null, "master yi"],
    ["zoe", "zed", "yasuo", null, "graves", null, "master yi"],
    ["zoe", "zed", "yasuo", null, "graves", null, "master yi"],
    ["zoe", "zed", "yasuo", null, "graves", null, "master yi"],
    ["zoe", "zed", "yasuo", null, "graves", null, "master yi"]
  ]

  return <div className="bg-primary center p-[27px] rounded-[14px] flex flex-col">
    <div className="flex flex-col gap-[-20px]">
      <Row championsList={mapList[0]} />
      <div className="flex gap-0 center m-[-12px]">
        <div className="w-[65px] h-4 bg-transparent"></div>
        <Row championsList={mapList[1]} />
      </div>
      <Row championsList={mapList[2]} />
      <div className="flex gap-0 center m-[-12px]">
        <div className="w-[65px] h-4 bg-transparent"></div>
        <Row championsList={mapList[3]} />
      </div>
    </div>


  </div>
}

function Row({ championsList }: { championsList: Array<string | null> }) {
  return <div className="flex gap-[16px]">

    {championsList.map((name, i) =>
      <Slot key={i} championName={name} />
    )}

  </div>
}
