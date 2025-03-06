import axios from 'axios'
export const api=axios.create({
    baseURL:"https://restcountries.com/v3.1"
})

export const getCountry=()=>{
    return api.get(`/all?fields=name,population,capital,currencies,region,flags`)
}
//get individual data
export const getIndCountry=(name)=>{
    return api.get(`/name/${name}?fullText=true`)
    // return api.get(`/name/${name}?fullText=true&fields=name,population,capital,currencies,region,
    //     subregion,tld,languages,border,maps,flags`)
}