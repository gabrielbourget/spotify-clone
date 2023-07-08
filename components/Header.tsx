"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from 'react'
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

type HeaderProps = {
  children: ReactNode;
  className?: string;
}

const Header = (props: HeaderProps) => {
  const { children, className } = props;

  const router = useRouter();

  const handleLogout = () => {

  }

  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
            onClick={() => router.back()}
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
            onClick={() => router.forward()}
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header