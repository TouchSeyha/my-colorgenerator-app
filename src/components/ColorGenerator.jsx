// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function ColorGenerator() {

    const [ color, setColor ] = useState("#ffffff");

    const handleColorChange = (e) => { 
        setColor(e.target.value);
    }

    return (
        <div className="color-generator-container">
            <h1>Color Generator</h1>
            <div className="color-generator-box" style={{ backgroundColor: color}}>
                <p>Selected Color: { color }</p>
            </div>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorGenerator;