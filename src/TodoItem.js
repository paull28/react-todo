import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, completeTodo, removeTodo }) {
    return (
      <div className={todo.isComplete ? 'TodoItem complete' : 'TodoItem'} >
        <div className="TodoContent" style={{cursor: 'pointer'}} onClick={() => completeTodo(todo.id)}>
            <span>
                {todo.text}
            </span>
        </div>
        <button 
          className="delete" 
          onClick={(e) => {
            e.stopPropagation(); // Prevent event bubbling to TodoItem div
            removeTodo(todo.id);
          }}
        >
          x
        </button>
      </div>
    );
  }

export default TodoItem;