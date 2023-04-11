import React, { useEffect, useRef } from 'react'
import Popup from './ui/Popup'
import Counter from './ui/Counter'
import Nav from './ui/Nav'
import { Icon } from 'Icons/Icons'
import { useDispatch } from 'react-redux'
import { changeComponents } from 'store/ComponentData'
import { useNavigate, useLocation } from 'react-router-dom'
import { animateOnLoad, animateOnExit } from 'function/Animation';


export default function Home() {

    const nowLocation = useLocation();
    const scope = useRef();
    const dispacht = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        const animateLoad = async () => {

            await animateOnLoad(scope.current, "top", 1);
            scope.current.classList.remove("animation-start");
            scope.current.removeAttribute("style");
        }

        animateLoad();
        return () => {


        }
    }, [])

    const gotoPage = async (location) => {

        scope.current.classList.remove("animation-start");
        await animateOnExit(scope.current, "bottom", 1);
        navigate(location);

    }

    const basePage = async (location) => {


        if (nowLocation.pathname !== "/") {
            await animateOnExit(scope.current, "top", 1);
            navigate("/");
        }

    }

    return (



        <section ref={scope} className="before:bg-judgment anketer_base animation-start">
            <Nav basePage={basePage} />
            <div className='section-middle px-8 relative flex flex-wrap content-center'>
                <div className="w-3/4 text-center text-2xl font-medium">
                    <p>"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum,
                        adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere
                        bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır."</p>
                </div>
                <div className='w-1/2 flex justify-center mt-6'>
                    <button className='anketer-buttons mx-3'>Evet</button>
                    <button className='anketer-buttons mx-3'>Hayır</button>
                    <button className='anketer-buttons mx-3'>Belki</button>


                </div>


            </div>
            <div className='section-footer relative flex justify-between items-center px-8'>
                <div className='group w-2/6'>
                    <Popup className="-mt-10 popup" title="Anketin bitimine kalan süre" icon="info" size={16} />
                    <Counter getHours={1} getMinutes={0} getSeconds={10} getIsRunning={true} />
                </div>

                <div className='w-2/6 justify-center flex' onClick={() => dispacht(changeComponents("after"))} >
                    <button onClick={() => gotoPage('more')} >More Anketer</button>
                </div>

                <div className='group w-2/6 justify-end flex'>
                    <Popup className="-mt-10 -ml-[150px] popup" title="Toplam Kullanılan Oy" icon="info" size={16} />
                    <span className='flex'><span className='mr-4'>25896</span> <Icon name="user" /></span>
                </div>
            </div>
        </section>



    )
}
