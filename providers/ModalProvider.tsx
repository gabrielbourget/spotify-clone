"use client";

// -> Beyond codebase
import { useEffect, useState } from "react";
// -> Within codebase
import AuthModal from "@/components/AuthModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
    </>
  );
}

export default ModalProvider;
