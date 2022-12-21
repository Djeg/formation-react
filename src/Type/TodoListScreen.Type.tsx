/**
 * @module TodoListScreen.Type.tsx
 * @description
 *  Contient les types de l'écran de liste de chose à faire
 */

/**
 * Type définissant les props à envoyé un TodoItem
 */
export type TodoItemProps = {
  done?: boolean
}

/**
 * Voici la forme d'un todo
 */
export type Todo = {
  id: string
  label: string
  done: boolean
}

/**
 * Définie l'état d'une liste de chose à faire dans l'application.
 */
export type TodoListScreenState = {
  id: string
  label: string
  newTodo: string
  todos: Todo[]
}

/**
 * Définie les props envoyé au composant ContentContainer.
 * Ce dernier peut être après un header (header: false) ou
 * sans aucun header pour la page d'accueil (header: true).
 */
export type ContentContainerProps = {
  header?: boolean
}
