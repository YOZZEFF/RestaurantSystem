// import React from 'react'
import { Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import secone from '../assets/Auth/login.module.css'
import axios from '../api/axios'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { userslice } from './../redux/userslice';

export const Login = () => {
    const [email,setEmail]=useState(""); 
    const [password,setPassword]=useState("");
    const [errors,setErrors]=useState([]);
    const [users,setUsers]=useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
      axios.get('/users')
      .then((resp)=>setUsers(resp.data))
      .catch((err)=>console.log(err))
  },[])


     const handleLogin = async (event)=>{
        event.preventDefault();
        try{
            const response = await axios.post('/login',{email,password})
            console.log(response)
            const  status = response.data.status

            console.log(status)
            if (status === 'failed') { 
              setErrors({ credentials: ['Wrong Email or Password.'] });
              return;
          }else{
            const token = response.data.access_token;
            localStorage.setItem('token', token); 
                        
            setEmail("");
            setPassword("");
            const user = response.data.user;

            localStorage.setItem('user',JSON.stringify(user))

            window.location.href='/';
            
          
          

          }
        
         

            
        }catch(error){
          if (error.response && error.response.status === 422) {
            setErrors(error.response.data.errors);
        }else{
          setErrors({ credentials: ['Wrong Email or Password.'] });
        }

        }
      
     
     }
     
    
 
    

  return (
    <div className={secone.parent}>
        <p className={secone.title_head}>Sign In</p>
            <div className={secone.container}>
          

<form onSubmit={handleLogin}>
  

        <div className={secone.row_three}>
        <label >Email</label>
        <input type="email" value={email}   onChange={(e)=>setEmail(e.target.value)}  placeholder='enter your email' />
        {errors.email &&<span className={secone.danger}>{errors.email[0]}</span>} 



        </div>
        <div className={secone.row_three}>
        <label >Password</label>
        <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
        {errors.password&&<span className={secone.danger}>{errors.password[0]}</span>}
        </div>
        
        {errors.credentials && <span className={secone.danger}>{errors.credentials[0]}</span>}
        <button type="submit"  >Login</button>


      </form>
     
      </div>
                
      <p className={secone.title_sign_up}>if you're not registerd go to<Link to='/register' className={secone.sign_up}>Sign Up</Link> </p>

    </div>
  )
}
