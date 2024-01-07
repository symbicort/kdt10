import React, { useRef, useState } from 'react';

const RefFunc2 = () => {
  const idRef = useRef(1);
  const [id, setId] = useState(10);

  const plusIdRef = () => {
    idRef.current += 1;
    console.log(idRef.current);
    // Ref 로컬 변수 값은 바뀌지만 컴포넌트가 다시 랜더링 되진 않음
  };

  const plusIdState = () => setId(id + 1);

  return (
    <>
      <p>함수형 컴포넌트 로컬 변수 사용</p>
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>plusIdRef</button>

      <h2>{id}</h2>
      <button onClick={plusIdState}>plusIdRef</button>
    </>
  );
};

export default RefFunc2;
