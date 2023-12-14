import React from 'react'

type Props = TodoProps & {
    updateTodo: (todo: ITodo) => void
    deleteTodo: (id: string) => void
    revertTodo: (todo: ITodo) => void
}

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo, revertTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : ''
  return (
    <div className='Card'>
      <div className='Card--text'>
        <h1 className={checkTodo}>{todo.name}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <div className='Card--button'>
        <button
          onClick={() => updateTodo(todo)}
          className={todo.status ? `hide-button` : 'Card--button__done'}
        >
          Complete
        </button>
        <button
          onClick={() => revertTodo(todo)}
          className={!todo.status ? `hide-button` : 'Card--button__done'}
        >
          Revert
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className='Card--button__delete'
        >
          Delete
        </button>
        
      </div>
    </div>
  )
}

export default Todo
