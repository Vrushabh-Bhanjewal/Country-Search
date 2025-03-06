import React from 'react'
import style from "./country.module.css";

function SearchFilter({search,setSearch,filter,setFilter,country,setCountry}) {
    const handleInput=(e)=>{
        e.preventDefault()
        setSearch(e.target.value)
    }
    const handleSelect=(e)=>{
        e.preventDefault()
        setFilter(e.target.value)
    }
    const handleSort=(value)=>{
        const countrySort= (value=='asc') 
            ? [...country].sort((a,b)=>a.name.common.localeCompare(b.name.common))
            : [...country].sort((a,b)=>b.name.common.localeCompare(a.name.common))  
        setCountry(countrySort)
    }
  return (
    <div className={style['filter-box']}>
        <div>
            <input type="text" placeholder='Search...' value={search} onChange={handleInput} />
        </div>
        <div className={style['filter-btns']}>
            <button onClick={()=>handleSort('asc')}>ASC</button>
            <button onClick={()=>handleSort('desc')}>DESC</button>
            <select name="Region" id="" value={filter} onChange={handleSelect}>
                <option value="All">All</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Americas">Americas</option>
                <option value="Oceania">Oceania</option>
                <option value="Antarctic">Antarctic</option>
            </select>

        </div>
    </div>
  )
}

export default SearchFilter