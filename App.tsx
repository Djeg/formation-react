import { StatusBar } from 'expo-status-bar'
import TodoListScreen from './src/Component/TodoListScreen'

export default function App() {
  return (
    <>
      <TodoListScreen />
      <StatusBar style="auto" />
    </>
  )
}
