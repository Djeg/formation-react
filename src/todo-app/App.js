import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoApp from './pages/TodoApp'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  )
}
