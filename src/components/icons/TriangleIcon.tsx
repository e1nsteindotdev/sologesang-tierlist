import { twMerge } from "tailwind-merge";

export function TriangleIcon({ color, className }: { color?: string, className?: string }) {
   return <div className={twMerge(
      `text-${color}`,
      className,
      ""
   )}>
      <svg width="100%" height="100%" viewBox="0 0 80 72" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path d="M32.067 4.81636C35.4829 -1.10006 44.0225 -1.10008 47.4383 4.81635L78.181 58.0641C81.5968 63.9805 77.327 71.3761 70.4953 71.3761H9.01007C2.17837 71.3761 -2.09145 63.9806 1.32439 58.0641L32.067 4.81636Z" fill="currentColor" />
      </svg>

   </div>
}
