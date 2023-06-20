'use client';

import { FormEvent } from "react";
import { Chirp } from "../chirp/typedef";


const postChirp = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
        content: {value: string};
    }
    let chirp: Chirp = {
        content: target.content.value,
        author: "blank",
        posted: new Date(),
        likes: 1,
    }

    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }
       
    let bodyContent = JSON.stringify({
        "post": {
        "content": target.content.value,
        "author": "AFakeName",
        "posted": new Date(),
        }
    });

    let response;
    try {
        response = await fetch("http://localhost:3000/chirp", { 
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
    } catch (e: any) {
        console.error(e.message);
        return;
    }
    if (response.status != 200) {
        console.log("Oh good heavens! Something must have gone wrong");
        return;
    }
    
    let data = await response.json();
    
    console.log(data);
       
    
}


export default function PostBox() {
    return <>
    <aside className='w-1/3 mb-1 bg-gray-400 p-4 rounded-2xl h-1/3'>
        <h1 className="mb-1 text-slate-600">Whats on your mind?...</h1>
        <form onSubmit={postChirp} id="form" >
            <textarea placeholder="Enter text here..." form="form" name="content" id="content" className="mb-1 p-1 rounded-lg bg-gray-500 w-full" />
            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Chirp!</button>
        </form>
    </aside>
    
    </>
}