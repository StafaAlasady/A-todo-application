import './App.css'
import TodoItem from './Components/TodoItem/TodoItem';

function App() {
  const heading = "Todo App";
  return <main className="App">
      <h1>{heading}</h1> {/**allt inom {} tolkas som vanilla JS */}
      <ul>
        <TodoItem text="Köp Kaffe" done={false}/>
        <TodoItem text="Brygg Kaffe" done={true}/>
        <TodoItem text="drick Kaffe" done={false}/>
        <TodoItem text="Köp kaka" done={false}/>
      </ul>
    </main>
  
}

export default App;
