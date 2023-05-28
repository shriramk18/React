
import './App.css';
import AddTodo from './components/AddTodo';
import { TodoList } from './components/ToDoList';
import CompleteItem from './components/CompleteItem';

function App() {
  return (
    <div className="App">
      <h1>Add ToDo REDUX</h1>
      <AddTodo />
      <TodoList />
      <CompleteItem />
    </div>
  );
}

export default App;