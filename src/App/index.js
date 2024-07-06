import logo from '../platzi.webp';
import './App.css';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   {text: 'Crear los temas del taller de FP', completed: false},
//   {text: 'Lavar los platos', completed: true},
//   {text: 'Escribir el reto final de Pyweekend', completed: true},
//   {text: 'Terminar el curso de React', completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');



function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const completed = todos.filter((todo) => !!todo.completed).length;
  const total = todos.length;
  const [searchValue, setSearchValue] = React.useState('');

  const searchedTodos = todos.filter((todo) => (
    todo.text.toLowerCase().includes(searchValue.toLowerCase())) );
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    
    
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
