import React, {useState, useEffect, useRef, useContext} from "react";
import { PracticePageContext } from "./PracticePageContext.jsx";
import KeyBoardRow from './KeyBoardRow.jsx'
import '../styles/keyboard.css'

import Finger from './svg/Finger.jsx'

import LeftIndex from './svg/LeftIndex.jsx'
import RightIndex from './svg/RightIndex.jsx'
import LeftMiddle from './svg/LeftMiddle.jsx'
import RightMiddle from './svg/RightMiddle.jsx'
import LeftRing from './svg/LeftRing.jsx'
import RightRing from './svg/RightRing.jsx'
import LeftPinky from './svg/LeftPinky.jsx'
import RightPinky from './svg/RightPinky.jsx'
import LeftThumb from './svg/LeftThumb.jsx'
import RightThumb from './svg/RightThumb.jsx'

import moveKeyById from "../controllers/moveKeyById.js";

const KeyBoard = ({displayed_keys}) => {
    
    //const [rows, setRows] = useState(window.keyboard_layouts.ISO["alpha_numerics"]) 
    //const [rows_alt, setRowsAlt] = useState(window.keyboard_layouts.ISO["alpha_numerics_alt"])
    const [loading, setLoading] = useState(true)
    // TODO: instead of assuming initial false, check if the system has it enabled or not, most likely using a library
    // ISSUE: the characters key event generate dont take into account wether caps lock is on
    // maybe store both normal and alt values in the same component
    const [capsLock, setCapsLock] = useState(false)


    const 
    {
        possible_chars, generatedChar, setGeneratedChar, setLastKeyPressIsCorrect,
        numberKeyPresses, setNumberKeyPresses, numberCorrectKeyPresses, setNumberCorrectKeyPresses,
        key_set, setKeySet,shiftIsDown, setShiftIsDown,last_position, setLastPosition
        } = useContext(PracticePageContext)

    //var rows = window.iso_qwerty.rows
    //var rows_alt = window.iso_qwerty.rows_alt
    

const handleKeyDownKeyboard= (e) => {
    e.stopPropagation()
    console.log('caught keydown event in keyboard: ', e.code)
    if(e.code === 'CapsLock'){
        setCapsLock(capsLock => !capsLock)
    }

    if(e.code ==='ShiftLeft'){
        setShiftIsDown(shiftIsDown => true)
    }

    if(e.code ==='ShiftRight'){
        setShiftIsDown(shiftIsDown => true)
    }
}

const handleKeyUpKeyboard= (e) => {

    if(e.code ==='ShiftLeft'){
        setShiftIsDown(shiftIsDown => false)
    }

    if(e.code ==='ShiftRight'){
        setShiftIsDown(shiftIsDown => false)
    }

    /*
    //moving finger icons to corresponding key
    var pressedKey = document.getElementById(e.code) || document.getElementById(e.key)
    var pressed_key_bounding_box = pressedKey.getBoundingClientRect()

    var keyboard_wrapper_bounding_box = document.getElementById("keyboard").getBoundingClientRect()
    var finger = document.getElementById("finger_outline")
    finger.setAttribute("transform", "translate(" + (pressed_key_bounding_box.left - keyboard_wrapper_bounding_box.left) + "," + (pressed_key_bounding_box.top - keyboard_wrapper_bounding_box.top) + ")")
    */

}


useEffect(()=>{

    // i mean is there truly no better way to do this ? ...
    //window.addEventListener('keydown', handleKeyDownKeyboard)
    //window.addEventListener('keyup', handleKeyUpKeyboard)
    

            //set fingers at proper initial positions
    moveKeyById("LeftIndex", last_position["LeftIndex"], "keyboard")
    moveKeyById("RightIndex",last_position["RightIndex"],"keyboard")
    moveKeyById("LeftMiddle",last_position["LeftMiddle"],"keyboard")
    moveKeyById("RightMiddle",last_position["RightMiddle"],"keyboard")
    moveKeyById("LeftRing",last_position["LeftRing"],"keyboard")
    moveKeyById("RightRing",last_position["RightRing"],"keyboard")
    moveKeyById("LeftPinky",last_position["LeftPinky"],"keyboard")
    moveKeyById("RightPinky",last_position["RightPinky"],"keyboard")
    moveKeyById("LeftThumb",last_position["LeftThumb"],"keyboard")
    moveKeyById("RightThumb",last_position["RightThumb"],"keyboard")

    
    setLoading(false)
    /*return ()=>{
        window.removeEventListener('keydown', handleKeyDownKeyboard)
        window.removeEventListener('keyup', handleKeyDownKeyboard)
    }*/
    
});



    if(loading){
        return (<p>loading</p>)
    }
    else{
        return (

            <div className="keyboard" id="keyboard">
            
            <LeftIndex/>
            <RightIndex/>
            <LeftMiddle/>
            <RightMiddle/>
            <LeftRing/>
            <RightRing/>
            <LeftPinky/>
            <RightPinky/>
            <LeftThumb/>
            <RightThumb/>

            {
                key_set.map( (row, index) => <KeyBoardRow displayed_keys={displayed_keys} row={row} />)
            }
            </div>


        );
    }

}

export default KeyBoard