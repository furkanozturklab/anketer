import React from 'react'
import { Icon } from 'Icons/Icons'
import { animateOnExit } from 'Animation/Animations';
import {  useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll';

export default function Nav({basePage}) {

    const navigate = useNavigate();
    
    return (
        <nav className="flex basis-full items-center justify-between">
            {/*<button onClick={()=>basePage("/")} className="text-4xl">Anketer</button>*/}
            <a className="text-4xl" href={`/`}>Anketer</a>
            <div className='flex items-center'>
              {/*<button className="mr-4 menuIcon opacity-70 hover:opacity-100 transition-all"><Icon name="question" size={48} /></button>*/}
              {/*<button className="menuIcon opacity-70 hover:opacity-100 transition-all"><Icon name="menu" size={48} /></button>  */} 
            </div>
        </nav>

       
    )
}
