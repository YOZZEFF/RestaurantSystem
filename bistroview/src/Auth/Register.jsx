import { useState } from 'react'
import secone from '../assets/Auth/register.module.css'
import {useNavigate} from 'react-router-dom'
import axios from '../api/axios'



export const Register = () => {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [password_confirmation,setPasswordConfirmation]=useState("");
    const [errors,setErrors]=useState([]);

    const navigate = useNavigate();

     const handleRegister = async (event)=>{
        event.preventDefault();
        try{
              await axios.post('/register',
            {email,
                password,
                password_confirmation,
                name,
                phone
            });
              


            setEmail("");
            setName("");
            setPhone("");
            setPassword("");
            setPasswordConfirmation("");
            navigate("/login");         
        }catch(e){
          if(e.response.status === 422){
            setErrors(e.response.data.errors);
          }

        }
     }

  return (
    <div className={secone.parent}>
    <p className={secone.title_head}>Sign Up</p>
         <div className={secone.container}>
  <form onSubmit={handleRegister}>

    <div className={secone.row_three}>
    <label >Name</label>
    <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter your name' />
    {errors.name&&<span className={secone.danger}>{errors.name[0]}</span>}


    </div>
    <div className={secone.row_three}>
    <label >Phone</label>
    <input type="text"  value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='enter your phone' />
    {errors.phone&&<span className={secone.danger}>{errors.phone[0]}</span>}


    </div>
    <div className={secone.row_three}>
    <label >Email</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email' />
    {errors.email&&<span className={secone.danger}>{errors.email[0]}</span>}


    </div>
    <div className={secone.row_three}>
    <label >Password</label>
    <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
    {errors.password&&<span className={secone.danger}>{errors.password[0]}</span>}

    </div>

    <div className={secone.row_three}>
    <label >Confirm Password</label>
    <input type="password"  value={password_confirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} placeholder='password' />
    {errors.password_confirmation&&<span className={secone.danger}>{errors.password_confirmation[0]}</span>}

    </div>

    <button type="submit" >Register</button>

  </form>
  </div>
</div>
  )
}
