import "./App.css";
import InputField from "./components/inputField.jsx";
import ListsOfTodo from "./components/listOfTodos.jsx";
function App() {
 
  let counter = localStorage.length + 1;
  let todoLists = [];
  for (let i = 1; i <= localStorage.length; i++) {
    todoLists.push(localStorage.getItem("todo" + i));
  }
  return (
    <div className="App">
      <div className="App__header">
        <h1>My Todo Lists</h1>
      </div>
      <div className="todo__wrapper">
        <div className="input__wrapper">
          <InputField buttonClicked={buttonClicked}></InputField>
        </div>
        <div className="lists__wrapper">
          {todoLists.map((lists) => (
             <ListsOfTodo key={lists} lists={lists}></ListsOfTodo>
          )
          )}
        </div>
      </div>
    </div>
  );

  function buttonClicked() {
    let inputValue = document.getElementById("input").value;
    if (counter == null) {
      counter = 1;
    }
    console.log(todoLists)

    localStorage.setItem(`todo${counter}`, JSON.stringify(inputValue));
    // counter = localStorage.key(localStorage.length)
    counter++;
  }
}

export default App;
