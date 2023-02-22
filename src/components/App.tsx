import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'

/**
 * Main component displaying the entire super todo
 * app. You'll find there the routes and screens of
 * the application
 */
export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <h1>Super Todo</h1>
      </BrowserRouter>
    </StrictMode>
  )
}
