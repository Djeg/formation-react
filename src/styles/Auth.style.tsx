import styled from 'styled-components'
import { Theme } from './App.style'

/**
 * Écran centrant verticalement et horizontalement son contenue
 */
export const AllCenteredScreen = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

/**
 * Titre de la page de connexion et d'inscription
 */
export const Title = styled.h1`
  font-family: 'Lobster', sans-serif;
  font-size: 2.4rem;
  text-align: center;
`

/**
 * Contient un input ainsi que son icone
 */
export const InputGroup = styled.div`
  display: flex;
  align-self: stretch;
  margin: 0.8rem 2rem;
  padding: 0.4rem 0.2rem;
  border-bottom: 1px solid ${Theme.colors.softBlack};
  align-items: center;
  justify-content: space-between;

  input {
    color: ${Theme.colors.softBlack};
    padding: 0.2rem;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    background-color: transparent;
    border: 0;
    flex-grow: 2;
    outline: none;
    min-width: 0;
  }

  i {
    display: flex;
    font-size: 1.8rem;
    padding: 0.2rem;
  }
  i.fa-circle-check {
    color: ${Theme.colors.green};
  }
  i.fa-circle-xmark {
    color: ${Theme.colors.red};
  }
`

/**
 * Bouton vert
 */
export const GreenButton = styled.button`
  border: 0;
  background-color: ${Theme.colors.green};
  font-size: 1rem;
  font-weight: bold;
  color: ${Theme.colors.coldWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.4rem;
  margin-bottom: 0.8rem;
  border-radius: 5px;
`

/**
 * Text centré
 */
export const CenteredText = styled.p`
  text-align: center;
`
