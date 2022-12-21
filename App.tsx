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
import HomeScreen from './src/Component/HomeScreen'
import LogginScreen from './src/Component/LoginScreen'
import Menu from './src/Component/Menu'
import NewListScreen from './src/Component/NewListScreen'
import SubscriptionScreen from './src/Component/SubscriptionScreen'
import TodoListScreen from './src/Component/TodoListScreen'
import { MainContainer } from './src/Style/App.Style'

/**
 * Voici le composant principal de l'application c'est celui
 * qui contient tout les écran de l'application.
 *
 * Vous retrouverez ici les différentes routes de l'application !
 */
export default function App() {
  // Chargement de la police d'écriture "Lobster"
  const [isLobsterReady] = useLobster({
    Lobster_400Regular,
  })

  // Chargement de la police d'écriture "Poppins"
  const [isPoppinsReady] = usePoppins({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  // On attend que le chargement des polices soit efféctué
  if (!isLobsterReady || !isPoppinsReady) {
    return
  }

  return (
    <NativeRouter>
      <MainContainer>
        <Routes>
          {/* On commence par afficher le formulaire de connexion */}
          <Route path="/" element={<LogginScreen></LogginScreen>}>
            {/* Affiche la page d'accueil */}
            <Route path="" element={<HomeScreen />} />
            {/* Affiche la page de création d'une nouvelle liste */}
            <Route path="new" element={<NewListScreen />} />
            {/* Affiche l'écran de chose à faire */}
            <Route path="todos" element={<TodoListScreen />} />
            {/* Affichage du menu */}
            <Route path="menu" element={<Menu />} />
          </Route>

          {/* Affiche la page d'inscription */}
          <Route path="/inscription" element={<SubscriptionScreen />} />
        </Routes>
      </MainContainer>
    </NativeRouter>
  )
}
