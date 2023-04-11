
import React, { useState, useRef } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Comp1 from './comp1';
import Comp2 from './comp2';

export default function Test() {

    const [showComponent, setShowComponent] = useState(<Comp1 />);
    const [xComp, setXComp] = useState(false);


    const toggleComponent = (comp) => {
        
        switch (comp) {
            case "comp1":
                setShowComponent(<Comp1 />);
                setXComp(!xComp)
                break;
            case "comp2":
                setShowComponent(<Comp2 />);
                setXComp(!xComp)
                break;

            default:
                setShowComponent(<Comp1 />);
                setXComp(!xComp)
                break;
        }
        
    };

    return (
        <>

            <div>
                <button onClick={() => toggleComponent('comp1')}>Comp 1</button>
                <button onClick={() => toggleComponent('comp2')}>Comp 2</button>
                <SwitchTransition mode="out-in">
                    <CSSTransition key={xComp} classNames="fade" timeout={1500}>
                        {xComp ? showComponent : <Comp1 />}
                    </CSSTransition>
                </SwitchTransition>
            </div>




        </>
    )
}
