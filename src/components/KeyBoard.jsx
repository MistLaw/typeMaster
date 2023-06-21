import React, {useState, useEffect} from "react";
import KeyBoardRow from './KeyBoardRow.jsx'
import '../styles/keyboard.css'

const KeyBoard = () => {
    
    const [rows, setRows] = useState(window.keyboard_layouts.ISO["alpha_numerics"]) 
    const [rows_alt, setRowsAlt] = useState(window.keyboard_layouts.ISO["alpha_numerics_alt"])
    const [loading, setLoading] = useState(true)
    
    // TODO: instead of assuming initial false, check if the system has it enabled or not, most likely using a library
    //TODO center the inner components of Keyboard, the outer div gets centered fine but the keys dont
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
}


    if(loading){
        return (<p>loading</p>)
    }
    else{
        return (

            shiftIsDown
            ? <div className="keyboard" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
                {
                    rows_alt.map( (row, index) => <KeyBoardRow row={row}/>)
                }
               </div>
            
            : <div className="keyboard" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
            {
                rows.map( (row, index) => <KeyBoardRow row={row}/>)
            }
           </div>

        );
    }

}

export default KeyBoard