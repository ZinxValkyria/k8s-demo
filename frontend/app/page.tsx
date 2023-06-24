'use client';
import User from '@/public/components/user';
import Home from '@/public/components/home';
import UsrTest from '@/public/components/usrTest';
import AuthContext from '@/public/components/sessionProvider';
import { SessionProvider } from 'next-auth/react';

export default async function Page() {

  
  return (
    <>
    <SessionProvider>

    {/* <AuthContext> */}
        <UsrTest/>
        <User />
        <div className='flex w-full mt-12 justify-center'>
          <Home />
        </div>
    {/* </AuthContext> */}
    </SessionProvider>
    </>
  )
}

