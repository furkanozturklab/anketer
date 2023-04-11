import React from 'react'
import { Icon } from 'Icons/Icons'
import { animateOnExit } from 'function/Animation';
import {  useNavigate } from 'react-router-dom'

export default function Nav({basePage}) {

    const navigate = useNavigate();

    


    return (
        <nav className="flex basis-full items-center py-4 px-9 justify-between h-16 fixed z-40 w-full">
            <button onClick={()=>basePage("/")} className="text-4xl">Anketer</button>
            <div className='flex items-center'>
                <button className="mr-4 menuIcon opacity-70 hover:opacity-100 transition-all"><Icon name="question" size={48} /></button>
                <button className="menuIcon opacity-70 hover:opacity-100 transition-all"><Icon name="menu" size={48} /></button>
            </div>
        </nav>

       
    )
}
