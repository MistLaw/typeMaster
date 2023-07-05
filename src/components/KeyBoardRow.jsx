import React, {useState, useEffect} from "react";
import Key from "./Key.jsx";

import '../styles/keyboard.css'

const KeyBoardRow = ({row, displayed_keys}) => {
    useEffect(()=>{
    });
    

    return (
        <div className="keyboardrow">
            {row.map( (key, index) => 

            // props of react components dont re render (or update the props value) on props change unless a key prop is present
                <Key key={key} keychar= {displayed_keys === 'all' ? key : displayed_keys.includes(key) ? key : ""}/>
            )}
        </div>
    );
}

export default KeyBoardRow