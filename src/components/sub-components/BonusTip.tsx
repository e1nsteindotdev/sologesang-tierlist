export function BonusTips() {
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
