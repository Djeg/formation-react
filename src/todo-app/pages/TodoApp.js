import React, { useState, useEffect } from 'react'
import {
  AddTodoButton,
  InputText,
  Todo,
  TodoInput,
  TodoLabel,
  RemoveTodoButton,
} from '../styled'

export default function TodoApp() {
  const [newLabel, setNewLabel] = useState('')
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    // Récupération de l'utilisateur connécté
    const user = JSON.parse(window.localStorage.getItem('user'))

    console.log(user)
  }, [])

  const changeNewLabel = ev => setNewLabel(ev.target.value)
  const addNewTodo = () => {
    setTodoList([{ label: newLabel, done: false }, ...todoList])

    setNewLabel('')
  }
  const toggleTodo = index => {
    setTodoList(
      todoList.map((todo, i) => {
        if (i === index) {
          return { ...todo, done: !todo.done }
        }

        return todo
      }),
    )
  }
  const removeTodo = index =>
    setTodoList(todoList.filter((todo, i) => i !== index))

  return (
    <>
      <TodoInput>
        <InputText value={newLabel} onChange={changeNewLabel} />
        <AddTodoButton onClick={addNewTodo}>
          <i className="fa-solid fa-circle-plus"></i>
        </AddTodoButton>
      </TodoInput>

      {todoList.map((todo, index) => (
        <Todo done={todo.done} key={`todo-${index}`}>
          <TodoLabel onClick={() => toggleTodo(index)}>{todo.label}</TodoLabel>
          <RemoveTodoButton onClick={() => removeTodo(index)}>
            <i className="fa-solid fa-trash"></i>
          </RemoveTodoButton>
        </Todo>
      ))}
    </>
  )
}
