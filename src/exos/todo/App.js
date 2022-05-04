import React from 'react'
import {
  AddTodoButton,
  InputText,
  RemoveTodoButton,
  Todo,
  TodoInput,
  TodoLabel,
} from './styled'

export default function App() {
  return (
    <>
      <TodoInput>
        <InputText />
        <AddTodoButton>
          <i className="fa-solid fa-circle-plus"></i>
        </AddTodoButton>
      </TodoInput>

      <Todo>
        <TodoLabel>Faire les courses</TodoLabel>
        <RemoveTodoButton>
          <i class="fa-solid fa-trash"></i>
        </RemoveTodoButton>
      </Todo>

      <Todo done={true}>
        <TodoLabel>Faire les courses</TodoLabel>
        <RemoveTodoButton>
          <i class="fa-solid fa-trash"></i>
        </RemoveTodoButton>
      </Todo>

      <Todo>
        <TodoLabel>Faire les courses</TodoLabel>
        <RemoveTodoButton>
          <i class="fa-solid fa-trash"></i>
        </RemoveTodoButton>
      </Todo>
    </>
  )
}
