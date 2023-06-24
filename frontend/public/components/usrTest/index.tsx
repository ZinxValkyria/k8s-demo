'use client';
import { useSession, SessionProvider, getSession } from "next-auth/react"


export default function UsrTest() {
    const {data, status} = useSession();

    return <>
        {status}
        <pre>
            {JSON.stringify(data)}
            test
        </pre>
    </>
}