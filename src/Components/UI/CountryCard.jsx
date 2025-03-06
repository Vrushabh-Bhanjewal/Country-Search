import React from 'react'
import style from './country.module.css'
import { GoArrowRight } from "react-icons/go";
import {NavLink} from 'react-router-dom'
function CountryCard({curr}) {
    // console.log(curr)
    const {name,capital,currencies,flags,population,region }=curr
  return (
    <li className={style.cardBox}>
        <figure className={style.img}>
          <img src={flags.png} alt={flags.alt} />
        </figure>
        <div className={style['card-content']}>
          <h1>{name.common.length >10 ? name.common.slice(0,10)+"..." :name.common }</h1>
          <p><span className={style.key}>Region: </span> {region}</p>
          <p><span className={style.key}>Capital: </span>{capital}</p>
          <p><span className={style.key}>Population: </span> {population}</p>
          <NavLink to={`/Country/${name.common}`}><button className={style.read}>Read More <GoArrowRight /></button></NavLink>
        </div>
    </li>
  )
}
export default CountryCard