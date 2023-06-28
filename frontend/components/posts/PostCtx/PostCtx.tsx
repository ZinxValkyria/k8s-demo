'use client';
import { createContext, useState } from "react";
import useFetch from "@/hooks/useFetch";

export const postContext = createContext(useFetch('http://localhost:3000/chirp'));

type Props = {
    children: React.ReactNode,
}

function PostCtx({children}: Props) {

    const {data, error, loading} = useFetch('http://localhost:3000/chirp');

    return <>
        <postContext.Provider value={{data, error, loading}}>
            {children}
        </postContext.Provider>
    </>


}

export default PostCtx;