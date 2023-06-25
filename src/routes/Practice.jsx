import React from 'react';
import { useState, createContext, useRef, useEffect } from 'react';
import { PracticePageContext } from '../components/PracticePageContext.jsx';
import KeyBoard from '../components/KeyBoard.jsx';
import { Link } from 'react-router-dom';

function Practice() {
    
    const possible_chars = 
    []
    .concat(window.keyboard_layouts.ISO["alpha_numerics"].map(row => row.split("")))
    .concat(window.keyboard_layouts.ISO["alpha_numerics_alt"].map(row => row.split("")))
    .flat(1);

    const [generatedChar, setGeneratedChar] = useState(possible_chars[Math.floor(Math.random() * possible_chars.length)])
    const [lastKeyPressIsCorrect, setLastKeyPressIsCorrect] = useState(null)
    return (
        <div className="main">
            <Link className='BACK-MAIN-MENU' to={'/main_window'}>Back to Main Menu</Link>
            <div className='generted-char-wrapper'>
                <PracticePageContext.Provider value={{possible_chars, generatedChar, setGeneratedChar, setLastKeyPressIsCorrect}}>
                        {
                            lastKeyPressIsCorrect === null 
                            ? <p className='keypress-feedback'>Press the key below !</p>
                            : lastKeyPressIsCorrect ?  <p className='keypress-feedback correct'>Great !</p>
                            : <p className='keypress-feedback incorrect'>Try again !</p>
                        }
                    <div className="generated-char"> <p>{generatedChar}</p> </div>
                    <KeyBoard/>
                </PracticePageContext.Provider>
            </div>
        </div>
    );
}

export default Practice;