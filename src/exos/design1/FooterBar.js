import React from 'react'
import style from './FooterBar.module.css'

export default function FooterBar({ children }) {
  return <footer class={style.FooterBar}>{children}</footer>
}
