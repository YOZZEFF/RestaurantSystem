import { useState } from 'react';
import secone from '../assets/css_book/book.module.css';
import axios from '../api/axios';
import { useSelector } from 'react-redux';

export const Book = () => {
  const[date,setDate]=useState("");
  const[time,setTime]=useState("");
  const[name,setName]=useState("");
  const[phone,setPhone]=useState("");
  const[user_id,setUser_id]=useState("");
  const[errors,setErrors]=useState([]);
  const[success,setSuccess]=useState([]);
  const[totperson,setTotperson]=useState("");
  
  const user =JSON.parse(localStorage.getItem('user')) ;


  const handlebook = async (event)=>{
    event.preventDefault();

    try{
        setUser_id(user.id);

      await axios.post('/booking',
      {date,
       time,
       name,
       phone,
       totperson,
       user_id: user.id  
      });
      setSuccess({success : ['Reservation of table  done']});


      setDate("");
      setTime("");
      setName("");
      setPhone("");
      setTotperson("");

  }catch(e){
    if(e.response.status === 422){
        setErrors(e.response.data.errors);
    }else{
        setErrors({ book: ['All fields are Required'] });
    }
  }
  }


  return (
    <div className={secone.parent}>
      <p className={secone.title_head}>Book A Table</p>
      <p className={secone.desc}>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
      <div className={secone.container}>
      <form onSubmit={handlebook}>
      {errors.book && <span className={secone.danger}>{errors.book[0]}</span>}
      {success.success && <span className={secone.succ}>{success.success[0]}</span>}

        <div className={secone.row_one}>

          
            <div className={secone.col}>
        <label >Date</label>
        <input type="text"  value={date} onChange={(e)=>setDate(e.target.value)}    placeholder='04/01/2024' />

        </div>

        <div className={secone.col}>
        <label>Time</label>
        <input type="text"  value={time}  onChange={(e)=>setTime(e.target.value)}  placeholder='06:30 PM' />

        </div>
        </div>

        <div className={secone.row_two}>
        <div className={secone.col}>
        <label >Name</label>
        <input type="text"   value={name}   onChange={(e)=>setName(e.target.value)}  placeholder='Enter your name' />

        </div>
        <div className={secone.col}>
        <label>Phone</label>
        <input type="text" value={phone}   onChange={(e)=>setPhone(e.target.value)}    placeholder='x-xxx-xxx-xxxx'  />

        </div>
        </div>
        <div className={secone.row_three}>
        <label >Total Person</label>
        <input type="text"   value={totperson}   onChange={(e)=>setTotperson(e.target.value)}  placeholder='1 person' />
        </div>
        <button type="submit">Book A Table</button>

      </form>
      </div>

      <iframe title="Map" width="100%" height="900px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
    </div>
  );
};
