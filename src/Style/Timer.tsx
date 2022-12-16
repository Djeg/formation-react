import styled from 'styled-components'
import { CalculatorContainer, theme } from './Calculator'

/**
 * Container du timer
 */
export const TimerContainer = styled(CalculatorContainer)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    cursor: pointer;
    padding: ${theme.sizes.n};
    border: 1px solid ${theme.colors.softDark};
    background: transparent;
    color: ${theme.colors.white};
    font-weight: bold;
    font-size: ${theme.sizes.l};
  }

  p {
    flex-grow: 2;
    text-align: center;
    color: ${theme.colors.white};
    font-weight: bold;
    font-size: ${theme.sizes.xl};
  }
`
