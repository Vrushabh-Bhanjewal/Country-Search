import React from 'react'
import country from "../Components/API/country.json"
import style from './about.module.css'
import AboutCard from '../Components/UI/AboutCard'

function About() {

  return (
    <main className={`container ${style[`about-main`]}`}>
      <div >
        <h1 className={style.head1}>Here Some Interesting Fact <br />We're Proud of</h1>
      </div>
      <div className={style[`about-card`]}>
        {
          country.map(curr=>{
            return <AboutCard key={curr.id} curr={curr}/>
          })
        }
      </div>
    </main>
  )
}

export default About