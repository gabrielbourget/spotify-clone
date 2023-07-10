"use client";

// -> Beyond codebase
import { useEffect, useState } from "react";
// -> Within codebase
import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";

type ModalProviderProps = {
  products: ProductWithPrice[];
}

const ModalProvider = (props: ModalProviderProps) => {
  const { products } = props;
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  if (!isMounted) return null;
  return (

    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  );
}

export default ModalProvider;
