import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';




const Bubbles = () => {

    const [newBubbles, setNewBubbles] = useState([])

    const CreateBubbles = (e) => {
        const {clientX, clientY} = e;
        setNewBubbles([
            ...newBubbles, 
            {
                clientX, 
                clientY,
            },
        ]);
        console.log('click works')
    }
    
    const reset = (e) => {
        setNewBubbles(0)
    
    }

    return(
        <>
            <div style={{display: 'flex', verticalAlign: 'middle'}}>
                <h2>Bubbles</h2>
                <div style={{marginLeft: 10}}>
                <Button variant="outline-light" className='me-2' onClick={reset}>Reset</Button>
                </div>
            </div>
            <div style={{height: 500, width: '80%', border: 'solid white', margin: 5}} onClick={CreateBubbles}></div>
        </>
    )
}

export default Bubbles
