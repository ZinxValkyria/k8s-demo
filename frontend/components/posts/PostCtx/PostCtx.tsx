'use client';
import { createContext } from "react";
import useFetch from "@/hooks/useFetch";
import { PostType } from "../Post/typedef";

export const postContext = createContext({data: PostType[], error: "", loading: false});

type Props = {
    children: React.ReactNode,
}

export default function PostCtx({children}: Props) {

    const {data, error, loading} = useFetch('http://localhost:3000/chirp');

    return <>
        <postContext.Provider value={{data, error, loading}}>
            {children}
        </postContext.Provider>
    </>

}