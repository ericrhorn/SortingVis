import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import Counter from './components/counter';
import Color from './components/color';
import Todo from './components/todo';
import Props from './components/props';
import Sort from './components/sort';
import Bubbles from './components/bubbles';

function App() {

const [show, setShow] = useState(false)

const counter = (e) => {
  setShow('counter')
}
const color = (e) => {
  setShow('color')
}
const todo = (e) => {
  setShow('todo')
}
const props = (e) => {
  setShow('props')
}
const sort = (e) => {
  setShow('sort')
}
const bubbles = (e) => {
  setShow('bubbles')
}

  return (
    <div className='App'>
      <h1>Ultimate React Page!</h1>
      <div className='p-3 mb-5'>
        <Button variant="outline-light" className='me-2' onClick={counter}>Simple Counter</Button>
        <Button variant="outline-light" className='me-2' onClick={props}>Props</Button>
        <Button variant="outline-light" className='me-2' onClick={color}>Color Display</Button>
        <Button variant="outline-light" className='me-2' onClick={todo}>ToDo List</Button>
        <Button variant="outline-light" className='me-2' onClick={bubbles}>Bubbles</Button>
        <Button variant="outline-light" className='me-2' onClick={todo}>API</Button>
        <Button variant="outline-light" className='me-2' onClick={sort}>Sorting Visulizer</Button>
      </div>
      {
        (show === 'counter') ? <Counter/> : null
      }
      {
        (show === 'color') ? <Color/> : null
      }
      {
        (show === 'todo') ? <Todo/> : null
      }
      {
        (show === 'bubbles') ? <Bubbles/> : null
      }
      {
        (show === 'props') ? <Props/> : null
      }
      {
        (show === 'sort') ? <Sort/> : null
      }
    </div>
  );
}

export default App;
