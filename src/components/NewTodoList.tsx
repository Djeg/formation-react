import { useStore } from '@nanostores/react'
import { Link } from 'react-router-dom'
import {
  changeNewTodoListName,
  createTodoList,
  TodoListStore,
} from '../stores/TodoListStore'
import { InputGroup, Title } from '../styles/Auth.style'

/**
 * Composant permettant de créer une nouvelle todo list
 */
export default function NewTodoList() {
  const { newTodoListName } = useStore(TodoListStore)

  return (
    <>
      <Title>Nouvelle liste</Title>
      <InputGroup>
        <input
          type="text"
          placeholder="nom de la liste"
          value={newTodoListName}
          onChange={changeNewTodoListName}
        />
      </InputGroup>
      <Link to="/" onClick={createTodoList}>
        Créer la liste
      </Link>
      <Link to="/">Retour</Link>
    </>
  )
}
