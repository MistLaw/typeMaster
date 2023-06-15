import React from 'react';
import { Link } from 'react-router-dom';

function Tutorial(props) {


    return (
        <div className='landing-page'>
            <Link className='BACK-MAIN-MENU' to={'/main_window'}>Back to Main Menu</Link>
            <h1>💖 Welcome to the Tutorial !</h1>
        </div>
    );
}

export default Tutorial;