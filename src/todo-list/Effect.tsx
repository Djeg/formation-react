import { TodoListState } from './State'
import { useEffect } from 'react'
import PubSub from 'pubsub-js'

/**
 * Écoute le topic "changeUsername" et met à jour
 * le username affiché sur la todo liste
 */
export function useChangeUsernameTopic(state: TodoListState) {
  useEffect(() => {
    const onUsernameChange = (topic: string, newUsername: string) =>
      state.setUsername(newUsername)

    PubSub.subscribe('changeUsername', onUsernameChange)

    return () => {
      PubSub.unsubscribe(onUsernameChange)
    }
  }, [])
}

/**
 * Cette effet vas chercher l'utilisateur enregistré dans
 * le locale storage uniquement lors de l'affichage initiale
 * du composant
 */
export function useLocalStorageUser(state: TodoListState) {
  useEffect(() => {
    const storeUser = localStorage.getItem('user')

    if (storeUser) {
      state.setUsername(JSON.parse(storeUser).displayName)
    }
  }, [])
}

/**
 * Contient les effets de la todo liste
 */
export function useTodoListEffect(state: TodoListState) {
  useLocalStorageUser(state)
  useChangeUsernameTopic(state)
}
