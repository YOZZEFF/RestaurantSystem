import React from 'react'
import { useEffect, useState } from 'react'
import axios from '../api/axios'
import { useParams} from 'react-router-dom'
import singlep from '../assets/css_menu/singleprod.module.css'

export const SingleprodCateogries = () => {
  const[prodcateg,setProdCateg]=useState();
  const{id  ,product_id} = useParams(); 

  
  useEffect(()=>{
          
    axios.get('/menu/all/'+id +'/'+product_id )
    .then((resp)=>setProdCateg(resp))
    .catch((err)=>console.log(err))
  },[])
 
  console.log(prodcateg);

  return (
    <div className={singlep.parent}>
        
        <div className={singlep.child}>
      <img src={prodcateg?.data.image} alt='food'/>
      <div className={singlep.details} key={prodcateg?.data.id}>
        <p className={singlep.title}>{prodcateg?.data.title}</p>
        <p className={singlep.desc}>{prodcateg?.data?.description}</p>
        <p className={singlep.price}> Price: <span>$ {prodcateg?.data.price}</span></p>

      </div>
      </div>

    </div>
  )
}
