import React from 'react';

function LeftMiddle({blink}) {
    return (
<svg id="LeftMiddle" class={"finger" + (blink? " blink" : "")}  overflow="visible" width="41" height="152" viewBox="0 0 41 152" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39 24.4998C39.0147 -5.6508 3.01416 -5.34866 3 24.4998C2.98584 54.3482 3 150 3 150H39C39 150 38.9853 54.6503 39 24.4998Z" stroke="black" stroke-width="4"/>
<path d="M26 10.0174H15C12.2386 10.0174 10 12.256 10 15.0174V25.4693C10 27.0165 10.7043 28.4989 11.9841 29.3685C17.9463 33.4197 22.1881 33.3874 28.6006 29.8733C30.117 29.0422 31 27.413 31 25.6838V15.0174C31 12.256 28.7614 10.0174 26 10.0174Z" stroke="black"/>
<path d="M10 44.7418H32" stroke="black" stroke-dasharray="2 4 6 8"/>
<path d="M10 51.2526H25.5H33" stroke="black" stroke-linecap="round" stroke-dasharray="2 4 6 8"/>
<path d="M10 105.509H25" stroke="black" stroke-linecap="round"/>
<path d="M29 105.509H32.5" stroke="black" stroke-linecap="round"/>
<path d="M10.5 114.733H32.5" stroke="black" stroke-linecap="round"/>
<path d="M13.5 30.0925C18.9674 28.3615 22.0326 28.3038 27.5 30.0925" stroke="black" stroke-linecap="round"/>
</svg>

    );
}

export default LeftMiddle;