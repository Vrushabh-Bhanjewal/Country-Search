import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import style from './home.module.css'

function HeroSection() {
  return (
    <main className={`container ${style.hero}`}>
        <div className={style[`hero-content`]}>
          <h1 className={style.head1}>Explore the World One Country at a Time.</h1>
          <p className={style.para1}>Discover the history,culture and beauty of every nation. 
            Sort, Search and filter through countries to find more details</p>
          <button className={style.explore}><NavLink to="/Country">Explore More </NavLink><GoArrowRight /></button>
        </div>
        <figure className={style.earth}>
          <img src="/Earth2.png" alt="Earth" />
        </figure>
      </main>
  )
}

export default HeroSection