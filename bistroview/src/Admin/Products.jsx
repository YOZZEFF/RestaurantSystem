import React, { useEffect, useState } from 'react'
import css from '../assets/css_admin/Products.module.css'
import axios from '../api/axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Products = () => {
    const token = useSelector((state) => state.user.token);

    const [prods,setProds]=useState();
    const [notfication,setNotfication]=useState()


    useEffect(()=>{
        axios.get('admin/products')
        .then((resp)=>setProds(resp.data.products))
        .catch((err)=>console.log(err))


    },[])
// console.log(prods);
const HandleDelete = async(event,product_id) =>{
    event.preventDefault();
    try{
        const deleted = await axios.post('admin/deleteproduct/'+product_id)
        
        setNotfication(deleted.data.messege)


    }catch(e){
        console.log(e);

    }


}


  return (
    <div className={css.parent}>
          <Link to={'/admin/'+token+'/products/add'} className={css.add} >Add Product </Link>
          {notfication && <div className={css.notf}>{notfication}</div>}


      
    <table  className={css.prods}>
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">title</th>
    <th scope="col">price</th>
    <th scope="col">description</th>
    <th scope="col">image url</th>
    <th scope="col">Cateogry_id</th>
    <th scope="col">Actions</th>


  </tr>
</thead>

<tbody>

   {
    prods?.map((prod)=>(
        <tr key={prod.id}>
      <th scope="row">{prod?.id} </th>
      <td>{prod?.title}</td>
      <td>{prod?.price}</td>
      <td>{prod?.description}</td>
      <td>{prod?.image}</td>
      <td>{prod?.category_id}</td>
      <td className={css.action}>
          <Link to={'/admin/'+token+'/products/update/'+prod.id} className={css.update}>Update</Link>
      <button className={css.delete}  key ={prod.id} onClick={(e)=>HandleDelete(e,prod.id)}>Delete</button>
      </td>
    </tr>


    ))
   }
      



 

</tbody>


</table>

</div>

  )
}
