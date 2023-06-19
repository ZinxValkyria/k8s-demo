import { Chirp } from './typedef'

type Props = {
    chirp: Chirp;
}

export default function ChirpBox({chirp}:Props) {
    return(<aside className='flex flex-wrap gap-1 w-1/3 bg-gray-400 p-4 rounded-2xl h-1/3 w-1/3'>
        <p className='text-black text-2xl w-full'>{chirp.content}</p>
        <p className='text-black'>{chirp.author}</p>
        {/* <p className='text-black'>{(chirp.likes).toString()}</p> */}
        <p className='text-black'>{chirp.posted.toString()}</p>
    </aside>)
}