import React, { useEffect, useState, useTransition } from 'react'
import { getCountry } from '../Components/API/CountryAPI'
import Loader from '../Components/UI/Loader';
import CountryCard from '../Components/UI/CountryCard';
import style from '../Components/UI/country.module.css'
function Country() {
  const [country,setCountry] =useState([])
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async ()=>{
      try{
        const res = await getCountry()
        setCountry(res.data)
        // console.log(res)
      }catch(error){
        console.log(error)
      }
    })
  },[])
  // console.log(country)

  if (isPending) { return <Loader/> }
  else{
  return (
    <section className={`${style['country-sec']} container`}> 
      <div className={style['country-header']}>
        <h1>Country Search</h1>
      </div>
      <ul className={style['grid-four']}>
        {
          country.map((curr,index)=>{
            return <CountryCard key={index} curr={curr}/>
          })
        }
      </ul>
    </section>
  )
 }
}

export default Country