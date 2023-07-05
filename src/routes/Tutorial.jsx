import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import KeyBoard from '../components/KeyBoard.jsx';

// temporary, context that is needed by keyboard should be modularized
import { PracticePageContext } from '../components/PracticePageContext.jsx';

function Tutorial(props) {

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
        <div className='main'>
            <Link className='BACK-MAIN-MENU' to={'/main_window'}>Back to Main Menu</Link>
            <h1>💖 Welcome to the Tutorial !</h1>
            <PracticePageContext.Provider value={{
                                                    possible_chars, generatedChar, setGeneratedChar, setLastKeyPressIsCorrect,
                                                    numberKeyPresses, setNumberKeyPresses, numberCorrectKeyPresses, setNumberCorrectKeyPresses
                                                    }}
            >
                <KeyBoard/>

            </PracticePageContext.Provider>
        </div>
    );
}

export default Tutorial;