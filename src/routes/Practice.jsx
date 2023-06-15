import React from 'react';
import { Link } from 'react-router-dom';
import KeyBoard from '../components/KeyBoard.jsx';

function Practice(props) {
    return (
        <div>
            <Link className='BACK-MAIN-MENU' to={'/main_window'}>Back to Main Menu</Link>
            <h1>💖 Welcome to Practice !</h1>
            <KeyBoard/>
        </div>
    );
}

export default Practice;