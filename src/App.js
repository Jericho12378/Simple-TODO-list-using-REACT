

import { useState } from "react";
import "./App.css";
import InputField from "./components/inputField.jsx";
import ListsOfTodo from "./components/listOfTodos.jsx";

function App() {
  const [todo, setTodo] = useState([])
  let counter = localStorage.length + 1;
  let todoLists = [];

  // for (let i = 1; i <= localStorage.length; i++) {
  //   console.log(localStorage.key(i-1))
  //   let string
  //   let x = 0
  //  // console.log(i)
  //   if(localStorage.getItem("todo" + i) == null ){
  //   // console.log(i + " is null")
  //     x = i + 1  
  //     string = JSON.parse(localStorage.getItem("todo" + x))
  //   }else{
  //     string = JSON.parse(localStorage.getItem("todo" + i))
      
  //     todoLists.push(string); 
  //    // console.log(todoLists)
  //   }
      
  // }
  setLocalStorage()
  function setLocalStorage(){
    for (let i = 0; i < localStorage.length; i++) {
      let localKey = localStorage.key(i)
      let string = JSON.parse(localStorage.getItem(localKey))
      todoLists.push(string); 
    }
  }
  

  return (
    <div className="App">
      <div className="App__header">
        <h1>My Todo Lists </h1>
      </div>
      <div className="todo__wrapper">
        <div className="input__wrapper">
          <InputField ButtonClicked={ButtonClicked}></InputField>
        </div>
        <div className="lists__wrapper">
          {todoLists.map((lists,index) => (
              <ListsOfTodo key={lists} lists={lists}
               deleteButton={() => deleteButton(lists,index)}></ListsOfTodo>
              
             ))}
        </div>
      </div>
    </div>
  );

  function deleteButton(value,index){
    let localKey = localStorage.key(index)
    localStorage.removeItem(localKey)
    setLocalStorage()
    setTodo([value]) //The purpose of having this is to refresh the damn component only!! its like pressing f5 while youre on the desktop (just so you know future me)
  }

  function ButtonClicked() {
    let inputValue = document.getElementById("input").value;
    if (counter == null) {
      counter = 1;
    }
    setTodo([inputValue]) //Another one here HAHHAHA USING USESTATE OF REACT IN  A VERY ODD WAY AHAHHAHAHAHA IM TALKING TO MYSELF
    localStorage.setItem(`todo${counter}`, JSON.stringify(inputValue));
    // counter = localStorage.key(localStorage.length)
    counter++;
    document.getElementById("input").value = " "
  }
}

export default App;
