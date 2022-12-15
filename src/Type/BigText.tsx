import { ReactNode } from 'react'

/**
 * Contient les props envoyé au composant BigText.
 * Noté que les children d'un composant on un type spécial :
 * le ReactNode provenant de React
 */
export type BigTextProps = {
  children: ReactNode
}
