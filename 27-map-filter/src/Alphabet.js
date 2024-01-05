import React, { useState } from 'react';

// function Alphabet() {
//   const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
//   return (
//     <>
//       <ol>
//         {/* map */}
//         {alphabet.map((value, idx) => {
//           return <li key={idx}>{value}</li>;
//         })}
//       </ol>
//       <input type="text" name="" id="" />
//     </>
//   );
// }

function PracMap1() {
  const [inputname, setInputname] = useState('코디');
  const [inputemail, setInputemail] = useState('admin@gmail.com');
  const [result, setResult] = useState([
    'test : test@gmail.com',
    'admin: admin@gmail.com',
  ]);

  const addname = (name) => {
    setInputname(name);
  };

  const addemail = (email) => {
    setInputemail(email);
  };

  const addresult = () => {
    setResult([...result, `${inputname}: ${inputemail}`]);
    console.log(result);
  };

  const removeItem = (index) => {
    const updatedResult = [...result];
    updatedResult.splice(index, 1);
    setResult(updatedResult);
  };

  return (
    <>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => {
          addname(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일 입력"
        onChange={(e) => {
          addemail(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addresult();
          }
        }}
      />
      <button onClick={addresult}>등록</button>

      {/* map */}
      {result.map((value, idx) => {
        return (
          <h4 key={idx} onDoubleClick={() => removeItem(idx)}>
            {value}
          </h4>
        );
      })}
    </>
  );
}

export default PracMap1;
