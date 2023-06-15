import React, { useEffect, useState, memo } from 'react'
import { Icon } from 'Icons/Icons'

function Counter({getHours,getMinutes,getSeconds,getIsRunning,className}) {

    const [hours, setHours] = useState(getHours);
    const [minutes, setMinutes] = useState(getMinutes);
    const [seconds, setSeconds] = useState(getSeconds);
    const [isRunning, setIsRunning] = useState(true);

   

    useEffect(() => {
        
        let interval;
        if (isRunning) {
          
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds((seconds) => seconds - 1);
                }
                else if (minutes > 0) {

                    setMinutes((minutes) => minutes - 1);
                    setSeconds(59);
                }
                else if (hours > 0) {
                    setHours((hours) => hours - 1);
                    setSeconds(59);
                    setMinutes(59)
                }
            }, 1000)
        }

        return () => {
            clearInterval(interval);
            if(!isRunning)setIsRunning(true);
        }
    }, [seconds,minutes,hours,isRunning])


    return (
       <div className={className}><span className='flex cursor-default'><Icon name="time" />  <span className='ml-4'>{hours} Saat {minutes} dk {seconds} sn</span></span></div> 
    )
}


export default memo(Counter)