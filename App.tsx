import { NativeRouter, Routes, Route } from 'react-router-native'

/**
 * Voici le composant principal de l'application c'est celui
 * qui contient tout les écran de l'application.
 *
 * Vous retrouverez ici les différentes routes de l'application !
 */
export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
      </Routes>
    </NativeRouter>
  )
}
