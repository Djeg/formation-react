import {
  useFonts as useLobster,
  Lobster_400Regular,
} from '@expo-google-fonts/lobster'
import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { View, Text } from 'react-native'
import { NativeRouter, Routes, Route, Link } from 'react-router-native'
import styled from 'styled-components/native'
import TodoListScreen from './src/Component/TodoListScreen'
import { MainContainer } from './src/Style/App.Style'

/**
 * Voici le composant principal de l'application c'est celui
 * qui contient tout les écran de l'application.
 *
 * Vous retrouverez ici les différentes routes de l'application !
 */
export default function App() {
  useLobster({
    Lobster_400Regular,
  })
  usePoppins({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  return (
    <NativeRouter>
      <MainContainer>
        <Routes>
          {/* Voici un petit composant provisoire pour la navigation */}
          <Route
            path="/"
            element={
              <View>
                <Text>
                  <Link to="/todos/2">
                    <MenuItem>Test ?</MenuItem>
                  </Link>
                </Text>
              </View>
            }
          />
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
