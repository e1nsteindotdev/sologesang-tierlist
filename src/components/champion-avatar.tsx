import { twMerge } from "tailwind-merge"

export function ChampionAvatar({ children, size, bg, border }: { children: React.ReactNode, size: number, bg: string, border: string }) {
  return <div className={twMerge("hexagon flex center", `width-[${size + 10}px]`, `bg-${border}`)}>
    <div className={twMerge("hexagon center overflow-hidden", `size-[${size}px]`, `bg-${bg}`)}>
      {children}
    </div>
  </div>
}

