import { twMerge } from "tailwind-merge"

export const Modal2 = forwardRef<HTMLDialogElement, { children: React.ReactNode }>(Component)

function Component(props: { children?: React.ReactNode }, ref: React.Ref<HTMLDialogElement>) {
  const typedRef = ref as RefObject<HTMLDialogElement>
  return <dialog
    data-modal
    className="secondLayer"
    onClick={(e) => {
      const dimenstions = typedRef?.current?.getBoundingClientRect()
      if (dimenstions && (e.clientX < dimenstions.left || e.clientX > dimenstions.right || e.clientY > dimenstions.top || e.clientY < dimenstions.bottom)) {
        typedRef?.current?.classList.add('close'); // run animation here
        typedRef?.current?.close();
      }
    }}
    ref={ref}>

    {props?.children}

  </dialog>
}
import React, { forwardRef, RefObject, useEffect } from 'react';

type MyComponentProps = {
  children: React.ReactNode
};

export const Modal = forwardRef<HTMLDialogElement, MyComponentProps>((props, ref) => {
  const dialogRef = ref as RefObject<HTMLDialogElement>;

  return (
    <dialog
      data-modal
      className="secondLayer"
      onClick={(e) => {
        const dimenstions = dialogRef?.current?.getBoundingClientRect()
        if (dimenstions && (e.clientX < dimenstions.left || e.clientX > dimenstions.right || e.clientY > dimenstions.top || e.clientY < dimenstions.bottom)) {
          dialogRef?.current?.classList.add('close'); // run animation here
          dialogRef?.current?.close();
        }
      }}
      ref={dialogRef}>

      {props?.children}

    </dialog>
  );
});

