import React from 'react'
import style from './contact.module.css'
function Contact() {
  const handleSubmit=(formData)=>{
    // console.log(formData.entries())    //return formData Iterator
    const data=Object.fromEntries(formData.entries())
    // console.log(data)  
  }
  return (
    <div className={`container ${style.center}`}>
      <form action={handleSubmit} className={style.cont}>
        <label htmlFor="Name" >Name</label>
        <input type="text" name="Name" id="Name" placeholder='Full Name' />
        <label htmlFor="mail" >Enail</label>
        <input type="email" name="mail" id="mail" placeholder='abcd@mail.com' />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="" cols="30" rows="5"></textarea>
        <button className={style.btn1} type='submit'>Submit</button>
      </form>
      
    </div>
  )
}

export default Contact