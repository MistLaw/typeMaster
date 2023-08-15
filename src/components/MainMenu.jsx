import React from 'react';
import '../styles/mainmenu.css'
import '../index.css'
import { Link } from 'react-router-dom';

function MainMenu(props) {
    return (
        <div className='flex flex-col w-1/3 grow justify-center'>
            <div className='flex flex-col h-2/3 bg-primary p-4 gap-4 rounded justify-center items-center'>
                <Link className='bg-secondary w-2/3 text-center rounded' to={'/tutorial'}>Tutorial</Link>
                <Link className='bg-secondary w-2/3 text-center rounded' to={'/practice'}>practice</Link>
            </div>
        </div>

    );
}

export default MainMenu;