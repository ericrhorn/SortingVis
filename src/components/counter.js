import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Counter = () => {

    const [count, setCount] = useState(0)

    //can also set up a custom hook as a seperate component
    // ex: useConsoleLog.js hook uses useEffect to log the count 
    // Remember that the proper way to handle console.log() invocations is to use the useEffect hook.
    // inside useConsoleLog.js file

    // import { useEffect } from "react";

    // function useConsoleLog(varName) {
    //   useEffect(() => {
    //     console.log(varName);
    //   }, [varName]);
    // }

    // export default useConsoleLog;

    const counteUp = (e) => {
      setCount(count + 1)
    }
    
    // can also do
    // const counteUp = (e) => {
    //   setCount(prevCount => prevCount + 1)
    // }

    const counteDown = (e) => {
      setCount(count - 1)
    }

    const counterReset = (e) => {
      setCount(0)
    }


    return(
        <>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <div>
        <Button className='me-2' variant="outline-light" onClick={counteUp}>Count up!</Button>
        <Button className='me-2' variant="outline-light" onClick={counteDown}>Count down!</Button>
        <Button className='me-2' variant="outline-light" onClick={counterReset}>Reset Count</Button>
        </div>
        </>
    )
}
export default Counter