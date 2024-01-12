import Box1 from './Box1';
import { useSelector } from 'react-redux';
import './styles/Box.css';

function App() {
  const status = useSelector((state) => state.status);

  return (
    <>
      <h1>React Redux Ex </h1>
      <h2>isVisible 값은 {status ? '참' : '거짓'}이다</h2>
      <Box1 />
    </>
  );
}

export default App;
