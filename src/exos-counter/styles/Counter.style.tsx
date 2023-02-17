import styled from 'styled-components'
import { AppTheme } from './App.style'

/**
 * Ligne contenant un petit compteur
 */
export const Line = styled.div`
  display: flex;
  align-items: center;
  margin: 0.6rem;
`

/**
 * Style d'un bouton
 */
export const Button = styled.button`
  border: none;
  font-size: 1.2rem;
  outline: none;
  background-color: ${AppTheme.colors.green};
  padding: 0.6rem;
`

/**
 * Style d'un label
 */
export const Label = styled.p`
  font-weight: bold;
  margin: 0rem 1rem;
`
