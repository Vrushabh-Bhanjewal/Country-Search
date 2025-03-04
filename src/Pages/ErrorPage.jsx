import React from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router-dom'
import style from './error.module.css'

function ErrorPage() {
    const error= useRouteError()
    const nav=useNavigate()
    // console.log(error)
    const handleBack=()=>{
        nav(-1)
    }
  return (
    <div className={`center ${style.errDiv}`}>
        <figure className={style.img}>
            <img src="/Error.png"width="400px" alt="error" />
        </figure>
        <div className={style.content}>
            <h1>Error { error.status  }</h1>
            <p>{error.data}</p>
        </div>
        <div className={style.links}>
            <NavLink to="/"><button>Go Home</button></NavLink> 
            <button onClick={handleBack}>Go Back</button>
        </div>
    </div>
  )
}

export default ErrorPage