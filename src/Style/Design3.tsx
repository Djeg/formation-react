import styled from 'styled-components'

/**
 * Contient le type des props du logo
 */
export type LogoProps = {
  size?: 'small' | 'medium' | 'large'
}

/**
 * Retourne la taille en pixel en fonction des props
 * du logo
 */
const guessSize = ({ size = 'medium' }: LogoProps) =>
  size === 'small' ? 40 : size === 'medium' ? 80 : 200

/**
 * Petit logo pouvant s'afficer un peu partout
 */
export const Logo = styled.div<LogoProps>`
  width: ${guessSize}px;
  height: ${guessSize}px;
  border-radius: 100%;
  background-color: cadetblue;
`
