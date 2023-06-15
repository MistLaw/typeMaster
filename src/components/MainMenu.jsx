import React from 'react';
import '../styles/mainmenu.css'
import { Link } from 'react-router-dom';

function MainMenu(props) {
    return (
        <div className='MAIN-MENU'>
                <Link className='MENU-ITEM' to={'/tutorial'}>Tutorial</Link>
                <Link className='MENU-ITEM' to={'/practice'}>practice</Link>
        </div>
    );
}

export default MainMenu;