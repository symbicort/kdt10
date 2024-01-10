import { createContext } from 'react';

const defaultUser = {
  name: '홍길동',
  setName: () => {}, // 이름 변경 함수
};

export const UserContext = createContext(defaultUser);
