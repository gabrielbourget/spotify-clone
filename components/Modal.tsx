"use client";

// -> Beyond codebase
import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
// -> Within codebase

type ModalProps = {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: ReactNode;
}

const Modal = (props: ModalProps) => {
  const { isOpen, onChange, title, description, children } = props;
  
  return (
    <div>Modal</div>
  )
}

export default Modal
