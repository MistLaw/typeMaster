import React from 'react';

function LeftRing({blink}) {
    return (
<svg id="LeftRing" class={"finger" + (blink? " blink" : "")}  overflow="visible" width="41" height="144" viewBox="0 0 41 144" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39 23.2836C39.0147 -5.23724 3.01416 -4.95144 3 23.2836C2.98584 51.5186 3 142 3 142H39C39 142 38.9853 51.8044 39 23.2836Z" stroke="black" stroke-width="4"/>
<path d="M26 9.58407H15C12.2386 9.58407 10 11.8226 10 14.5841V23.9847C10 25.5789 10.7463 27.1007 12.0907 27.9574C17.9641 31.6998 22.179 31.6714 28.4938 28.4217C30.0704 27.6104 31 25.9452 31 24.1722V14.5841C31 11.8226 28.7614 9.58407 26 9.58407Z" stroke="black"/>
<path d="M10 42.4314H32" stroke="black" stroke-dasharray="2 4 6 8"/>
<path d="M10 48.5903H25.5H33" stroke="black" stroke-linecap="round" stroke-dasharray="2 4 6 8"/>
<path d="M10 99.9143H25" stroke="black" stroke-linecap="round"/>
<path d="M29 99.9143H32.5" stroke="black" stroke-linecap="round"/>
<path d="M10.5 108.639H32.5" stroke="black" stroke-linecap="round"/>
<path d="M13.5 28.574C18.9674 26.9366 22.0326 26.882 27.5 28.574" stroke="black" stroke-linecap="round"/>
</svg>

    );
}

export default LeftRing;