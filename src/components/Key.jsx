import React, {useState, useEffect, useContext} from "react";
import { GeneratedCharContext } from "./GeneratedCharContext.jsx";
// svg assets
import Backspace from '../../assets/special_keys_icons/Backspace.svg'
import CapsLock from '../../assets/special_keys_icons/CapsLock.svg'
import ControlLeft from '../../assets/special_keys_icons/ControlLeft.svg'
import ControlRight from '../../assets/special_keys_icons/ControlRight.svg'
import Enter from '../../assets/special_keys_icons/Enter.svg'
import MetaLeft from '../../assets/special_keys_icons/MetaLeft.svg'
import ShiftLeft from '../../assets/special_keys_icons/ShiftLeft.svg'
import ShiftRight from '../../assets/special_keys_icons/ShiftRight.svg'
import Space from '../../assets/special_keys_icons/Space.svg'
import Tab from '../../assets/special_keys_icons/Tab.svg'
import AltLeft from '../../assets/special_keys_icons/AltLeft.svg'
import AltRight from '../../assets/special_keys_icons/AltRight.svg'

// style
import '../styles/keyboard.css'

const Key = (props) => {

    const [isDown, setIsDown] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)

    const special_keys = window.keyboard_layouts.ISO["special_keys_first"].flat(1)
                   .concat(window.keyboard_layouts.ISO["special_keys_last"]).flat(1)
                   .concat(window.keyboard_layouts.ISO["last_row"])

    
    const special_keys_icons={
        "AltLeft" : AltLeft,
        "AltRight" : AltRight,
        "Backspace" : Backspace,
        "CapsLock" : CapsLock,
        "ControlLeft" : ControlLeft,
        "ControlRight" : ControlRight,
        "Enter" : Enter,
        "MetaLeft" : MetaLeft,
        "ShiftLeft" : ShiftLeft,
        "ShiftRight" : ShiftRight,
        "Space" : Space,
        "Tab" : Tab,
    }

    const generatedChar = useContext(GeneratedCharContext)

    
    useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

    },[])


    const handleKeyDown= (event)=>{


        if(event.key === props.keychar || event.code === props.keychar){
            console.log('event down localy recognized with key = ', props.keychar)
            if(! isDown){
                setIsDown(isDown => true)
                if(props.keychar === generatedChar){
                    setIsCorrect(true)
                }
                else{
                    setIsCorrect(false)
                }
            }

        }
    }

    const handleKeyUp= (event)=>{
        if(event.key === props.keychar || event.code === props.keychar){
            console.log('event up localy recognized with key = ', props.keychar)
            setIsDown(isDown => false)
        }

        
    }

    return (

        //TODO include the keycodes check as well when trying to add the special-key class
        //avoided nester ternary operator, might need to do it anyway so special keys dont get correct/incorrect classes
        <div className={"key"+ (isDown? " active" + (isCorrect? " correct" : " incorrect") : "") + (special_keys.includes(props.keychar)? " special-key-"+props.keychar : "")}>
            {(special_keys.includes(props.keychar)
            ? <div className="special-key-wrapper"> <img src={special_keys_icons[props.keychar]}/> </div>
            : props.keychar) }
        </div>
    );
}

export default Key