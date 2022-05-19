import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './shared/ui'
import TodoList from './todo-list/TodoList'

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
          <Route path="/" element={<TodoList />} />
          <Route path="/test" element={<h1>Test</h1>} />
          <Route path="/hello" element={<h1>Hello</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
