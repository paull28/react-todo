import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000), // Generate a random id for the task
      text: input,
      isComplete: false,
    });

    setInput(''); // Clear the input field after adding
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="FormText"
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={handleChange}
        required
      />
      <button className="Submit" type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
