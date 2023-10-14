import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Props = () => {

   const [state, setState] = useState([])

   const addState = (e) => {
    setState([...setState,
    ])
   }


    return(
        <>
        <h1>Props</h1>
        <input type="text" name="" id="" />
        </>
  
    )
}
export default Props