import React, { useState } from 'react';

function Prac() {
  let [message, setMessage] = useState('');
  let [fruit, setFruit] = useState(
    'https://www.healthweek.co.kr/boardImage/healthweek/20200827/MC4xMjIyMTIwMCAxNTk4NTE2NjA5.jpeg'
  );
  let [backg, setBack] = useState('');
  let [textC, setTextC] = useState('red');

  const imgfruit = (e) => {
    if (e.target.value === 'peach') {
      setFruit(
        'https://www.healthweek.co.kr/boardImage/healthweek/20200827/MC4xMjIyMTIwMCAxNTk4NTE2NjA5.jpeg'
      );
    } else if (e.target.value === 'apple') {
      setFruit(
        'https://img.khan.co.kr/news/2023/09/27/l_2023092801001014200092871.jpg'
      );
    } else if (e.target.value === 'orange') {
      setFruit(
        'https://mblogthumb-phinf.pstatic.net/20160815_120/kjyeah_14712297086046bEtv_PNG/%BF%C0%B7%BB%C1%F6.PNG?type=w2'
      );
    }
  };

  const backgC = (e) => {
    if (e.target.value === 'red') {
      setBack('red');
    } else if (e.target.value === 'blue') {
      setBack('blue');
    } else if (e.target.value === 'yellow') {
      setBack('yellow');
    }
  };

  const textColor = (e) => {
    if (e.target.value === 'red') {
      setTextC('red');
    } else if (e.target.value === 'blue') {
      setTextC('blue');
    } else if (e.target.value === 'yellow') {
      setTextC('yellow');
    }
  };

  const viewMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <center>
      <form name="prac" style={{ padding: 10 }}>
        과일 :
        <select onChange={imgfruit}>
          <option value="peach">복숭아</option>
          <option value="apple">사과</option>
          <option value="orange">오렌지</option>
        </select>
        배경색 :
        <select onChange={backgC}>
          <option value="red">빨강</option>
          <option value="blue">파랑</option>
          <option value="yellow">노랑</option>
        </select>
        글자색 :
        <select onChange={textColor}>
          <option value="red">빨강</option>
          <option value="blue">파랑</option>
          <option value="yellow">노랑</option>
        </select>
        <br />
        <br />
        내용 :
        <input type="text" name="text" onChange={viewMessage} />
        <br />
        <br />
        <img
          src={fruit}
          alt="none"
          style={{ width: '200px', height: '200px' }}
        />
        <br />
        <br />
        <div
          style={{
            width: '150px',
            height: '60px',
            backgroundColor: backg,
            color: textC,
          }}
        >
          {message}
        </div>
      </form>
    </center>
  );
}

export default Prac;
