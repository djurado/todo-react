import './App.css';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

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
    <AppUI 
      completed = {completed}
      total = {total}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue } 
      completeTodo = {completeTodo } 
      deleteTodo = {deleteTodo } 
      searchedTodos = {searchedTodos}
    />
  );
}
export default App;
