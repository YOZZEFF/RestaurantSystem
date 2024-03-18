import React, { useEffect, useState } from 'react'
import userprofile from '../assets/Auth/userProfile.module.css'
import axios from '../api/axios';
import { useDispatch } from 'react-redux';
import { userslice } from '../redux/userslice';


export const Userprofile = () => {
  const user_profile =JSON.parse(localStorage.getItem('user')) ;
 console.log(user_profile)

  const[booking,setBooking]=useState(""); 
    useEffect(()=>{
      axios.get('/get_reservations/'+user_profile.id)
      .then((resp)=>setBooking(resp.data))
      .catch((err)=>console.log(err))
    },[user_profile.id])


    const [name, setName] = useState(user_profile.name || ''); // i made this because i have value of name and when i need to change it i change it 
    const [phone,setPhone]=useState(user_profile.phone || '');
    const [email,setEmail]=useState(user_profile.email || '');
    const dispatch = useDispatch();
    
    const updateInfo = async (event)=>{
      event.preventDefault();
      try{

      const user_data =  await axios.post('info_update/'+user_profile.id,
      {name,
       phone,
       email,
      });

      dispatch(userslice.actions.login({ 
        user: { ...user_profile, name, phone, email }
      }));

      localStorage.setItem('user', JSON.stringify({ ...user_profile, name, phone, email }));


      setName("");
      setPhone("");
      setEmail("");
      console.log(user_data.config.data)


  }catch(e){
    if(e.response.status === 422){
        console.log(e.response.data.errors);
    }
  }



    }
    

    
   
   
  return (
    <div className={userprofile.parent}>
      <div className={userprofile.head}>
       
        <p className={userprofile.user_name}>Hello, <span>{user_profile.name}</span></p>
      </div>
      <hr></hr>
      
    
<div className={userprofile.bookings}>
  <p className={userprofile.title}>My Reservations</p>
  <div className={userprofile.booking_container}>
{   booking && booking.bookings && booking.bookings.length > 0 ?
          booking.bookings?.map((book)=>(
            <div className={userprofile.book} key={book?.id}>
              <div className={userprofile.details}>
               <p className={userprofile.book_name}>Reservation <span>Name</span>: {book?.name}</p>
               <p className={userprofile.book_date}> Reservation <span>Date</span>: {book?.date}</p>
               </div>

               <p> Reservations <span>Status</span>: <span className={userprofile.status}>{book?.status}</span></p>
        
            </div>
            
          
        
        
          )):(<div className={userprofile.book}>No Resrvations </div>)
        
}
</div>
</div>
      <hr></hr>
      <div className={userprofile.info_container}>
        <p className={userprofile.title}>My Info</p>


        <div className={userprofile.formm}>
          <form onSubmit={updateInfo}>
         <label >Name</label>
        <input type="text"   value={name}    onChange={(e)=>setName(e.target.value)}/>
        <label >Email</label>
        <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label >Phone</label>
        <input type="text"   value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <button type='submit'>Update</button>

        </form>
        </div>
      </div>
     
     

     





    </div>
  )
}
