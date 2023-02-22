import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Subscribe from './Subscribe'

/**
 * Main component displaying the entire super todo
 * app. You'll find there the routes and screens of
 * the application
 */
export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/inscription" element={<Subscribe />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}
