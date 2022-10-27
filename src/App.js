import logo from "./logo.svg";
import "./App.css";
import InputField from "./components/inputField.jsx";
import ListsOfTodo from "./components/listOfTodos.jsx"
function App() {
  return (
    <div className="App">
      <div className="App__header">
        <h1>My Todo Lists</h1>
      </div>
      <div className="todo__wrapper">
        <div className="input__wrapper">
          <InputField buttonClicked ={buttonClicked}></InputField>
        </div>
        <div className="lists__wrapper">
          <ListsOfTodo></ListsOfTodo>
        </div>
      </div>
    </div>
  );

  function buttonClicked(){
    console.log("clicked")
    let inputValue = document.getElementById("input").value
    console.log(inputValue)
  }
}

export default App;
