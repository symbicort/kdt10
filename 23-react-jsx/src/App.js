import './App.css';

// function App() {
//   const name = 'gildong';
//   return (
//     <div className="App">
//       {/* JSX 문버 */}
//       {/* 1. 하나로 감싸인 요소 */}
//       {/* 2. javascript 표현식 사용
//           - {}로 감싸면 js 표현식 사용 가능
//           - {} 에서 삼항 연산자 사용가능(if문 안됨)

//           */}
//       <div>{name} 안녕하세요!</div>
//       <div>
//         {name === 'gildong' ? 'gildong 입니다' : 'gildong이 아닙니다'}

//         {/* 3. style 속성
//           -리액트에서 돔 요소에 스타일 적용시 문자열 X -> 객체 사용
//           - 스타일 속성 이름 중에서 하이픈 포gkat camelCast
//           */}
//       </div>

//       {/* 4. ClassName 사용
//         -class 속성이 아닌 className 속성 사용!

//         5. 종료 태그가 없는 태그의 사용
//         - 기존에 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성 해야 함 or self-closing
//           - <input> -> <input></input> or <input />
//           - <br> -> <br></br> or <br />

//         6. 주석
//         - // ; Jsx 외부 주석(return 밖)

//       */}
//     </div>
//   );
// }

// jsx 1
// function App() {
//   const name = '로이';
//   const animal = '강아지';
//   return (
//     <h2>
//       제 반려 동물의 이름은 {name} 입니다. <br /> {name}는 {animal}입니다
//     </h2>
//   );
// }

// jsx 2
// function App() {
//   return <div>{3 + 5 == 8 ? '정답입니다' : '오답입니다'}</div>;
// }

// jsx 3
// function App() {
//   const a = 13;
//   const b = 8;
//   return <div>{a > b && 'a가 b보다 큽니다'}</div>;
// }

// jsx 4
function App() {
  const title = 'Hello World';
  return (
    <div>
      <div className="title">{title}</div>
      <br />
      <center>
        아이디: <input type="text" /> <br />
        비밀번호: <input type="password" />
      </center>
    </div>
  );
}

export default App;
