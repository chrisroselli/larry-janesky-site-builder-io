"use client";
import { MouseEventHandler, ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface Modal {
  isOpen?: boolean;
  children: ReactNode;
  onClose: MouseEventHandler<SVGElement> | undefined;
}

const Modal = ({ isOpen, onClose, children }: Modal) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 backdrop-blur-lg opacity-100 transition-opacity duration-300 ease-out z-50">
      <div className="flex justify-center items-center h-screen">
        <div className="aspect-video sm:w-1/2">
          <IoCloseOutline
            className="cursor-pointer relative w-10 h-10 p-2 bg-white rounded-full z-50 bottom-4 sm:bottom-5 sm:right-5"
            arial-label="Close modal"
            onClick={onClose}
          />
          <div className="flex relative bottom-[37px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
