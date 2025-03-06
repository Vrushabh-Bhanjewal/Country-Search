import React from 'react'
import style from './footer.module.css'
import contData from '../API/ContData.json'
import ContactBox from './ContactBox'

function Footer() {
  return (
    <div className={style.cont}> 
            <div className={`${style.container} ${style.contact}`}>
                {
                    contData.map(curr=>{
                        return <ContactBox key={curr.icon} curr={curr}/>
                    })
                }
            </div>
            <div className={`${style.container}`}> 
              <h1 style={{textAlign:"center",padding:"2rem "}}>@copyrights Vrushabh</h1>
            </div>
        </div>
  )
}

export default Footer