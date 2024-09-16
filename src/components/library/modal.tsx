import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { twMerge } from "tailwind-merge"

export const Modal = forwardRef<HTMLDialogElement, { children: React.ReactNode }>(Component)

function Component(props: { children: React.ReactNode }, ref: ForwardedRef<HTMLDialogElement>) {
  return <dialog ref={ref}
    className={twMerge("firstLayer",
      "fixed inset-y-0 right-0 h-screen w-3/4 border-black sm:max-w-sm",
    )}
  >
    {props?.children}
  </dialog>
}
