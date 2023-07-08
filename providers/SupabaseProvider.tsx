"use client";

import { Database } from "@/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { ReactNode, useState } from "react";

type SupabaseProviderProps = {
  children: ReactNode;
}

const SupabaseProvider = (props: SupabaseProviderProps) => {
  const { children } = props;
  const [supabaseClient, _] = useState(() => createClientComponentClient<Database>())

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
