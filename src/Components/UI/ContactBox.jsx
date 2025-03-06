import React from 'react'
import style from './footer.module.css'
import { FaAddressBook, FaMapMarked, FaMapMarkerAlt } from "react-icons/fa";

function ContactBox({curr}) {
    const IconMap={
        FaMapMarkerAlt: <FaMapMarkerAlt />,
        FaAddressBook:<FaAddressBook />,
        FaMapMarked:<FaMapMarked />
    }
  return (
    <div className={style.box}>
        <div className={style.icon}>{IconMap[curr.icon]}</div>
        <div className={style.place}>
            <h2>{curr.title}</h2>
            <p>{curr.body}</p>
        </div>
    </div>
  )
}

export default ContactBox