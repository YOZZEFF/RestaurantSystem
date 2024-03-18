import { useEffect, useState } from 'react'
import pages from '../assets/css_pages/pages.module.css'
import pic_one from '../images/pages/Mask group.png'
import axios from '../api/axios';

export const Pages = () => {
    const[blogs,setBlogs]=useState();
    useEffect(()=>{

        axios.get('/pages')
        .then((resp)=>setBlogs(resp.data.blogs))
        .catch((err)=>console.log(err))
    },[])
    console.log(blogs)
  return (
    <div className={pages.parent}>
        <p className={pages.title_head}>Our Blog & Articles</p>
        <p className={pages.desc_head}>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        <div className={pages.cards}>
            {

                blogs?.map((blog)=>(
                    <div className={pages.card} key={blog?.id}>
                    <img src={blog?.image} alt='food'/>
                    <p className={pages.date}>{blog?.title}</p>
                    <p className={pages.desc}>{blog?.description}</p>
                </div>
             

                    
                ))
            }
           
         


        </div>



    </div>
  )
}
