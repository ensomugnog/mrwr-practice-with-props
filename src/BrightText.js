import React from 'react';

function BrightText({ color }) {
    const style = { color: color };

    return (
        <h1 style={style}>Hi!</h1>
    )
}

export default BrightText;