import React from 'react';
import KeyBoard from '../components/KeyBoard.jsx';
import Key from '../components/Key.jsx';
import MainMenu from '../components/MainMenu.jsx';
import KeyboardPattern from '../components/svg/KeyboardPattern.svg';

function Root(props) {


    return (
        <div className='w-screen h-screen' style={{ backgroundImage: `url(${KeyboardPattern})`, backgroundRepeat: "repeat"}}>
            <div className='landing-page h-screen flex flex-col items-stretch p-20 gap-7'>
                <h1 className='text-5xl text-center font-jost grow-0 bg-secondary p-4 rounded'>💖 Welcome to Type Master !</h1>
                <MainMenu />
            </div>
        </div>

    );
}

export default Root;