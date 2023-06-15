import React from 'react';
import KeyBoard from '../components/KeyBoard.jsx';
import Key from '../components/Key.jsx';
import MainMenu from '../components/MainMenu.jsx';

function Root(props) {


    return (
        <div className='landing-page'>
            <h1>💖 Welcome to Type Master !</h1>
            <MainMenu/>
        </div>
    );
}

export default Root;