'use client';
import { useEffect, useState } from "react";
import ChirpBox from "../chirp";
import { Chirp } from "../chirp/typedef";

export default function ChirpArray() {
    async function getChirps() {
        let headersList = {
            "Accept": "*/*",
        }
           
        let response = await fetch("http://localhost:3000/chirp", { 
            method: "GET",
            headers: headersList
        });
        let data = await response.json();
        setChirps(data);
        console.log("uh oh")
    };

    let [chirps, setChirps] = useState<Chirp[]>();

    useEffect(() => {
        getChirps()
    }, [])

    return (<>
        <div className='flex flex-col justify-center gap-1 content-center'>
            {chirps?.map((chirp, index) => (
                <ChirpBox key={index} {...{ chirp }} />
            ))}
        </div>
    </>)
}