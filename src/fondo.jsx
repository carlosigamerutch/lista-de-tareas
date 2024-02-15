
import React, { useState } from 'react';

function Fondo() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const changeBackground = () => {
        setIsDarkMode(!isDarkMode);
    };

    const backgroundColor = isDarkMode ? 'black' : 'white';

    return (
        <div style={{ backgroundColor }}>
            <button onClick={changeBackground}>Cambiar a Dark Mode</button>
        </div>
    );
}

export default Fondo;
