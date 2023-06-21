import React from 'react';
import { useState, createContext } from 'react';
import { GeneratedCharContext } from '../components/GeneratedCharContext.jsx';
import KeyBoard from '../components/KeyBoard.jsx';

function Practice() {
    
    const possible_chars = 
    []
    .concat(window.keyboard_layouts.ISO["alpha_numerics"].map(row => row.split("")))
    .concat(window.keyboard_layouts.ISO["alpha_numerics_alt"].map(row => row.split("")))
    .flat(1);

    const [generatedChar, setGeneratedChar] = useState(possible_chars[Math.floor(Math.random() * possible_chars.length)])

    return (
        <div className="main">
            <div className="generated-char"> <p>{generatedChar}</p> </div>
            <GeneratedCharContext.Provider value={generatedChar}>
                <KeyBoard/>
            </GeneratedCharContext.Provider>
        </div>
    );
}

export default Practice;