import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from '../styles/App.style'
import Connection from './Connection'
import Home from './Home'
import NewTodoList from './NewTodoList'
import Subscription from './Subscription'
import TodoList from './TodoList'

/**
 * Composant principal de l'application
 */
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Connection />}>
          <Route path="" element={<Home />} />
          <Route path="nouvelle-liste" element={<NewTodoList />} />
          <Route path="todo-liste/:index" element={<TodoList />} />
        </Route>
        <Route path="/inscription" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  )
}
