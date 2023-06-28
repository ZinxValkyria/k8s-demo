'use client';
import {useSession} from "next-auth/react";
import Avatar from "../Avatar";
import SignIn from "../signIn";


export default function UserBox() {
    const {data: session, status} = useSession();

    return <>
    <div className="w-96 h-fit card card-compact bg-neutral">
            {(status ==="authenticated") && (<>
            <div tabIndex={0} className="card-body flex-row hover:bg-slate-700 rounded-2xl transition-all">
                    <div className="self-center">
                    <p className="text-primary text-left">signed in as</p>
                    <p className="card-title normal-case">{session.user?.name}</p>
                    </div>
                    <div className="ml-auto">
                    <Avatar />
                    </div>
            </div>    
            </>
            )}
            {(status ==="unauthenticated") && (<>
            <div tabIndex={0} className="card-body">
                <p>You are not signed in.</p>
                <SignIn />
            </div>
            </>
            )}
            {(status ==="loading") && (<>
            <div tabIndex={0} className="card-body flex-row">
                <span className="loading loading-spinner text-primary"></span>
            </div>
            </>)}
        </div>
        {/* <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-400 rounded-box">
            <div className="bg-base-400">Profile</div>
            <div>Settings</div>
            <div>Sign Out</div>
        </div> */}

    </>

}