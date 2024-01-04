import React, { useState } from 'react';

function SayFunction() {
  console.log(useState('welcome'));

  const [message, setMessage] = useState('welcome');

  const onClickEnter = () => {
    setMessage('helllo');
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}

export default SayFunction;
