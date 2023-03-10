import { useStore } from '@nanostores/react'
import { Link } from 'react-router-dom'
import { TodoListStore } from '../stores/TodoListStore'
import { Title } from '../styles/Auth.style'

/**
 * Composant affichant la page d'accueil
 */
export default function Home() {
  const { todoLists } = useStore(TodoListStore)

  return (
    <>
      <Title>Mes Todos</Title>
      {todoLists.map((todoList, index) => (
        <Link to={`/todo-liste/${index}`} key={index}>
          {todoList.name}
        </Link>
      ))}

      <Link to="/nouvelle-liste">Nouvelle liste</Link>
    </>
  )
}
