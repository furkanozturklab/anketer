import React from 'react'
import Nav from './ui/Nav'

export default function Anket() {
  return (
    <>
      <section className='content_base w-full'>

        <Nav />

        <div className='h-2/3 relative w-full flex justify-center items-end bg-tecno bg-cover bg-center after:w-full after:h-full after:top-0 after:left-0 after:bg-tecnoColos after:absolute after:opacity-80' />

        <div className='h-1/3 w-full flex justify-center my-8'>

          <h2 className='text-4xl w-full font-semibold mt-5 uppercase'>Anketler Nasıl daaha iyi yapabilirim</h2>
          <div class="sub w-full">

            <span> Furkan ÖZTÜRK </span>
            <span> Ocak 2023 </span>

          </div>
        </div>









      </section>


    </>
  )
}
