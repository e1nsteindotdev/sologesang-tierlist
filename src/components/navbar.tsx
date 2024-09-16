"use client"

import "@/styles/modals.css";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Seperator } from "./library/seperator";
import { useState, useRef } from "react";
import Icon from "../../public/icons/menu-icon.svg"
import { Modal } from "./library/modal";



export function Navbar() {
  const [triggerMenu, setTriggerMenu] = useState(false);

  // modal that appears when you click on a menu button (ex. the about button) 
  const modalRef = useRef<HTMLDialogElement>(null)

  // modal that appears when the screen is small
  const firstLayerModal = useRef<HTMLDialogElement>(null)

  // button componenet 
  function MenuButton({ children, className }: { className?: string, children: React.ReactNode }) {
    return <div className="p-[4px] w-full">
      <button
        data-open-modal
        onClick={() => {
          modalRef?.current?.showModal();
        }}
        className={twMerge(
          "hover:bg-[#6735D6] transition-all ease-out duration-300 py-5 uppercase w-full px-12 rounded-[4px] font-[800] text-[18px]",
          className && className
        )}>
        {children}
      </button>


      <dialog
        data-modal
        className="secondLayer"
        ref={modalRef}
        onClick={(e) => {
          const dimenstions = modalRef?.current?.getBoundingClientRect()
          if (dimenstions && (e.clientX < dimenstions.left || e.clientX > dimenstions.right || e.clientY > dimenstions.top || e.clientY < dimenstions.bottom)) {
            modalRef?.current?.classList.add('close'); // run animation here
            modalRef?.current?.close();
          }
        }}
      >
        <div
          className="min-w-[200px] bg-primary-dark min-h-[400px] center text-white"
        >
          <h1>Hello World!</h1>
        </div>
      </dialog>
    </div >
  }

  // the button that triggers the menu
  function MenuIcon() {
    return (
      <button onClick={() => {
        if (window.innerWidth > 1024) {
          setTriggerMenu(prev => !prev)
        } else {
          firstLayerModal?.current?.showModal();
          setTriggerMenu(prev => !prev);
        }

      }} className={twMerge(
        `p-2 box-border m-0 border-[2px] border-transparent rounded-[8px]`,
      )}>
        <Image src={Icon} width={32} height={32} alt="menu-icon" className="sm icon" />
      </button>
    )
  }

  return <nav className={twMerge(
    "flex w-full relative",
  )} >
    <div className={twMerge(
      "flex justify-between relative w-full items-center",
      "transform transition-all duration-500 translate-x-0",
      "bg-primary-dark px-8 py-4 origin-left rounded-[24px]",
      triggerMenu && "left-0 w-[calc(100%-84px)] right-0"
    )}>

      <div className="flex center gap-2">
        <div className={twMerge("hexagon flex center", `xl:w-[44px] xl:h-[48px]`, `bg-white`)}>
          <div className={twMerge("hexagon center overflow-hidden", `w-[35px] h-[40px] md:w-[35px] md:h-[40px] xl:w-[36px] xl:h-[40px]`, `bg-gray-400`)}>
            <Image src="/anime-avatar.png" alt="avatar" width={35} height={40} />
          </div>
        </div>
        <p className="text-[26px] hidden md:block font-[700] ">SOLOGESANG</p>
      </div>

      <div className="relative">

        <div className={twMerge(
          "transform transition-all duration-300 translate-x-0",
          triggerMenu && " rounded-[8px] border-[#844BFF] border-opacity-100 bg-primary-light "
        )} >
          <MenuIcon />
        </div>

        <Modal ref={firstLayerModal}>
          <div>
            <MenuButton className="rounded-t-[12px]"> accounts </MenuButton>
            <Seperator className="bg-[#844BFF] h-[1.5px] opacity-20" />
            <MenuButton> about </MenuButton>
            <Seperator className="bg-[#844BFF] h-[1.5px] opacity-20" />
            <MenuButton> contact </MenuButton>
            <Seperator className="bg-[#844BFF] h-[1.5px] opacity-20" />
            <MenuButton className="rounded-b-[12px]"> donate </MenuButton>
          </div>
        </Modal>

        <div className={twMerge(
          "absolute opacity-0 left-[100%] flex-col ml-10 top-[-18px] bg-primary-dark border-[2px] border- rounded-[16px] items-start justify-start",
          "transition-all transform translate-x-[150px] duration-500 ease-in-out",
          "border-[1px] border-[#844BFF] border-opacity-50",
          triggerMenu && "flex opacity-100 translate-x-0"
        )}>

          <MenuButton className="rounded-t-[12px]"> accounts </MenuButton>
          <Seperator className="bg-[#844BFF] h-[1.5px] opacity-20" />
          <MenuButton> about </MenuButton>
          <Seperator className="bg-[#844BFF] h-[1.5px] opacity-20" />
          <MenuButton> contact </MenuButton>
          <Seperator className="bg-[#844BFF] h-[1.5px] opacity-20" />
          <MenuButton className="rounded-b-[12px]"> donate </MenuButton>
        </div>
      </div>

    </div>
  </nav>
}
