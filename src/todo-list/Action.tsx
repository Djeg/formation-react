import { TaskList, Todo, TodoListState } from './State'
import uniqid from 'uniqid'

/**
 * Supprime un todo de la liste des todo
 */
export function removeTodo(state: TodoListState, todo: Todo) {
  return (e: React.SyntheticEvent<HTMLElement>) => {
    e.stopPropagation()

    const newList: TaskList = state.taskList.filter(t => {
      if (t.id === todo.id) {
        return false
      }

      return true
    })

    state.setTaskList(newList)
  }
}

/**
 * Permet de valider ou non un todo dans la liste de todo
 */
export function toggleTodo(state: TodoListState, todo: Todo) {
  return () => {
    // On boucle sur toute la liste de todo graçe à un map.
    // On enregistre la nouvelle liste dans une variables :
    const newList: TaskList = state.taskList.map(t => {
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
    state.setTaskList(newList)
  }
}

/**
 * Ajouter une nouvelle tache à la liste des todos
 */
export function addTaskToList(state: TodoListState) {
  return () => {
    // Si je n'ai pas de tache (si « task » est vide)
    if (!state.task) {
      // On arrète la fonction ici !
      return
    }

    // Création d'un objet Todo à rajouter dans
    // la liste. Cet objet doit contenir la « task »
    // dans son label
    const todo: Todo = {
      id: uniqid(),
      done: false,
      label: state.task,
    }

    // Création d'une nouvelle liste avec tout les éléments
    // de la liste dèja existant plus notre todo au tout début
    // de la liste
    const newList: TaskList = [todo, ...state.taskList]

    // On met à jour notre liste, React vas donc ré-afficher nos
    // composants à l'écran
    state.setTaskList(newList)
  }
}

/**
 * Change la valeur de l'état « task »
 */
export function onTaskChange(state: TodoListState) {
  return (e: React.SyntheticEvent<HTMLInputElement>) =>
    state.setTask(e.currentTarget.value)
}
