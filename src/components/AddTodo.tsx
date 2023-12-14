import React, { useState } from 'react'

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()

  const handleForm = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={ (e) => saveTodo(e, formData) }>
      <div>
        <div>
          <label htmlFor='name'>NAME</label>
          <textarea onChange={ handleForm } id='name' />
        </div>
        <div>
          <label htmlFor='description'>DESCRIPTION</label>
          <textarea onChange={ handleForm } id='description' />
        </div>
      </div>
      <button disabled={ formData === undefined ? true : false } >Add Todo</button>
    </form>
  )
}

export default AddTodo
