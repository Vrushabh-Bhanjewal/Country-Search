import React from 'react'
import style from './loader.module.css'

function Loader() {
  return (
    <div className={style.center}>
        <div className={style.loader}></div>
    </div>
  )
}

export default Loader