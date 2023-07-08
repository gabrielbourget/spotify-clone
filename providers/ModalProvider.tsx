"use client";

import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  if (!isMounted) return null;

  return (
    <>
      Modal Provider
    </>
  );
}

export default ModalProvider;
