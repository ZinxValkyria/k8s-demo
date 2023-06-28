import { Divider } from "@mui/material"
import ChirpArray from "../chirpArray"
import PostBox from "../postBox"

export default function Home() {
    
    return <>
    <div className="lg:w-1/2 md:w-4/6 w-full px-8">

        <PostBox/>
        <div className="divider">Your Feed</div>
        <ChirpArray/>
    </div>
    </>
}