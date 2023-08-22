import React from 'react';
import '../styles/mainmenu.css'
import '../index.css'
import { Link } from 'react-router-dom';

function MainMenu(props) {
    return (
    
        <div className='flex flex-col grow justify-center'>
            <div className='flex flex-col h-full bg-primary p-4 gap-4 rounded justify-center items-center'>
                <Link className='font-jost text-2xl bg-secondary w-2/3 p-1 text-center rounded hover:scale-110 hover:shadow-surround hover:shadow-accent  hover:text-accent' to={'/tutorial'}>Tutorial</Link>
                <Link className='font-jost text-2xl bg-secondary w-2/3 p-1 text-center rounded hover:scale-110 hover:shadow-surround hover:shadow-accent  hover:text-accent' to={'/practice'}>Practice</Link>
            </div>
        </div>

    );
}

export default MainMenu;