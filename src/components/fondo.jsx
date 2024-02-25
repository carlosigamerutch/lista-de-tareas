import React from 'react';

const Fondo = () => {
    const setBlackBackground = () => {
        document.body.style.backgroundColor = 'black';
    };

    return (
        <div>
            <button onClick={setBlackBackground}>Set Black Background</button>
            {/* Your content goes here */}
        </div>
    );
};

export default Fondo;
