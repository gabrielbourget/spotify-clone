"use client";

// -> Beyond codebase
import { useEffect, useState } from "react";
// -> Within codebase
import Modal from "@/components/Modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  if (!isMounted) return null;

  return (
    <>
      <Modal />
    </>
  );
}

export default ModalProvider;
