import { Link } from 'react-router-dom'
import styled from 'styled-components'

/**
 * Container du menu
 */
export const MenuContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  background-color: #2b2b2b;
`

/**
 * Lien du menu
 */
export const MenuLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  cursor: pointer;
  margin: 0.2rem;
  color: #e2e2e2;
  font-weight: bold;
  text-decoration: none;
`
