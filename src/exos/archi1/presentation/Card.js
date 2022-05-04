import React from 'react'
import style from './Card.module.css'

export default function Card({ children }) {
  return <div className={style.Card}>{children}</div>
}
