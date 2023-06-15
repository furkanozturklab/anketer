import Nav from './ui/Nav'
import CategoryItemList from './ui/CategoryItemList'
import CategoryItem from './ui/CategoryItem';
import React, { useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { animateOnLoad, animateOnExit } from 'Animation/Animations';

export default function Category() {

    const scope = useRef();
    const nowLocation = useLocation();
    const navigate = useNavigate();

    const basePage = async (location) => {


        if (nowLocation.pathname !== "/") {
            await animateOnExit(scope.current, "top", 1);
            navigate("/");
        }

    }
    return (

        <section ref={scope} className="anketer_base overflow-y-auto content-start ">
            <Nav basePage={basePage} />

            <ul id='category' className='flex flex-wrap w-full mx-6 mt-24'>
                <CategoryItem />
            </ul>

            <div className='w-full my-8 flex justify-center flex-wrap flex-row'>
                <CategoryItemList />
            </div>

        </section>
    )
}
