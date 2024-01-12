import Box1 from './Box1';
import { useSelector } from 'react-redux';
import './styles/Box.css';

function App() {
  const number = useSelector((state) => state.number);
  return (
    <>
      <h1>React Redux Ex 2</h1>
      <h2>{number}</h2>
      <Box1 />
    </>
  );
}

export default App;
