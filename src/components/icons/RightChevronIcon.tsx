import { twMerge } from "tailwind-merge";

export function RightChevronIcon({ className, color }: { className?: string, color?: string }) {
   return (
      <div className={twMerge(`${color}`, className)}>
         <svg width="100%" height="100%" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.35156 1.5L7.46414 7.27299C7.88197 7.66761 7.88197 8.33239 7.46414 8.72701L1.35156 14.5" stroke="currentColor" stroke-width="2.29412" stroke-linecap="round" />
         </svg>
      </div >
   )
}

