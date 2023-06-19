import Image from 'next/image'
import { useState } from 'react'
import Chirp from '@/public/components/chirp';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type Chirp = {
  content: String,
  author: String,
  likes: Number,
  posted: Date
}

type ChirpProps = {
  chirps: Chirp[]
}

export default function Home() {
  return (
    <>
      <Chirp />
      <h1>This is a new webpage</h1>
    </>
  )
}