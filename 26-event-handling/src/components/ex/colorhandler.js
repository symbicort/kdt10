import React, { useState } from 'react';

// function Setcolor() {
//   const [message, setMessage] = useState('검정색 글씨');
//   const [textcolor, setColor] = useState('black');

//   const red = () => {
//     setMessage('빨간색 글씨');
//     setColor('red');
//   };

//   const blue = () => {
//     setMessage('파란색 글씨');
//     setColor('blue');
//   };

//   return (
//     <div>
//       <h2 style={{ color: textcolor }}>{message}</h2>
//       <button onClick={red}>빨간색 글씨</button>
//       <button onClick={blue}>파란색 글씨</button>
//     </div>
//   );
// }

function Setcolor() {
  const [number, setNumber] = useState(0);

  const setNum = () => {
    setNumber(number + 1);
  };

  if (number % 2 == 0) {
    return (
      <div>
        <button onClick={setNum}>사라져라</button>
        <h2>Hello</h2>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={setNum}>보여라</button>
      </div>
    );
  }
}

export default Setcolor;
