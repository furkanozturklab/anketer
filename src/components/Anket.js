import React, { useRef, useState, useEffect } from 'react'
import Nav from './ui/Nav'
import { Icon } from 'Icons/Icons'
import { Element } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

export default function Anket() {

  const upButton = useRef();

  function scrollToSection(section) {

    document.querySelector(`[name="${section}"]`).scrollIntoView({
      behavior: 'smooth'
    });
    upButton.current.classList.toggle("hidden")
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  function handleWheel(e) {
    if (e.button === 0) {
      e.preventDefault();
    }
  }

  useEffect(() => {
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <section onWheel={handleWheel} className='content_base w-full flex justify-center overflow-y-auto'>

        <Element name="section2">
          <Nav />
        </Element>


        <button ref={upButton} onClick={() => scrollToSection('section2')} className='fixed z-40 bottom-5 rounded-full p-2 hidden bg-slate-50 text-slate-900  hover:text-slate-50 hover:bg-slate-900 transition-colors'><Icon name="arrowUp" /></button>


        <div className='h-full relative w-full flex justify-center items-center bg-tecno bg-cover bg-center after:w-full after:h-full after:top-0 after:left-0 after:bg-tecnoColos after:absolute after:opacity-80' >

          <div className='z-30 w-full flex justify-center flex-wrap'>
            <div className="w-3/4 text-center text-2xl font-medium"><p>"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır."</p></div>
            <div className="w-2/4 flex justify-center mt-6"><button onClick={() => scrollToSection('section1')} className="anketer-buttons mx-3 flex">Ankete Başla <span className='icon-control'><Icon name="arrowUp" /></span></button></div>
          </div>


        </div>



        <Element name="section1" className="element flex flex-wrap container content-start h-[100vh] relative p-10 my-10" offset={50}>

          <div className='w-full h-32 flex flex-wrap  justify-center mb-8 content-start container'>

            <h2 className='text-4xl w-full font-semibold mt-5 uppercase text-center'>Anketler Nasıl daaha iyi yapabilirim</h2>
            <div className="w-full flex justify-center my-3 items-center content-center">

              <div className='flex mx-2 items-center text-cyan-500'> <Icon name="user" size={18} /> <span className='mx-2 text-three text-sm font-semibold'>Furkan ÖZTÜRK</span>  </div>
              <div className='flex mx-2 items-center text-cyan-500'> <Icon name="calendar" size={18} />  <span className='mx-2 text-three text-sm font-semibold'>Ocak 2023</span>  </div>
              <div className='flex mx-2 items-center text-cyan-500'> <Icon name="time" size={18} />  <span className='mx-2 text-three text-sm font-semibold'>Ending</span>  </div>
            </div>

            <hr className='w-full mx-10 my-2 border-three opacity-40' />
          </div>

          <div className='bg-slate-400 w-full' style={{ height: 'calc(100vh - 15rem)' }}>
            <button onClick={scrollToTop}>Sayfanın en üstüne git</button>
          </div>
        </Element>


        <div className='container h-[100vh] bg-pink-500'>
          tes
        </div>







      </section>


    </>
  )
}
