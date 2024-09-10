import './App.css';
import React, { useState } from 'react';
import TodoItem from './TodoItem.js';
import TodoForm from './TodoForm.js';

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (todo) => {
    // Prevent adding empty todos
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  // Function to remove a todo
  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Function to mark a todo as complete
  const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <div className='TodoList'>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id}
          todo={todo} 
          completeTodo={completeTodo} 
          removeTodo={removeTodo}
        />
      ))}
      </div>
      <a href="https://github.com/paull28" target='_blank'><code>github</code></a>
    </div>
  );
}

export default App;
