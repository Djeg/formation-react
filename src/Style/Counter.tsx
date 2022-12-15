import styled from 'styled-components'

/**
 * En tête du compteur
 */
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  background-color: #1a1a1a;
  color: #e6e6e6;
`

/**
 * Titre du header
 */
export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #e6e6e6;
`

/**
 * Container de mon compteur
 */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  justify-content: center;
  align-items: center;
`

/**
 * Container pour le compteur
 */
export const CounterContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 5px;
  background-color: #e6e6e6;
  align-items: center;

  div {
    padding: 0.8rem;
  }

  button {
    border: none;
    background-color: #1a1a1a;
    color: #e6e6e6;
    padding: 0.8rem;
    font-size: 2rem;
    border-radius: 5px;
  }

  .amount {
    font-size: 3rem;
  }
`
