'use client';
import { useState } from "react";
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
    };
    
    let [chirps, setChirps] = useState<Chirp[]>();

    return (<>
    <button className='bg-blue-500 mb-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={getChirps}>
        Refresh
    </button>
    <div className='flex flex-col justify-center gap-1 content-center w-full'>
        {chirps?.map((chirp, index) => (
            <ChirpBox key={index} {...{ chirp }} />
        ))}
    </div>
    </>)
}