import { createContext } from 'react';
import './App.css';
import UserProvider from './context/UserProvider';
import UserProfile from './components/UserProfile';

function App() {
  const MyContext = createContext('defaultvalue');
  console.log(MyContext);
  return (
    <div className="App">
      <UserProvider>
        <UserProfile />
      </UserProvider>
    </div>
  );
}

export default App;
