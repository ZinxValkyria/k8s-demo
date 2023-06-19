import { Chirp } from './typedef'

type Props = {
    chirp: Chirp;
}

export default function Chirp({chirp}:Props) {
    return(<aside>
        <p>{chirp.content}</p>
        <p>{chirp.author}</p>
        <p>{(chirp.likes).toString()}</p>
        <p>{chirp.posted.getDate()}</p>
    
    
    </aside>)
}