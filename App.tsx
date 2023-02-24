import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster'
import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium_Italic,
} from '@expo-google-fonts/poppins'
import { NativeRouter, Routes, Route } from 'react-router-native'
import Home from './src/components/Home'
import { Screen } from './src/styles/Home.style'

export default function App() {
  // Chargement des polices d'écriture
  const [isLobsterLoaded] = useFonts({ Lobster_400Regular })
  const [isPoppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  if (!isLobsterLoaded || !isPoppinsLoaded) {
    return
  }

  return (
    <NativeRouter>
      <Screen>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Screen>
    </NativeRouter>
  )
}
