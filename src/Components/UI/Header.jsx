import React, { useState } from 'react'
import style from './header.module.css'
import { NavLink } from 'react-router-dom'
import { IoMdMenu } from 'react-icons/io'
function Header() {
  const [ismenu,setmenu] = useState(false)
      const handleMenuToggle=()=>{
          setmenu(!ismenu)
      }
  return (
    <header className={style.header}>
            <div className={`${style.container} ${style.nav}`}>
                <div className={style.logo}>Vrushabh</div>
                <div className={ismenu ? style[`web-mob`] : style['web-big']}>
                    <ul  className={style.list}>
                        <NavLink to='/'><li>Home</li></NavLink>
                        <NavLink 
                            style={ ({isActive})=>{ { color :isActive ?"#00ff80":"white"} }} 
                            to="/Country"><li>Country</li>
                        </NavLink>
                        <NavLink to="/About"><li>About</li></NavLink>
                        <NavLink to="/Contact"><li>Contact</li></NavLink>
                    </ul>
                </div>
                <button 
                className={` ${style.menuBtn}`} 
                onClick={handleMenuToggle}
                ><IoMdMenu /></button>
            </div>
        </header>
  )
}

export default Header