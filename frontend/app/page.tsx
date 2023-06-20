import Image from 'next/image'
import { useState } from 'react'
import ChirpArray from '@/public/components/chirpArray';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Chirp } from '@/public/components/chirp/typedef';
import PostBox from '@/public/components/postBox';

type ChirpProps = {
  chirps: Chirp[]
}

export default function Home() {

 

  return (
    <>
      <PostBox />
      <ChirpArray />
      <h1>This is a new webpage</h1>
    </>
  )
}