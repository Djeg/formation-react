import { Todo } from './TodoListScreen.Type'

/**
 * @module HomeScreen.Type
 * @description
 *  Ce module contient les styles de l'écran d'accueil de l'application
 */

/**
 * Définie la forme d'une liste de choses à faire
 */
export type TodoList = {
  id: string
  label: string
  todos: Todo[]
}

/**
 * Contient l'état du composant de la page d'accueil
 */
export type HomeScreenState = {
  lists: TodoList[]
}
