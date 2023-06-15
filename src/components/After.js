import { Icon } from 'Icons/Icons'
import React, { useEffect, useRef } from 'react'
import Popup from '../../Template/Popup'
import Counter from './ui/Counter'
import Nav from './ui/Nav'
import { useDispatch } from 'react-redux'
import { changeComponents } from 'store/ComponentData'
import { useNavigate  , useLocation} from 'react-router-dom'
import { animateOnLoad, animateOnExit } from 'Animation/Animations';

export default function After() {

    const nowLocation = useLocation();
    const dispacht = useDispatch();
    const scope = useRef();
    const navigate = useNavigate();

    useEffect(() => {

        animateOnLoad(scope.current,"top")

        return () => {

        }
    }, [])


    const gotoPage = async (location) => {
        await animateOnExit(scope.current,"top","","100vh",1);
        navigate("/"+location);
}

const basePage = async (location) => {


    if(nowLocation.pathname !== "/"){
        await animateOnExit(scope.current,"top","","100vh",1);
        navigate("/");
    }
    
}


    return (



        <section ref={scope} className="before:bg-tecno anketer_base pages">
            <Nav basePage={basePage} />
            <div className='section-middle relative flex flex-wrap content-center'>
                <div className="w-3/4 text-center text-2xl font-medium">
                    <p>"More anketer test"</p>
                </div>
                <div className='w-full flex justify-center mt-6'>
                    
                    <button className='anketer-buttons'>Evet</button>
                    <button className='anketer-buttons'>Hayır</button>
                    <button className='anketer-buttons'>Belki</button>


                </div>


            </div>
            <div className='section-footer relative flex justify-between items-center px-8'>
                <div className='group'>
                    <Popup className="-mt-10 popup" title="Anketin bitimine kalan süre" icon="info" size={16} />
                    <Counter getHours={1} getMinutes={0} getSeconds={10} getIsRunning={true} />
                </div>

                <div onClick={() => dispacht(changeComponents("home"))} >
                    <button onClick={() => gotoPage('/')} >Geri Dön</button>
                </div>

                <div className='group'>
                    <Popup className="-mt-10 -ml-[150px] popup" title="Toplam Kullanılan Oy" icon="info" size={16} />
                    <span className='flex'><span className='mr-4'>25896</span> <Icon name="user" /></span>
                </div>
            </div>
        </section>



    )
}
