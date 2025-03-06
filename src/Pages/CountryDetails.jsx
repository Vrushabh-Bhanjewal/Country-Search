import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import { getIndCountry } from '../Components/API/CountryAPI'
import Loader from '../Components/UI/Loader'
import style from './countryDetail.module.css'
import { GoArrowLeft } from 'react-icons/go'
import {NavLink } from 'react-router-dom'
function CountryDetails() {
    const nameid=useParams()
    const [country,setCountry] = useState()
    const [isPending,setTransition] =useTransition()

    const indData= ()=>{
        setTransition(async()=>{
            try{
                const res=await getIndCountry(nameid.id)
                // console.log(res.data[0])
                if(res.status==200){
                    setCountry(res.data[0])
                }
            }catch(error){
                console.log(error)
            }
        })
    }

    useEffect( ()=>{
        indData() 
    },[])

    if(isPending){return <Loader/> }

  return (
    <div className='container'>
        {country && (
            <div>
                <NavLink to="/Country">
                    <button className={style.back}>
                        <GoArrowLeft />
                    </button>
                </NavLink>
                <div className={style['flex-two']}>
                    <figure className={style.img}>
                        <img src={country.flags.png} alt={country.flags.alt} />
                    </figure>
                    <div className={style.content}>
                        <h1>{country.name.official}
                        </h1>
                        <p><span className={style.key}>Native Name: </span>
                        {Object.keys(country.name.nativeName)
                        .map((curr=>country.name.nativeName[curr].official
                            )).join(', ')
                        }</p>
                        <p><span className={style.key}>Region: </span>{country.region}</p>
                        <p><span className={style.key}>Sub Region: </span>{country.subregion}</p>
                        <p><span className={style.key}>Population: </span>{country.population}</p>
                        <p><span className={style.key}>Capital: </span>{country.capital}</p>
                        <p><span className={style.key}>Currency: </span>
                        {Object.keys(country.currencies)
                         .map(curr=> country.currencies[curr].name)
                        }</p>
                        <p><span className={style.key}>languages: </span>
                        {Object.keys(country.languages)
                         .map(curr=>(country.languages[curr]))
                         .join(', ')
                        }</p>
                        
                    </div>
                </div>
                
            </div>
        )}
    </div>
 
  )
}

export default CountryDetails