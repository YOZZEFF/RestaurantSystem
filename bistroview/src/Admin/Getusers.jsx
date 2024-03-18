import React, { useEffect, useState } from 'react'
import getuser from '../assets/css_admin/getUsers.module.css'
import axios from '../api/axios'

export const Getusers = () => {
  const[users,setUsers]=useState([])
 
  useEffect(()=>{
    axios.get('admin/users')
    .then((resp)=>setUsers(resp.data.users))
    .catch((err)=>console.log(err))

  },[])
  return (
    <div className={getuser.parent}>
      
      <table  className={getuser.users}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Full Name</th>
      <th scope="col">E-mail</th>

    </tr>
  </thead>

  <tbody>
    {
      users?.map((user)=>(
        <tr key={user.id}>
        <th scope="row">{user?.id} </th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
      </tr>



      ))
    }
   

  </tbody>

 
</table>
</div>

  )
}
