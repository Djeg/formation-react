import {
  useFonts as useLobster,
  Lobster_400Regular,
} from '@expo-google-fonts/lobster'
import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { NativeRouter, Routes, Route } from 'react-router-native'
import styled from 'styled-components/native'
import HomeScreen from './src/Component/HomeScreen'
import TodoListScreen from './src/Component/TodoListScreen'
import { MainContainer } from './src/Style/App.Style'

/**
 * Voici le composant principal de l'application c'est celui
 * qui contient tout les écran de l'application.
 *
 * Vous retrouverez ici les différentes routes de l'application !
 */
export default function App() {
  const [isLobsterReady] = useLobster({
    Lobster_400Regular,
  })
  const [isPoppinsReady] = usePoppins({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  if (!isLobsterReady || !isPoppinsReady) {
    return
  }

  return (
    <NativeRouter>
      <MainContainer>
        <Routes>
          {/* Affiche la page d'accueil */}
          <Route path="/" element={<HomeScreen />} />
          {/* Affiche l'écran de chose à faire */}
          <Route path="/todos/:id" element={<TodoListScreen />} />
        </Routes>
      </MainContainer>
    </NativeRouter>
  )
}

export const MenuItem = styled.Text`
  margin-top: 100px;
  text-align: center;
`
