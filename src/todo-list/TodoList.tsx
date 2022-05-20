import PubSub from 'pubsub-js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import uniqid from 'uniqid'
import BottomNav from '../shared/BottomNav'
import * as UI from '../shared/ui'

/**
 * Définie la forme d'un objet Todo
 */
export type Todo = {
  id: string
  label: string
  done: boolean
}

/**
 * Définie ce qu'est une « task »
 */
export type Task = string

/**
 * Définie ce qu'est une list de « task »
 */
export type TaskList = Array<Todo>

/**
 * Ce fichier contient le composant de l'écran
 * de la liste des todos
 *
 * Exercices:
 *
 * 1. Afficher le contenu de l'état (state) « taskList »
 *    dans le JSX du composant en utilisant la méthode « map »
 *    dans les enfant du composant « UI.TodoListContainer »
 *
 *     ° Bonus : Afficher « Il n'y pas encore de taches » si la liste est vide
 *
 * 2. Lors du clique (onClick) sur le bouton + (« UI.InputIcon »),
 *    lancer une fonction "addTaskToList" qui :
 *    1. Ajoute l'état « task » à l'intérieur de notre tableaux « taskList »
 *    2. Vider l'état « task » (le rendre égale à une chaine de caractère vide)
 *
 * ============================
 *
 * Exercice 2 :
 *
 * 1. Ajouter un fonction « toggleTodo » qui le lance lors du click (onClick)
 *    du composant « UI.Todo ».
 *    Dans cette fonction qui reçoi un Todo, faire en sorte de modifier
 *    la propriété « done » du todo et mettre à jour la liste (faire
 *    un « map » sur la « taskList »)
 *
 * 2. Ajouter une fonction « removeTodo » qui ce lance lors du click (onClick)
 *    du composant « UI.TodoIcon » .
 *    Dans cette fonction qui reçoi un Todo, faire en sorte de supprimer
 *    le todo et mettre à jour la liste (faire
 *    un « filter » sur la « taskList »)
 */
export default function TodoList() {
  const [username, setUsername] = useState<string>('')
  const [task, setTask] = useState<Task>('')
  const [taskList, setTaskList] = useState<TaskList>([])

  useEffect(() => {
    const storeUser = localStorage.getItem('user')

    if (storeUser) {
      setUsername(JSON.parse(storeUser).displayName)
    }
  }, [])

  useEffect(() => {
    console.log('Souscription au topic "changeUsername"')

    const onUsernameChange = (topic: string, newUsername: string) => {
      console.log('récéption du username : ' + newUsername)
      setUsername(newUsername)
    }

    PubSub.subscribe('changeUsername', onUsernameChange)
  }, [])

  // onTaskChange :: (React.SyntheticEvent) -> void
  const onTaskChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setTask(event.currentTarget.value)
  }

  // addTaskToList :: () -> void
  const addTaskToList = () => {
    // Si je n'ai pas de tache (si « task » est vide)
    if (!task) {
      // On arrète la fonction ici !
      return
    }

    // Création d'un objet Todo à rajouter dans
    // la liste. Cet objet doit contenir la « task »
    // dans son label
    const todo: Todo = {
      id: uniqid(),
      done: false,
      label: task,
    }

    // Création d'une nouvelle liste avec tout les éléments
    // de la liste dèja existant plus notre todo au tout début
    // de la liste
    const newList: TaskList = [todo, ...taskList]

    // On met à jour notre liste, React vas donc ré-afficher nos
    // composants à l'écran
    setTaskList(newList)
  }

  // toggleTodo :: Todo -> React.SyntheticEvent -> Void
  // onClick :: React.SyntheticEvent -> Void
  // Optim 1
  // function toggleTodo(todo: Todo) {
  //   return function () {
  //     console.log('click !!!!')
  //   }
  // }

  // Optim 2
  // const toggleTodo = (todo: Todo) => {
  //   return () => {
  //     console.log('click !!!!')
  //   }
  // }

  // Optim 3
  const toggleTodo = (todo: Todo) => () => {
    // On boucle sur toute la liste de todo graçe à un map.
    // On enregistre la nouvelle liste dans une variables :
    const newList: TaskList = taskList.map(t => {
      // Ici t contiendra successivement tout les todos
      // de ma liste

      // Si l'id du todo sur lequel on boucle est différent
      // du todo que l'on « toggle »
      if (t.id === todo.id) {
        // On retourne le todo tel quel
        return {
          ...t,
          done: !t.done,
        }
      } else {
        return t
      }
    })

    // Mise à jour de l'état
    setTaskList(newList)
  }

  const removeTodo = (todo: Todo) => (e: React.SyntheticEvent<HTMLElement>) => {
    e.stopPropagation()

    const newList: TaskList = taskList.filter(t => {
      if (t.id === todo.id) {
        return false
      }

      return true
    })

    setTaskList(newList)
  }

  return (
    <UI.AppContainer>
      <UI.TopNav>
        <Link to="/">
          <UI.TopNavIcon className="fa-solid fa-circle-chevron-left"></UI.TopNavIcon>
        </Link>
        <UI.TopNavTitle>Petites Courses</UI.TopNavTitle>
      </UI.TopNav>

      <UI.CenteredFlexContainer>
        <UI.Tag>
          <UI.TagIcon className="fa-solid fa-user"></UI.TagIcon>
          <UI.TagLabelContainer>
            <UI.TagLabelEntitled>Par</UI.TagLabelEntitled>
            <UI.TagLabel>{username}</UI.TagLabel>
          </UI.TagLabelContainer>
        </UI.Tag>
      </UI.CenteredFlexContainer>

      <UI.StretchFlexContainer>
        <UI.InputContainer>
          <UI.Input placeholder="votre todo ..." onChange={onTaskChange} />
          <UI.InputIcon
            className="fa-solid fa-circle-plus"
            onClick={addTaskToList}
          />
        </UI.InputContainer>
      </UI.StretchFlexContainer>

      <UI.TodoListContainer>
        {taskList.length > 0 ? (
          taskList.map(todo => (
            <UI.Todo
              key={`todo-${todo.id}`}
              done={todo.done}
              onClick={toggleTodo(todo)}
            >
              <UI.TodoLabel>{todo.label}</UI.TodoLabel>
              <UI.TodoIcon
                className="fa-solid fa-trash"
                onClick={removeTodo(todo)}
              ></UI.TodoIcon>
            </UI.Todo>
          ))
        ) : (
          <p>Vous n'avez pas encore de taches</p>
        )}
      </UI.TodoListContainer>
      <BottomNav
        topBar={
          <UI.BottomNavAction>
            <UI.BottomNavShare>
              <i className="fa-solid fa-share"></i>
            </UI.BottomNavShare>
            <UI.BottomNavDelete>
              <i className="fa-solid fa-trash"></i>
            </UI.BottomNavDelete>
          </UI.BottomNavAction>
        }
      />
    </UI.AppContainer>
  )
}
