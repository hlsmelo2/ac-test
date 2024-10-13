'use client'

import { SessionProvider } from "next-auth/react";

export default function NextAuthSessionProvider({ session, children }: any) {
    if (session === undefined) {
        return <div>{ children }</div>;
    }

    return <SessionProvider session={session}>{children}</SessionProvider>;
}
