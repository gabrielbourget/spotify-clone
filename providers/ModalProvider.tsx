"use client";

// -> Beyond codebase
import { useEffect, useState } from "react";
// -> Within codebase
import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  if (!isMounted) return null;
  return (

    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal />
    </>
  );
}

export default ModalProvider;
