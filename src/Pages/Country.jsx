import React, { useEffect, useState, useTransition } from "react";
import { getCountry } from "../Components/API/CountryAPI";
import Loader from "../Components/UI/Loader";
import CountryCard from "../Components/UI/CountryCard";
import style from "../Components/UI/country.module.css";
import SearchFilter from "../Components/UI/SearchFilter";

function Country() {
  const [country, setCountry] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountry();
        setCountry(res.data);
        // console.log(res)
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  
  //----- search data
  const handleSearch=(curr)=>{
    // console.log(search)
    //   console.log(curr)
    //   console.log(curr.name.common.toLowerCase())
    return curr.name.common.toLowerCase().includes(search.toLowerCase())
  }
  // -----region filter
  const handleRegion=(curr)=>{
    if(filter=="All") return country
    return curr.region == filter

  }
  const searchCountry=country.filter(curr=>{
    if(search){
      return handleSearch(curr) && handleRegion(curr)
    }
    return country
  })

  if (isPending) {
    return <Loader />;
  } else {
    return (
      <section className={`${style["country-sec"]} container`}>
        <div className={style["country-header"]}>
          <h1>Country Search</h1>
          <SearchFilter
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            country={country}
            setCountry={setCountry}
          />
        </div>
        <ul className={style["grid-four"]}>
          {searchCountry.map((curr, index) => {
            return <CountryCard key={index} curr={curr} />;
          })}
        </ul>
      </section>
    );
  }
}

export default Country;
