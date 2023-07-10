import React from 'react';

function LeftPinky({blink}) {
    return (
<svg id="LeftPinky" class={"finger" + (blink? " blink" : "")}  overflow="visible" width="34" height="108" viewBox="0 0 34 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 17.8106C32.0118 -3.37624 3.01018 -3.16393 2.99878 17.8106C2.98737 38.7852 2.99878 106 2.99878 106H32C32 106 31.9882 38.9975 32 17.8106Z" stroke="black" stroke-width="4"/>
<path d="M20.5553 7.63388H13.6379C10.8765 7.63388 8.6379 9.87245 8.6379 12.6339V17.5583C8.6379 19.2198 9.44351 20.8089 10.8986 21.611C15.1361 23.9471 18.3573 23.9476 22.888 21.9262C24.5639 21.1785 25.5553 19.4536 25.5553 17.6185V12.6339C25.5553 9.87246 23.3167 7.63388 20.5553 7.63388Z" stroke="black"/>
<path d="M8.6379 32.0348H26.3609" stroke="black" stroke-dasharray="2 4 6 8"/>
<path d="M8.6379 36.61H21.1245H27.1665" stroke="black" stroke-linecap="round" stroke-dasharray="2 4 6 8"/>
<path d="M8.6379 74.7364H20.7217" stroke="black" stroke-linecap="round"/>
<path d="M23.9441 74.7364H26.7637" stroke="black" stroke-linecap="round"/>
<path d="M9.0407 81.2178H26.7637" stroke="black" stroke-linecap="round"/>
<path d="M11.4575 21.7407C15.8619 20.5243 18.3312 20.4838 22.7357 21.7407" stroke="black" stroke-linecap="round"/>
</svg>

    );
}

export default LeftPinky;