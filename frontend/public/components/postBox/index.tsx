'use client';


function postChirp() {
    console.log("AAAAA")
}

export default function PostBox() {
    return <>
    <aside className='w-1/3 mb-1 bg-gray-400 p-4 rounded-2xl h-1/3 w-1/3'>
        <h1 className="mb-1 text-slate-600">Whats on your mind?...</h1>
        <textarea className="mb-1 p-1 rounded-lg bg-gray-500 w-full">
        </textarea>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={postChirp}>Chirp!</button>
    </aside>
    
    </>
}