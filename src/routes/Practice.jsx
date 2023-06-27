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
    const [numberKeyPresses, setNumberKeyPresses] = useState(0)
    const [numberCorrectKeyPresses, setNumberCorrectKeyPresses] = useState(0)
    
    return (
        <div className="main">

            <Link className='BACK-MAIN-MENU' to={'/main_window'}>Back to Main Menu</Link>
            <div className='generated-char-wrapper'>
                
                <PracticePageContext.Provider value={{
                                                    possible_chars, generatedChar, setGeneratedChar, setLastKeyPressIsCorrect,
                                                    numberKeyPresses, setNumberKeyPresses, numberCorrectKeyPresses, setNumberCorrectKeyPresses
                                                    }}
                >
                        <div className='feedback-wrapper'>
                        {
                            lastKeyPressIsCorrect === null 
                            ? <div className='keypress-feedback'><p>{"Press the key below !"}</p></div>
                            : lastKeyPressIsCorrect ?  <div className='keypress-feedback correct'><p>{"Great !"}</p></div>
                            : <div className='keypress-feedback incorrect'><p>{"Try again !"}</p></div>
                        }

                        {
                            <div className='keypress-feedback'> <p>{numberCorrectKeyPresses}{"/"}{numberKeyPresses}</p> </div>
                        }
                        </div>

                    <div className="generated-char"> <p>{generatedChar}</p> </div>

                    <KeyBoard/>
                
                </PracticePageContext.Provider>
            </div>
        
        </div>
    );
}

export default Practice;