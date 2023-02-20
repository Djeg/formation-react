import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BottomBar,
  BurgerButton,
  MenuContainer,
  MenuHeader,
  MenuItem,
} from '../styles/Menu.styles'

/**
 * Composant affichant le menu, il vient avec 2 versions :
 * - Une version fermé
 * - Une version ouvert
 */
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  if (!isOpen) {
    return (
      <BottomBar>
        <BurgerButton onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </BurgerButton>
      </BottomBar>
    )
  }

  return (
    <MenuContainer>
      <MenuHeader>
        <i onClick={toggleMenu} className="fa-regular fa-circle-xmark"></i>
        <p>Menu</p>
      </MenuHeader>
      <MenuItem>
        <Link to="/" onClick={toggleMenu}>
          Accueil
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/about" onClick={toggleMenu}>
          À Propos
        </Link>
      </MenuItem>
    </MenuContainer>
  )
}
