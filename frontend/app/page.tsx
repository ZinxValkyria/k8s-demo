'use client';
import Image from 'next/image'
import { useState } from 'react'
import ChirpArray from '@/public/components/chirpArray';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Chirp } from '@/public/components/chirp/typedef';
import PostBox from '@/public/components/postBox';
import UsrTest from '@/public/components/usrTest';
import { SessionProvider } from 'next-auth/react';

import {
  LoginButton,
  LogOut,
  ProfileButton,
  Register,
} from "@/public/components/authBtns/index"

export default function Home() {

 

  return (
    <>  
    

    <SessionProvider>

      <UsrTest/>
    </SessionProvider>
      <LoginButton/>
      <Register/>
      <LogOut/>
      <ProfileButton/>
      <PostBox />
      <ChirpArray />
    </>
  )
}