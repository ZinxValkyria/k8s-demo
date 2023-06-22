'use client';

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
    console.log(process.env.NEXTAUTH_URL)
    return (
        <button className="btn" style={{ marginRight:10 }} onClick={() => signIn("github", {callbackUrl: 'http://localhost:3000/api/auth/signin/github'})}>
            sign in
        </button>
    )
}

export const Register = () => {
    return (
        <Link className="btn" style={{ marginRight:10 }} href="/register">
            Register
        </Link>
    )
}

export const LogOut = () => {
    return (
        <button className="btn" style={{ marginRight:10 }} onClick={() => signOut()}>
            Sign Out
        </button>
    )
}

export const ProfileButton = () => {
    return (
        <Link className="btn" style={{ marginRight:10 }} href="/profile">
            Profile
        </Link>
    )
}