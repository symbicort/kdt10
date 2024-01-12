// export const plus = () => ({ type: 'plus' });
// export const minus = () => ({ type: 'minus' });

// // 초기값 정의
// const initialState = {
//   number: 0,
// };

// // reducer 정의: action을 발생시키는 함수
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'plus':
//       return { number: state.number + 1 };
//     case 'minus':
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// };

export const plus = () => ({ type: 'plus' });
export const minus = () => ({ type: 'minus' });
export const square = () => ({ type: 'square' });
export const clear = () => ({ type: 'clear' });
export const root = () => ({ type: 'root' });

const clearNumber = {
  number: 0,
};

const controlNum = (state = clearNumber, action) => {
  switch (action.type) {
    case 'plus':
      return { number: state.number + 1 };
    case 'minus':
      return { number: state.number - 1 };
    case 'square':
      return { number: state.number ** 2 };
    case 'clear':
      return { number: (state.number = 0) };
    case 'root':
      return { number: Math.sqrt(state.number) };
    default:
      return state;
  }
};

export default controlNum;
