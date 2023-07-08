"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import { ReactNode } from "react";

type UserProviderProps = {
  children: ReactNode;
}

const UserProvider = (props: UserProviderProps) => {
  const { children } = props;

  return (
    <MyUserContextProvider>
      {children}
    </MyUserContextProvider>
  );
};

export default UserProvider;
