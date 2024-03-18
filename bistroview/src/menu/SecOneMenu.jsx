import { Link, NavLink } from 'react-router-dom'
import secone from '../assets/css_menu/secOne.module.css'
import { useEffect, useState } from 'react'
import axios from './../api/axios';
import {useParams} from 'react-router-dom'
import { SecTwoMenu } from './SecTwoMenu';



export const SecOneMenu = () => {


  const [cateogry,setcateogry]=useState([])
  const params = useParams()

  const id = params.id
  useEffect(()=>{
    axios.get('menu/all/'+id)
    .then((prod)=>setcateogry(prod.data))
    .catch((err)=>console.log(err))
  },[id])
  // console.log(cateogry)

  return (
    <div className={secone.parent}>
           <p className={secone.title_head}>Our Menu</p>
     <p className={secone.desc_head}>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>

    <div className={secone.links}> 
    {id?   <Link to='/menu/allprod' >All</Link> :  <NavLink to='/menu/allprod' >All</NavLink>}
                <NavLink to={'/menu/all/'+4} key={cateogry.id}>Breakfast</NavLink>
                <NavLink to={'/menu/all/'+2}  key={cateogry.id}>Main Dishes</NavLink>
                <NavLink to={'/menu/all/'+1} key={cateogry.id}>Drinks</NavLink>
                <NavLink to={'/menu/all/'+3}  key={cateogry.id}>Desserts</NavLink>
            </div>

    </div>
  )
}
