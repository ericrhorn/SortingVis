import React, { useState } from 'react';


const Todo = () => {

// create a piece of state 
// type of state depends on the informaiton we intend to hold
// useState is an array of two methonds 
const [list, setList] = useState([])
// send this down via props.
// when we run our getter we get the current value of state
// when we run our setter we pass that value up through state


    return(
        <>
        <h2>Todo List</h2>
            {/* pass getter and setter methods down via props to form and display; state is also an object similar to props; entered as a key value pair */}
            <Form list={list} setList={setList}/>
            <Display list={list} setList={setList}/>
        </>
  
    )
}

function Form(props){

    // state for list
    // creatign a new todo use another piece of state to track the input
    const [listText, setListText] = useState('')

    //deconstruct props object
    //deconstruct using the key name (list); the values are (setList) or variables
    // this will allow access to the state hook above in Todo
    const {list, setList} = props

    const submitHandler = (e) => {
        //stops hard refresh once button is clicked 
        e.preventDefault();
        //submiting form will add listText to our list usign our setter below. Since its an array we save that as an array below
        //...list is our getter that gets everything current inside the array. ,{} add in an object. 
        // first object is the list text being typed in the form imput via key value pairs with content : listText via setter ment to update the current state
        setList([...list,  {
            content : listText,
            markedDelete : false,
            id : Math.floor(Math.random()*1000000000)
        }])
        // resets form after submit to an empty string; value in the input is the default value which is set as an empty string 
        setListText('')
    }

    return(
        <>
        <form onSubmit={submitHandler}>
            <div class="input-group mb-3">
                <input type="text" class="form-control" value={listText} onChange={(e)=>setListText(e.target.value)} />
                <button class="btn btn-outline-light" >Todo</button>
            </div>
        </form>
        </>
    )
}

function Display(props){

    const {list, setList} = props

    const handleCompleted = (todo) => {
        todo.markedDelete = !todo.markedDelete;
        let updateList = [...list];
        setList(updateList);
    }

// markedDelete is a parameter and will get its value below in the view return 
    const style = (markedDelete) => {
        if(markedDelete === true){
            return 'completed'
        }else {
            return 'notCompleted'
        }
    }

    const deleteBtn = (idContent) => {
        setList(
            //.filter takes in a call back function with 2 parameters stand in for each individual iteration (todo) acts as a variable so we can access each individual todo in teh list   and an index
            list.filter((todo, index)=>{
                return todo.id !== idContent;
            })

        )
    }

    // map is a forloop 
    // for (var x = 0; x < arr.length; x++){
    //     console.log(arr[x])
    //     arr[x] is what we are mapping through. It is the same as list below
    // }
    // using => () means the return is implicit 

    return(
        <>
        <ul>
            {
            list.map((todo, idx) => (
                //style has a value of todo (the individual iteration) markedDelete where its getting its location 
                <div style={{marginTop: 20}} className={style(todo.markedDelete)} key={idx}>
                    <p style={{marginBottom: -5}}>{todo.content}</p>
                    <div>
                        <input style={{ height: 20, width: 20, marginTop: 12}} className="form-check-input me-2" type="checkbox" onChange={(e)=>handleCompleted(todo)} />
                        <label style={{fontSize: 15}} className="form-check-label me-4" for="flexCheckDefault">
                        Mark Completed
                        </label>
                        <button className="btn btn-outline-light" onClick={(e)=>deleteBtn(todo.id)}>Delete</button>
                    </div>
                </div>
            ))
            }
        </ul>
        </>
    )
}


export default Todo