import React from 'react'
import style from './Hello.module.css'

export default function Hello({ name }) {
  return <h1 className={style.hello}>Bonjour {name}</h1>
}
