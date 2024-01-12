import { useSelector, useDispatch } from 'react-redux';
import { plus, minus, square, root, clear } from './store/counterReducer';

import { change } from './store/isVisibleReducer';

// function Box4() {
//   const number = useSelector((state) => state.number);
//   const dispatch = useDispatch();

//   return (
//     <div className="Box">
//       <h2>box4: {number}</h2>
//       <button onClick={() => dispatch(plus())}>plus</button>
//       <button onClick={() => dispatch(minus())}>minus</button>
//       <button onClick={() => dispatch(square())}>square</button>
//       <button onClick={() => dispatch(root())}>root</button>
//       <button onClick={() => dispatch(clear())}>clear</button>
//     </div>
//   );
// }

function Box4() {
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  return (
    <div className="Box">
      <h2>isVisible 값은 {status ? '참' : '거짓'}이다</h2>
      <button onClick={() => dispatch(change())}>change</button>
    </div>
  );
}

export default Box4;
