// Importer la librairie styled component
import styled from 'styled-components'
import { Theme } from './Theme'

/**
 * Création d'un composant stylisé contenant l'intégralité de la page
 * et centrant son contenue verticalement
 */
export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  align-items: stretch;
  justify-content: center;
  background-color: ${Theme.colors.white};
`

/**
 * Titre de la page
 */
export const Title = styled.h1`
  text-align: center;
  font-family: ${Theme.fonts.display};
  font-size: 3.6rem;
  color: ${Theme.colors.black};
`

/**
 * Contenu d'un input
 */
export const InputContainer = styled.div`
  display: flex;
  margin: 0 1.4rem;
  padding: 0.6rem;
  border-bottom: 1px solid ${Theme.colors.black};
  align-items: center;
  margin-bottom: 1.3rem;
`

/**
 * L'input type text
 */
export const TextInput = styled.input`
  flex: 2;
  padding: 0.6rem;
  font-family: 'Poppins', sans-serif;
  color: ${Theme.colors.black};
  background-color: transparent;
  border: 0;
  outline: none;

  &:focus {
    outline: none;
  }
`

/**
 * Icone de l'input
 */
export const InputIcon = styled.i`
  font-size: 2rem;
  color: ${Theme.colors.green};
`

/**
 * Container pour le bouton d'envoie
 */
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

/**
 * Bouton d'envoie
 */
export const SendButton = styled.button`
  background-color: ${Theme.colors.green};
  color: ${Theme.colors.white};
  font-weight: bold;
  font-family: ${Theme.fonts.normal};
  border-radius: 5px;
  border: none;
  padding: 1rem 1.8rem;
`

/**
 * Contient le texte et le lien vers la page de connexion
 */
export const TextContainer = styled.p`
  text-align: center;
  font-family: ${Theme.fonts.normal};
  color: ${Theme.colors.blue};

  a {
    color: ${Theme.colors.blue};
    text-decoration: none;
    font-weight: bold;
  }
`
