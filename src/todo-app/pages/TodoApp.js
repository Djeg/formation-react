import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AddTodoButton,
  InputText,
  Todo,
  TodoInput,
  TodoLabel,
  RemoveTodoButton,
} from '../styled'
import { db } from '../firebase'

export default function TodoApp() {
  const [loading, setLoading] = useState(true)
  const [newLabel, setNewLabel] = useState('')
  const [todoList, setTodoList] = useState([])
  const [todoListId, setTodoListId] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTodos = async () => {
      // Récupération de l'utilisateur connécté
      const user = JSON.parse(window.localStorage.getItem('user'))

      if (!user) {
        navigate('/connexion')

        return
      }

      // 1. Véifier si l'utilisateur à dèja une todo list
      //   -> Si oui, alors on récupére les todos de cette list
      //   -> Si non, alors on créé une nouvelle todo list
      const q = query(collection(db, 'todo-list'), where('user', '==', user.id))

      const snapshot = await getDocs(q)
      const [data] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))

      if (!data) {
        const result = await addDoc(collection(db, 'todo-list'), {
          user: user.id,
          todos: [],
        })

        setTodoListId(result.id)
        setLoading(false)

        return
      }

      setTodoListId(data.id)
      setTodoList(data?.todos || [])
      setLoading(false)
    }

    fetchTodos()
  }, [])

  useEffect(() => {
    if (!todoListId) {
      return
    }

    const updateTodo = async () => {
      await updateDoc(doc(db, 'todo-list', todoListId), {
        todos: todoList,
      })
    }

    updateTodo()
  }, [todoList])

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

  if (loading) {
    return <p>Chargement des todos ...</p>
  }

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
