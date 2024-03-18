import { useState } from 'react'
import contact from '../assets/css_contact/contact.module.css'
import axios from '../api/axios';

export const Contact = () => {
  const[name,setName]=useState("");
  const[messege,setMessege]=useState("");
  const[subject,setSubject]=useState("");
  const[email,setEmail]=useState("");
  const[errors,setErrors]=useState([]);

  const handlecontact = async(event)=>{
    event.preventDefault();

    try{

      await axios.post('/contact',{
        name,
        email,
        subject,
        messege
      })
      setEmail("");
      setMessege("");
      setName("")
      setSubject("");

    }catch(e){
      if(e.response.status === 422){
        setErrors(e.response.data.errors);
    }else{
        setErrors({ contact: ['All fields are Required'] });
    }

    }

  }


  return (
    <div className={contact.parent}>
        <div className={contact.head}>
        <p className={contact.title_head}>Contact Us</p>
      <p className={contact.desc}>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>

        </div>

      <form onSubmit={handlecontact}>
      {errors.contact && <span className={contact.danger}>{errors.contact[0]}</span>}

        <div className={contact.row_one}>
            <div className={contact.col}>
        <label >Name</label>
        <input type="text"   value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' />
        </div>

        <div className={contact.col}>
        <label>Email</label>
        <input type="email"   value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter email address' />
        </div>
        </div>

        <div className={contact.row_two}>
        <div className={contact.col}>
        <label >subject</label>
        <input type="text"  value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder='Write a subject' />
        </div>
        </div>
        <div className={contact.row_three}>
        <label >Messege</label>
        <textarea  value={messege} onChange={(e)=>setMessege(e.target.value)} rows="4" cols="50" placeholder='Write your messege'>

        </textarea>

        </div>


        <button type="submit" >Send</button>
      </form>
      <div className={contact.boxes}>

        <div className={contact.call}>
            <p className={contact.box_title}>Call Us:</p>
            <h3>+1-234-567-8900</h3>
        </div>

        <div className={contact.hours}>
        <p className={contact.box_title}>Hours:</p>
        <p className={contact.box_desc}>Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm</p>
        </div>

        <div className={contact.location}>
        <p className={contact.box_title}>Our Location:</p>
        <p className={contact.box_desc}>123 Bridge Street
            Nowhere Land, LA 12345
            United States</p>
        </div>




      </div>


        </div>
  )
}
