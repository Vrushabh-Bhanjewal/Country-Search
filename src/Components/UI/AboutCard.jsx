import React from 'react'
import style from '../../Pages/about.module.css'

function AboutCard({curr}) {
    const {name,population,gdp,capital,interesting_fact}=curr

    return (
    <div className={style.card1}>
        <h1>{name}</h1>
        <p><span className={style.key}>Capital : </span> {capital}</p>  
        <p><span className={style.key}>GDP : </span>{gdp}</p> 
        <p><span className={style.key}>Population : </span>{population}</p>  
        <p><span className={style.key}>Fact : </span>{interesting_fact}</p>   
    </div>
  )
}

export default AboutCard