import { action, map } from 'nanostores'
import { HomeScreenState } from '../Type/HomeScreen.Type'

/**
 * @module HomeScreen.Store
 * @description
 *  Ce module contient l'état de la page d'accueil
 */

/**
 * Contient le store contenant l'état de la page d'accueil
 */
export const HomeScreenStore = map<HomeScreenState>({
  lists: [
    {
      id: '1',
      label: 'Petites courses',
      user: 'John',
      todos: [
        { id: '1', label: 'Acheter du chocolat', done: false },
        { id: '2', label: 'Acheter du chocolat', done: true },
        { id: '3', label: 'Acheter du chocolat', done: false },
        { id: '4', label: 'Acheter du chocolat', done: true },
      ],
    },
  ],
})
