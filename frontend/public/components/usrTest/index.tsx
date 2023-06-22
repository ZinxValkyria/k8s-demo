'use client';
import { useSession, SessionProvider } from "next-auth/react"


export default function UsrTest() {
    const { data: session, status} = useSession();
    return <>
            {(status === "authenticated") && <p>{session.user?.email}</p>}
    </>
}