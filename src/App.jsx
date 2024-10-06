import { useState } from 'react'
import './App.css'
import ToDoItem from './ToDoItem';

function App() {
  const [inputText , setInputText] = useState("") ;
  const [items, setItems] = useState([]) ;
 

  function handleClick(){
    setItems((prevItem) => {
      return[...prevItem , inputText]
    }
    )
    setInputText("")
  }
  
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={(e) => setInputText(e.target.value)}
        value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul> 
         {items.map((toDoItem) =>(
          <ToDoItem 
          text = {toDoItem}
          />
         ))}
        </ul>
      </div>
    </div>
  );
}

export default App
