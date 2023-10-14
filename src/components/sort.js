import React from 'react';
import Button from 'react-bootstrap/Button';

const Sort = () => {
  const [array, setArray] = React.useState(
    Array.from({ length: 100 }, () => Math.floor(Math.random() * 200))
  );
  const [sorted, setSorted] = React.useState(false);
  const [animation, setAnimation] = React.useState(null);
  const [index, setIndex] = React.useState(0);
  

  const bubbleSort = () => {
    setTimeout(() => {
      if (index === array.length - 1) {
        if (
          array.every((num, i) => i === 0 || num >= array[i - 1])
        ) {
          setIndex(0);
          setSorted(true);
          return;
        }
        setIndex(0);
      }
      for (let j = 0; j < array.length - index - 1; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          setArray([...array]);
          setAnimation({ i: j, j: j + 1 });
        }
      }
      setIndex(index);
      // setIndex(index + 1);
      setAnimation(null);
      bubbleSort();
    }, 25);
  };

  const reset = () => {
    setArray(Array.from({ length: 100 }, () => Math.floor(Math.random() * 200)));
    setSorted(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', border: "1px solid black" }}>
      <h1>Bubble Sort</h1>
      <div style={{ display: 'flex' }}>
        {array.map((value, i) => (
          <div
            key={i}
            style={{
              border: "1px solid black",
              width: '5px',
              height: `${value * 2}px`,
              marginRight: '5px',
              backgroundColor: sorted ? 'green' : animation && (i === animation.i || i === animation.j) ? 'red' : 'blue',
            }}
          ></div>
        ))}
      </div>
      <Button onClick={bubbleSort}>Sort</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};

export default Sort;