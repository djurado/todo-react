import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Crear los temas del taller de FP', completed: false},
  {text: 'Lavar los platos', completed: true},
  {text: 'Escribir el reto final de Pyweekend', completed: true},
  {text: 'Terminar el curso de React', completed: false},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const completed = todos.filter((todo) => !!todo.completed).length;
  const total = todos.length;
  const [searchValue, setSearchValue] = React.useState('');

  const searchedTodos = todos.filter((todo) => (
    todo.text.toLowerCase().includes(searchValue.toLowerCase())) );
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);

    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);

    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  return (
    <>
      <TodoCounter completed={completed} total={total}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}
export default App;
