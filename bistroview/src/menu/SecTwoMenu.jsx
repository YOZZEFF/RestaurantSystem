import sectwo from '../assets/css_menu/secTwo.module.css'
import { useEffect, useState } from 'react'
import axios from '../api/axios'
import {Link, useParams} from 'react-router-dom'



export const SecTwoMenu = () => {


  const [cateogry,setcateogry]=useState([])
  const [all,setAll]=useState([])

  const params = useParams()

  const id = params.id
  useEffect(()=>{
    axios.get('menu/all/'+id)
    .then((prod)=>setcateogry(prod.data))
    .catch((err)=>console.log(err))
  },[id])

  useEffect(()=>{
    axios.get('menu/allprod/')
    .then((prod)=>setAll(prod.data))
    .catch((err)=>console.log(err))
  },[])

  console.log(all)



  console.log(cateogry)
  return (
    
      <div className={sectwo.parent}>
<div className={sectwo.cards}> 



{
      id?  cateogry.data?.map((prod)=>(
          

        <Link  to={'/menu/all/'+id+'/'+prod.id}><div className={sectwo.card} key={prod?.id}>
          <img src={prod?.image} alt='food' /> 
          <p className={sectwo.price}>${prod.price}</p>
          <p className={sectwo.title}>{prod?.title}</p>
          <p className={sectwo.descrip}>
            {prod?.description}
          </p>
        </div></Link>
          
        
        )):
        all.data?.map((prod)=>(
          

          <Link  to={'/menu/allprod/'+prod.id}><div className={sectwo.card} key={prod?.id}>
      <img src={prod?.image} alt='food' /> 
      <p className={sectwo.price}>${prod.price}</p>
      <p className={sectwo.title}>{prod?.title}</p>
      <p className={sectwo.descrip}>
        {prod?.description}
      </p>
    </div>
    </Link>

      ))}

</div>
</div>
  
  )
}
