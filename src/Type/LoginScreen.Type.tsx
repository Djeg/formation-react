/**
 * @module LoginScreen.Type
 * @description
 *  Contient les types pour le composant de connexion
 */

/**
 * Représente un utilisateur
 */
export type User = {
  id: string
  email: string
  username: string
}

/**
 * Représente l'état du composant de connexion
 */
export type LoginScreenState = {
  loading: boolean
  user?: User
  email: string
  password: string
}
