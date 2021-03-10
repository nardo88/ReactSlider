
import React, { useState } from 'react';
import { List } from './components/List';
import './App.css'

// создаем коентекст
export const LocalContext = React.createContext();

function App() {

  // создаем state
  const [localState, setLocalState] = useState([
    {name: 'Александр', age : 32, id: 0, profession: 'Инженер'},
    {name: 'Ольга', age : 30, id: 1, profession: 'Доктор'},
    {name: 'Максим', age : 33, id: 2, profession: 'Веб-разработчик'},
    {name: 'Анастасия', age : 27, id: 3, profession: 'Учитель'},
    {name: 'Михаил', age : 42, id: 4, profession: 'Бухгалтер'},
    {name: 'Виктор', age : 62, id: 5, profession: 'Охранник'},
  ])

  
 
  return (
    <LocalContext.Provider value={{localState, setLocalState}}>
      <div className="list">
        <List />
      </div>
    </LocalContext.Provider>
    
  );
}

export default App;


