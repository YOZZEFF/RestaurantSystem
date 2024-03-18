import React, { useEffect, useState } from 'react'
import css from '../assets/css_admin/getBookings.module.css'
import axios from '../api/axios'
export const Getbookings = () => {
  const[booking,setBooking]=useState([])
  const [notfication,setNotfication]=useState();
  
// display all of resrvations
  useEffect(()=>{
    axios.get('admin/resrvations')
    .then((resp)=>setBooking(resp.data.bookings))
    .catch((err)=>console.log(err))

  },[])

  //  handle accept resrvation by get id of resrvation(booking)
 const handleAccept = async(event ,booking_id)=>{
  event.preventDefault();
  const status = 'approved'

      try{
              await axios.post('admin/resrvations_validation/'+booking_id, {status})
              setNotfication(' Resrvration has '+status)
            }catch(e){
          console.log(e);
}
 }
  //  handle cancled resrvation by get id of resrvation(booking)

 const handleCanceld= async(event ,booking_id)=>{
  event.preventDefault();
  const status = 'canceled'

      try{
                  await axios.post('admin/resrvations_validation/'+booking_id, {status})
                  setNotfication(' Resrvration has '+status)

         }catch(e){
          console.log(e);
}
 }
  //  handle open resrvation by get id of resrvation(booking)

 const handleOpen = async(event ,booking_id)=>{
  event.preventDefault();
  const status = 'open'

      try{
                  await axios.post('admin/resrvations_validation/'+booking_id, {status})
                  setNotfication(' Resrvration has '+status)

         }catch(e){
          console.log(e);
}
 }


  return (
    <div className={css.parent}>
            {notfication && <div className={css.notf}>{notfication}</div>}

    
      
    <table  className={css.booking}>
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">name of resvation</th>
    <th scope="col">Status</th>
    <th scope="col">total person</th>
    <th scope="col">Phone</th>
    <th scope="col">Date</th>
    <th scope="col">Actions</th>

  </tr>
</thead>

<tbody>
  {
    booking?.map((book)=>(
      <tr key={book.id}>
        <th scope="row">{book?.id} </th>
        <td>{book?.name}</td>
        <td>{book?.status}</td>
        <td>{book?.total_person}</td>
        <td>{book?.phone}</td>
        <td>{book?.date}</td>
        <td className={css.action}>
          {/* here i pass ID of booking and event to their  function  */}
          <button className={css.accept} key={book?.id} onClick={(e)=>handleAccept(e,book.id)}>Accept</button>
          <button className={css.cancel} key={book?.id} onClick={(e)=>handleCanceld(e,book.id)}>Cancled</button>
          <button className={css.open} key={book?.id} onClick={(e)=>handleOpen(e,book.id)}>Open</button>
        </td>
      </tr>
    ))
        
  }
</tbody>
</table>
</div>
  )
}
