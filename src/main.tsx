import ReactDOM from 'react-dom/client'
import App from './demo-state-management3/components/App'

// On séléctionne la balise HTML qui contiendra notre
// application react
const root = document.querySelector('#root') as HTMLElement

// On affiche l'application
ReactDOM.createRoot(root).render(<App />)
