import { StrictMode } from 'react'
import BigText from './BigText'
import Eleve from './Eleve'

/**
 * Composant principal de l'application
 */
export default function App() {
  return (
    // On active le strict mode pour pouvoir debugger
    // notre application react
    <StrictMode>
      {/* On affiche un gros text */}
      <BigText>Fiche élève</BigText>

      {/* On affiche un élève */}
      <Eleve
        eleve={{
          nom: 'Dupont',
          prenom: 'Jean',
          age: 20,
          notes: [12, 10, 8, 7],
        }}
      />
    </StrictMode>
  )
}
