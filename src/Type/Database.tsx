/** * Ceci est un type générique, c'est typescript avancée, c'est une
 * technique très puissante :
 *
 * https://www.typescriptlang.org/docs/handbook/2/generics.html
 */
export type Identifiable<T extends {}> = T & { id: string }

/**
 * Défini un address
 */
export type Address = {
  country: string
  city: string
  street: string
  postCode: string
}
