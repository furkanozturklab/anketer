import React, { useEffect, useRef, useState } from 'react'
import Nav from './ui/Nav'
import { Icon } from 'Icons/Icons'
import { useNavigate, useLocation } from 'react-router-dom'
import { animateOnLoad, animateOnExit } from 'Animation/Animations';


export default function More() {

    const nowLocation = useLocation();
    const scope = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const animateLoad = async () => {
            
            scope.current.classList.remove("animation-start");
            await animateOnLoad(scope.current, "top") 
            scope.current.removeAttribute("style");
          
        }
        animateLoad();
        return () => {
            
        }
    }, [])


    const gotoPage = async (location) => {
        await animateOnExit(scope.current, "top", 1);
        navigate(location);
    }

    const basePage = async (location) => {
        if (nowLocation.pathname !== "/") {
            await animateOnExit(scope.current, "bottom", 1);
            navigate("/");
        }
    }

    return (
        <>

            <section ref={scope} className="before:bg-tecno anketer_base justify-center animation-start">

                <Nav basePage={basePage} />

                <div className="section-middle w-10/12 flex flex-wrap content-center justify-start  relative">
                    <div class="header w-full font-medium leading-12">
                        <span className='text-three text-3xl'>Merhaba,</span>
                        <span className='text-second text-4xl'> Anketer</span>
                    </div>
                    <div class="info w-full text-[48px] text-second font-semibold ">
                        <span className='leading-12'>Anket Topluluğumuza</span> <br /> <span className='leading-12'>Hoş Geldiniz.</span>
                    </div>
                    <div className="search w-1/2 my-4">

                        <div className="relative h-12">
                            <div className="absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none text-gray-500">
                                <Icon name="search" size={18} />
                            </div>
                            <input type="text" className="block w-full rounded-md p-4 pl-10 h-12 text-sm text-primary" placeholder="Anketlerde ara, Anket..." required />
                            <button type="button" className="absolute transition-all search-button mx-3 my-2 font-semibold rounded hover:bg-org-500 hover:text-slate-900 px-5 py-1 text-primary">Ara</button>
                        </div>
                    </div>

                    <div className="more-options w-full flex px-5 my-5">
                        <div className="more-button">

                            <button className='border-2 font-medium border-org-500 rounded-md px-8 py-3 flex justify-center items-center transition-all hover:bg-org-500 hover:text-slate-900'> <span className="mr-2"><Icon name="splus" /></span>Yeni Anket Öner</button>
                        </div>
                        <div className="more-button ml-8">
                            <button className='border-2 font-medium border-org-500 rounded-md px-8 py-3 flex justify-center items-center transition-all hover:bg-org-500 hover:text-slate-900'><span className="mr-2"><Icon name="lmenu" /></span>Tüm Anketlere Gözat</button>
                        </div>
                    </div>
                </div>

                <div className='section-footer flex w-10/12 items-center content-center'>

                    <div className="anketer-info flex mr-6 text-second text-lg font-medium">
                        <span className="mr-2"><Icon name="peoples" /></span>
                        <span> Toplamda <span className="text-org-500">105291</span> kişi anketlere katıdı </span>
                    </div>

                    <div className="anketer-info flex text-second text-lg font-medium">
                        <span className="mr-2"><Icon name="listCheck" /></span>
                        <span className="desc"> Toplamda <span className="text-org-500">95256</span> cevap verildi </span>
                    </div>
                </div>

                <button onClick={()=> gotoPage('/')} className='absolute bottom-5 z-50 bg-slate-800 transition-all text-white p-2 rounded-full hover:text-slate-800 hover:bg-white cursor-pointer'>
                    <span className=" "><Icon size={20} name="arrowUp" /></span>
                </button>

            </section>


        </>


    )
}
