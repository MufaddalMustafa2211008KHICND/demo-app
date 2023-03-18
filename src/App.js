import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import { createContext } from 'react';

const MyContext = createContext(null)

function App() {
  return (
    <div className="App">
      <MyContext.Provider value={{name: 'mohsen'}}>

        <Parent/>

      </MyContext.Provider>
        
      
    </div>
  );
}

export {App, MyContext};
