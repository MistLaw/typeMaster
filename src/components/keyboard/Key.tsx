import React, {useState, useEffect, useContext, useCallback, useRef} from "react";
import {qwertyLayout} from 'src/assets/keyboard-layouts'
import { qwertyKeySet } from "src/assets/iso_qwerty";
// svg assets
import Backspace from 'src/assets/keys/Backspace.svg'
import CapsLock from 'src/assets/keys/CapsLock.svg'
import ControlLeft from 'src/assets/keys/ControlLeft.svg'
import ControlRight from 'src/assets/keys/ControlRight.svg'
import Enter from 'src/assets/keys/Enter.svg'
import MetaLeft from 'src/assets/keys/MetaLeft.svg'
import ShiftLeft from 'src/assets/keys/ShiftLeft.svg'
import ShiftRight from 'src/assets/keys/ShiftRight.svg'
import Space from 'src/assets/keys/Space.svg'
import Tab from 'src/assets/keys/Tab.svg'
import AltLeft from 'src/assets/keys/AltLeft.svg'
import AltRight from 'src/assets/keys/AltRight.svg'

//import moveKeyById from "../controllers/moveKeyById.js";

const Key = ({keychar}: KeyProps) => {

    const [isDown, setIsDown] = useState(false)
    const [isCorrect, setIsCorrect] = useState(true)

    const special_keys =   qwertyLayout["special_keys_first"].flat(1)
                   .concat(qwertyLayout["special_keys_last"].flat(1))
                   .concat(qwertyLayout["last_row"])

    
    //TODO add a className property to each of the entries in this special keys icons obj
    // use tailwind classes to set the style of each key and include by interpolating it into the tag
                   const special_keys_icons = [
        {
            key: "AltLeft",
            icon: AltLeft
        },
        {
            key: "AltRight",
            icon: AltRight
        }
        ,
        {
            key: "Backspace",
            icon: Backspace
        },
        {
            key: "CapsLock",
            icon: CapsLock
        },
        {
            key: "ControlLeft",
            icon: ControlLeft
        },
        {
            key: "ControlRight",
            icon: ControlRight
        },
        {
            key: "Enter",
            icon: Enter
        },
        {
            key: "MetaLeft",
            icon: MetaLeft
        },
        {
            key: "ShiftLeft",
            icon: ShiftLeft
        },
        {
            key: "ShiftRight",
            icon: ShiftRight
        },
        {
            key: "Space",
            icon: Space
        },
        {
            key: "Tab",
            icon: Tab
        }
    ]

    const handleKeyDown= (event: KeyboardEvent)=>{
        if(event.repeat){return}
        if(event.code ==='ShiftLeft' || event.code === 'ShiftRight'){
            //setKeySet(qwertyKeySet.rows_alt)
        }
        if(event.key === keychar || event.code === keychar){
            setIsDown(true);
        }
    }


    const handleKeyUp= (event: KeyboardEvent)=>{

        if(event.code ==='ShiftLeft' || event.code === 'ShiftRight'){
            //setKeySet(qwertyKeySet.rows)
        }

        if(event.key === keychar || event.code === keychar){
            setIsDown((isDown) => false)
        }

        
    }

    useEffect(()=>{
        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("keyup", handleKeyUp)
        return ()=>{
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
        }

    })

    return (

        <div className=
        { `
            relative flex flex-col justify-center items-center w-fit h-fit bg-secondary border border-primary rounded-lg text-sm
            ${isDown && `scale-110 text-accent shadow-surround shadow-accent ${isCorrect? 'bg-green-700' : 'bg-red-700'}`}
             `}
              id={keychar}>
            {
            (special_keys.includes(keychar)
            ? <div className="flex justify-center items-center p-[1em]"><img className="h-[1em] w-[1em]" src={special_keys_icons.find(obj=>obj.key===keychar).icon}/></div>
            : <div className="flex justify-center items-center p-[1em]"><span className="flex justify-center items-center w-[1em] h-[1em]">{keychar}</span></div>)
            }
            {
            (keychar === 'f' || keychar === 'F' || keychar === 'j' || keychar === 'J')
            ? <span className="absolute top-[0.75rem] flex justify-center items-center text-2xl">_</span>
            : <></>
            } 

        </div>
    );
}

type KeyProps = {
    keychar: string;
    //keycharAlt: string;
  };

export default Key