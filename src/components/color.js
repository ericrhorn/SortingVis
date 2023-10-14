import React, { useState } from 'react';


// const Color = () => {

//     const [color, setColor] = useState('')

//     const getColor = (color) => {
//         setColor(color)
//     }

//     return(
//         <>
//             <h4>Color Disply</h4>
//             <div style={{marginBottom: 20, border: 'solid', height:200, width:500, backgroundColor: `${color}`}}>
//                 {/* <p>{color}</p> */}
//             </div>
//             <Callback getColor={getColor}/>
//             {/* <input style={{marginBottom: 20}} type="text" />
//             <Button className='mb-2' variant="outline-light" onClick={handleChange} value={showColor}>Change Color</Button>
//             <Button variant="outline-light" onClick={resetColor}>Reset Color</Button> */}
//         </>
//     )
// }

// function Callback({getColor}){
//     const [showColor, setShowColor] = useState('')

//     const handleChange = (e) => {
//         const {value} = e.target;
//         setShowColor(value);
//         getColor(value)
//     }

//     return(
//         <>
//         <input style={{marginBottom: 20}} type="text" onChange={handleChange} value={showColor}/>
//         </>
//     )
// }

// export default Color


const Color = () => {

    const [color, setColor] = useState('')


    return(
        <>
            <h2>Color Disply</h2>
            <Display color={color} setColor={setColor}/>
            <Form color={color} setColor={setColor}/>
        </>
    )
}

function Form({color, setColor}){

    const [showColor, setShowColor] = useState('')


    const submitHandler = (e) => {
        e.preventDefault();
        setColor(showColor);
        setShowColor('')
    }


    return(
        <>
        <form onSubmit={submitHandler}>
            <div class="input-group mb-3">
                <input type="text" class="form-control" onChange={(e)=>setShowColor(e.target.value)} value={showColor} />
                <button className="btn btn-outline-light">Change Color</button>
                <button className="btn btn-outline-light" onClick={setColor}>Reset</button>
            </div>
        </form>
        </>
    )
}

function Display({color, setColor}){
    return (
        <>
            <div style={{marginBottom: 20, border: 'solid', height:200, width:500, backgroundColor: `${color}`}}></div>
        </>
    )
}

export default Color
