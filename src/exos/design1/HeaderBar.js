import React from 'react'
import style from './HeaderBar.module.css'

export default function HeaderBar({ children }) {
  return <header className={style.HeaderBar}>{children}</header>
}
