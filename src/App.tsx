import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './shared/ui'
import TodoList from './todo-list/TodoList'
import Login from './login/Login'
import Subscription from './subscription/Subscription'
import Home from './home/Home'

/**
 * Ce fichier contient le composant principal
 * qui lui même contient toute l'application.
 */
export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liste/:id" element={<TodoList />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Subscription />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
