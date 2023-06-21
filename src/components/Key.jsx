import React, {useState, useEffect, useContext} from "react";
import { PracticePageContext } from "./PracticePageContext.jsx";
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

    const {possible_chars, generatedChar, setLastKeyPressIsCorrect} = useContext(PracticePageContext)

    
    useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return ()=>{
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyDown)
        }

    },[])


    const handleKeyDown= (event)=>{
        if(event.repeat){return}
        if(event.key === props.keychar || event.code === props.keychar){
            //console.log('event down localy recognized with key = ', props.keychar)

            if(! isDown){

                setIsDown((isDown) => true)
                console.log('pressed : ', props.keychar, 'generatedChar : ', generatedChar)
                if(props.keychar === generatedChar.current){
                    console.log('went to true')
                    setIsCorrect(()=>true)
                    setLastKeyPressIsCorrect(()=>true)
                    generatedChar.current = possible_chars[Math.floor(Math.random() * possible_chars.length)]
                }
                else{
                    console.log('went to false')
                    setIsCorrect(()=>false)
                    setLastKeyPressIsCorrect(()=>false)
                }

            }

        }

    }

    const handleKeyUp= (event)=>{
        if(event.key === props.keychar || event.code === props.keychar){
            //console.log('event up localy recognized with key = ', props.keychar)
            setIsDown((isDown) => false)
        }

        
    }

    return (

        //avoided nester ternary operator, might need to do it anyway so special keys dont get correct/incorrect classes
        <div className={"key"+ (isDown? " active" + (isCorrect? " correct" : " incorrect") : "") + (special_keys.includes(props.keychar)? " special-key-"+props.keychar : "")}>
            {(special_keys.includes(props.keychar)
            ? <div className="special-key-wrapper"> <img src={special_keys_icons[props.keychar]}/> </div>
            : props.keychar) }
        </div>
    );
}

export default Key