import './App.css';
import FuncComponent from './FuncComponent';
import Button from './button';
import ClassComponent from './ClassComponent';

// function App() {
//   return (
//     <div className="APP">
//       <FuncComponent name="코딩온" />
//       <FuncComponent />

//       <hr />
//       <Button link="https://www.google.com">google</Button>

//       <hr />
//       <classComponent name="coding" />
//     </div>
//   );
// }

// props 1
// function App() {
//   return (
//     <div className="APP">
//       <FuncComponent />

//       <FuncComponent name="커피" />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="book">
//       <h2 className="box-title">이번주 베스트셀러</h2>
//       <img
//         src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158511906.jpg"
//         alt=""
//       />
//       <FuncComponent
//         title="나의 하루는 4시 40분에 시작된다"
//         author="김유진"
//         price="13500원"
//         type="자기계발서"
//       />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <ClassComponent /> <ClassComponent text="클래스 컴포넌트 테스트" />
    </div>
  );
}

export default App;
