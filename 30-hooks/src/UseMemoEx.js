import { useState } from 'react';

function UseMemoEx() {
  const [count, setCount] = useState(0);

  const calc = () => {
    console.log('계산중');
    for (let i = 0; i < 100000000; i++) {}
    return count ** 2;
  };
  return (
    <>
      <h1>UseMemo Ex</h1>
      <button
        onClick={() => {
          setCount(() => count + 1);
        }}
      >
        Plus
      </button>
      <p>count: {count}</p>

      <p>calc : {calc}</p>
    </>
  );
}

export default UseMemoEx;
