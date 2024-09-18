"use client"

import { useRef } from "react"

export default function Page() {
  const modal_ref = useRef<HTMLDialogElement>(null)

  return <div className="flex center gap-10 h-screen">
    <div className="flex gap-6 p-10 w-[1000px] justify-center bg-gray-200 h-[1000px]">

      <div className="flex-1 flex gap-5 justify-start items-center py-10 px-10 bg-blue-600">
        <div className="w-20 h-20 bg-green-600"></div>
        <div className="w-20 h-20 bg-red-600"></div>
      </div>
      <div className="w-20 h-20 bg-pink-600"></div>
    </div>
  </div>
}
