import { createContext, ReactNode, useState } from 'react'

/**
 * Voici le type contenu dans la boite
 * EmailContext
 */
export type EmailContextType = [string, (email: string) => void]

/**
 * Création et export du context permettant
 * de stocker un email et sa fonction de modification
 */
export const EmailContext = createContext<EmailContextType>(['', () => null])

/**
 * Composant permettant d'initialiser l'état et de la mettre
 * dans la boite !
 */
export function EmailProvider({ children }: { children: ReactNode }) {
  // Création de l'état contenant l'email et la fonction
  // de modification
  const [email, setEmail] = useState('')

  // On retourne le provider du context avec notre état
  // à l'intérieur de la boite
  return (
    <EmailContext.Provider value={[email, setEmail]}>
      {children}
    </EmailContext.Provider>
  )
}
