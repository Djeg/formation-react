import uniqid from 'uniqid'
import { action, map } from 'nanostores'

/**
 * Création d'un store qui contient l'état de la page d'accueil
 */
export const HomeStore = map({
  todos: [],
})

/**
 * Ajoute une chose à faire dans la liste
 */
export const addTodoList = action(
  HomeStore,
  'addTodoList',
  (store, title, user) => {
    // On créer une liste de chose à faire
    const todoList = {
      id: uniqid(),
      title: title,
      userId: user.id,
      username: user.email,
      todos: [],
    }

    // On ajoute la liste dans le tableaux plus haut
    store.setKey('todos', [todoList, ...store.get().todos])
  },
)
