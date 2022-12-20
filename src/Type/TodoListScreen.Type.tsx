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
  newTodo: string
  todos: Todo[]
}
