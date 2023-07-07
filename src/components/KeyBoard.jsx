import React, {useState, useEffect} from "react";
import KeyBoardRow from './KeyBoardRow.jsx'
import '../styles/keyboard.css'

import Finger from './svg/Finger.jsx'

const KeyBoard = ({displayed_keys}) => {
    
    const [rows, setRows] = useState(window.keyboard_layouts.ISO["alpha_numerics"]) 
    const [rows_alt, setRowsAlt] = useState(window.keyboard_layouts.ISO["alpha_numerics_alt"])
    const [loading, setLoading] = useState(true)
    // TODO: instead of assuming initial false, check if the system has it enabled or not, most likely using a library
    // ISSUE: the characters key event generate dont take into account wether caps lock is on
    // maybe store both normal and alt values in the same component
    const [capsLock, setCapsLock] = useState(false)
    const [shiftIsDown, setShiftIsDown] = useState(false)
    
    useEffect(()=>{

    // i mean is there truly no better way to do this ? ...
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    

    // set main alpha numeric keys
    setRows( rows.map( (row, index)=>
        window.keyboard_layouts.ISO["special_keys_first"][index]
        .concat(row.split(""))
        .concat(window.keyboard_layouts.ISO["special_keys_last"][index])
    )
    )
    setRows(rows => rows.concat([window.keyboard_layouts.ISO["last_row"]]))
    
    // set alternate alpha numeric keys, triggered by caps lock or shift
    setRowsAlt( rows_alt.map( (row, index)=>
    window.keyboard_layouts.ISO["special_keys_first"][index]
    .concat(row.split(""))
    .concat(window.keyboard_layouts.ISO["special_keys_last"][index])
)
)
    setRowsAlt(rows_alt => rows_alt.concat([window.keyboard_layouts.ISO["last_row"]]))
    

    setLoading(false)

    return ()=>{
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyDown)
    }
    
}, []);

const handleKeyDown= (e) => {
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

const handleKeyUp= (e) => {

    if(e.code ==='ShiftLeft'){
        setShiftIsDown(shiftIsDown => false)
    }

    if(e.code ==='ShiftRight'){
        setShiftIsDown(shiftIsDown => false)
    }

    //moving finger icons to corresponding key
    var pressedKey = document.getElementById(e.code) || document.getElementById(e.key)
    var pressed_key_bounding_box = pressedKey.getBoundingClientRect()

    var keyboard_wrapper_bounding_box = document.getElementById("keyboard").getBoundingClientRect()
    var finger = document.getElementById("finger_outline")
    finger.setAttribute("transform", "translate(" + (pressed_key_bounding_box.left - keyboard_wrapper_bounding_box.left) + "," + (pressed_key_bounding_box.top - keyboard_wrapper_bounding_box.top) + ")")


}



    if(loading){
        return (<p>loading</p>)
    }
    else{
        return (

            shiftIsDown
            ? <div className="keyboard" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} id="keyboard">
                {
                    rows_alt.map( (row, index) => <KeyBoardRow displayed_keys={displayed_keys} row={row} />)
                }
               </div>
            
            : <div className="keyboard" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} id="keyboard">
            <Finger/>
            {
                rows.map( (row, index) => <KeyBoardRow displayed_keys={displayed_keys} row={row} />)
            }
           </div>

        );
    }

}

export default KeyBoard