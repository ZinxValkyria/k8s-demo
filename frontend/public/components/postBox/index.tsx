'use client';

import { FormEvent, useState } from "react";
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
    <aside className='card card-compact bg-neutral w-2/6 bg-base-100'>
        <div className="card-body">    
        <textarea placeholder="Whats on your mind?" form="form" name="content" id="content" className="textarea textarea-primary" />
        <form className="card-actions justify-end" onSubmit={postChirp} id="form" >
            <button type="submit" className='btn btn-primary justify-end'>Chirp!</button>
        </form>
        </div>
    </aside>
    
    </>
}