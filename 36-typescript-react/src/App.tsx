import React from 'react';
import './App.css';
import Student from './component/Student';

function App() {
  const handleClick = (name: string, grade: number) => {
    alert(`이 학생의 이름은 ${name} 이고 ${grade} 학년입니다.`);
  };
  return (
    <div>
      <Student name="buds pro" grade={3} subject="수학" />
    </div>
  );
}

export default App;
