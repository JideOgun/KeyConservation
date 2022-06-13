import React, { useState } from 'react';



function Square() {
    const [square, setSquare] = useState(null);
    const [X, setXTurn] = useState(true)
    console.log(square)



    const setQuareValue = () => {
        console.log(X)
        
        if(X === true) {
            setSquare('X')
        } else {
            setSquare('O')
        }
        setXTurn(!X)
        
    }


    return ( <button className='button' value={square} onClick={setQuareValue}>{square}</button>

    );
}

export default Square;