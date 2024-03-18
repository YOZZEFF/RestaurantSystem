import React from 'react'
import { useEffect, useState } from 'react'
import axios from '../api/axios'
import { useParams} from 'react-router-dom'
import singlep from '../assets/css_menu/singleprod.module.css'

export const SingleprodAll = () => {
  const[prodall,setProdall]=useState();
  const{id} = useParams(); 

  useEffect(()=>{

    axios.get('menu/allprod/'+id)
    .then((resp)=>setProdall(resp))
    .catch((err)=>console.log(err))
  },[])
  
 
 
  console.log(prodall);

  return (
    <div className={singlep.parent}>
        
        <div className={singlep.child}>
      <img src={prodall?.data.image} alt='food'/>
      <div className={singlep.details} key={prodall?.data.id}>
        <p className={singlep.title}>{prodall?.data.title}</p>
        <p className={singlep.desc}>{prodall?.data?.description}</p>
        <p className={singlep.price}> Price: <span>$ {prodall?.data.price}</span></p>

      </div>
      </div>

    </div>
  )
}
