import React from 'react'
import { Icon } from 'Icons/Icons'
export default function Popup({ title ,  size = 24,icon = null, ...props }) {



    return (
        <>  
        
            <div {...props}><span className='block flex items-center'> {icon !== null ? <Icon size={size} name={icon}/> : ""}  <span className='block ml-2'>{title}</span></span> </div>
        </>

    )
}
