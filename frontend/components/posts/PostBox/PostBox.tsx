'use client';
import {Post} from "../Post/typedef"

const postPost = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
        content: {value: string};
    }
    let post: Post = {
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
    <aside className='card card-compact bg-neutral bg-base-100'>
        <div className="card-body">    
        <textarea placeholder="Whats on your mind?" form="form" name="content" id="content" className="textarea textarea-primary" />
        <form className="card-actions justify-end" onSubmit={postPost} id="form" >
            <button type="submit" className='btn btn-primary justify-end'>Post!</button>
        </form>
        </div>
    </aside>
    
    </>
}