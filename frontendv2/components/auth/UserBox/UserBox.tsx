'use client';
import {useSession} from "next-auth/react";
import Avatar from "../Avatar";
import SignIn from "../signIn";


export default function UserBox() {
    const {data: session, status} = useSession();

    return <>
    <div className="dropdown w-96 h-fit card card-compact bg-neutral fixed right-10 top-10 ">
        <div tabIndex={0} className="card-body bg-neutral btn h-20">
            {(status ==="authenticated") && (<>
            <div>
            <p className="text-primary text-left">signed in as</p>
            <p className="card-title normal-case">{session.user?.name}</p>
            </div>
            </>
            )}
            {(status ==="unauthenticated") && (<>
                <p>You are not signed in.</p>
                <SignIn />
            </>
            )}
            {(status ==="loading") && <>Loading :)</>}
            <Avatar />
        </div>
        <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-400 rounded-box">
            <div className="bg-base-400">Profile</div>
            <div>Settings</div>
            <div>Sign Out</div>
        </div>
    </div>
    </>

}