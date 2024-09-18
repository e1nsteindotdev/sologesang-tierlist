import { twMerge } from "tailwind-merge";

export function CoinIcon({ color, className }: { color?: string, className?: string }) {
   return <div className={twMerge(
      "",
      className,
      color,
   )}>
      <svg width="100%" height="100%" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M18.3025 10.8804C19.547 14.6227 16.2447 18.6673 10.5156 18.6673C4.7865 18.6673 1.48861 14.6271 2.7331 10.8804C3.67535 8.0447 7.07547 6.2002 10.52 6.2002C13.9646 6.2002 17.3647 8.04026 18.307 10.8804H18.3025Z" stroke="#2C1081" stroke-width="4.03597" stroke-miterlimit="10" />
         <path d="M22.5831 5.49352C24.0409 9.88922 20.1652 14.6316 13.445 14.6316C6.72478 14.6316 2.84465 9.88477 4.30692 5.49352C5.40918 2.16007 9.40487 0 13.445 0C17.4851 0 21.4764 2.16007 22.5831 5.49352Z" fill="currentColor" />
      </svg>
   </div>
}
