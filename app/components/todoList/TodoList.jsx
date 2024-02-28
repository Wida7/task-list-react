import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, handleDeleteTodo, handleUpdateTodo, handleCompleteTodo,}) {
  return (
    <ul className='list-disc w-5/6'>
        {todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                handleDeleteTodo={handleDeleteTodo}
                handleUpdateTodo={handleUpdateTodo}
                handleCompleteTodo={handleCompleteTodo} 
            />
        ) )}
    </ul>
  )
}
