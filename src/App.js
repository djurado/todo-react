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
  {text: 'Lavar los platos', completed: false},
  {text: 'Escribir el reto final de Pyweekend', completed: true},
  {text: 'Terminar el curso de React', completed: false},
];

function App() {
  return (
    <>
      <TodoCounter completed={3} total={4}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}
export default App;
