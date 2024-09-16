import { twMerge } from "tailwind-merge";

export function Seperator({ className }: { className?: string }) {
  return <div className={twMerge("h-[2px] bg-gray-500 w-full", className && className)}>
  </div>
}
