import React from 'react'
import style from './Content.module.css'

export default function Content({ children }) {
  return <main className={style.Content}>{children}</main>
}
