import { Chirp } from './typedef'

type Props = {
    chirp: Chirp;
}

export default function ChirpBox({chirp}:Props) {
    const date: Date = new Date(chirp.posted);
    return(<aside className='card card-compact shadow-xl bg-neutral'>
        <div className='card-body'>
        <p className='text-primary inline'>{chirp.author}</p>
        <p className='card-title'>{chirp.content}</p>
        {/* <p className='text-black'>{(chirp.likes).toString()}</p> */}
        <p className='text-primary'>{date.toLocaleDateString()}</p>
        </div>
    </aside>)
}