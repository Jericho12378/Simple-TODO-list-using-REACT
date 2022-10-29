import { useState } from "react";
import "./App.css";
import InputField from "./components/inputField.jsx";
import ListsOfTodo from "./components/listOfTodos.jsx";

function App() {
  const [todo, setTodo] = useState([])
  let counter = localStorage.length + 1;
  let todoLists = [];

  for (let i = 1; i <= localStorage.length; i++) {
    let string = JSON.parse(localStorage.getItem("todo" + i))
    todoLists.push(string);
  }
  
  return (
    <div className="App">
      <div className="App__header">
        <h1>My Todo Lists</h1>
      </div>
      <div className="todo__wrapper">
        <div className="input__wrapper">
          <InputField ButtonClicked={ButtonClicked}></InputField>
        </div>
        <div className="lists__wrapper">
          {todoLists.map(lists => (
              <ListsOfTodo key={lists} lists={lists}></ListsOfTodo>
             ))}
        </div>
      </div>
    </div>
  );

  function ButtonClicked() {
    let inputValue = document.getElementById("input").value;
    if (counter == null) {
      counter = 1;
    }
    setTodo([inputValue])
    localStorage.setItem(`todo${counter}`, JSON.stringify(inputValue));
    // counter = localStorage.key(localStorage.length)
    counter++;
    document.getElementById("input").value = " "
  }
}

export default App;
