import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import css from '../assets/css_admin/updateprod.module.css';

export const Addprod = () => {
  const[notfication,setNotfication]=useState();
  const[title,setTitle]=useState();
  const[price,setPrice]=useState();
  const[description,setDescription]=useState();
  const[image,setImage]=useState();
  const[category_id,setCategory_id]=useState();

  const user =JSON.parse(localStorage.getItem('user')) ;

  const handleAdd = async (event) => {
    event.preventDefault();
  
    try{
      
      const add_prod = await axios.post('admin/addproduct/',{
        title,
        price,
        description,
        image,
        category_id,
        user_id : user.id
      });
      setNotfication(add_prod?.data.messege);
    
    }catch (e){
      console.log(e.response.data.errors);
    }
  };

  return (

    <div className={css.parent}>

      <p className={css.head}>Add Product</p>
      {notfication && <div className={css.notf}>{notfication}</div> }


      <form onSubmit={handleAdd}>

        <div className={css.row_two}>
          <div className={css.col}>
            <label>Title</label>
            <input type="text"  value={title} onChange={(e)=>setTitle(e.target.value)} />
          </div>
        </div>
        <div className={css.row_two}>
          <div className={css.col}>
            <label>Price</label>
            <input type="text"  value={price} onChange={(e)=>setPrice(e.target.value)} />
          </div>
        </div>
        <div className={css.row_two}>
          <div className={css.col}>
            <label>Category ID</label>
            <input type="text" value={category_id} onChange={(e)=>setCategory_id(e.target.value)} />
          </div>
        </div>
        <div className={css.row_two}>
          <div className={css.col}>
            <label>Image</label>
            <input type="text"  value={image} onChange={(e)=>setImage(e.target.value)}/>
          </div>
        </div>
        <div className={css.row_three}>
          <label>Description</label>
          <textarea  value={description} onChange={(e)=>setDescription(e.target.value)} rows="4" cols="50" />
        </div>
        <button type="submit">Add</button>
      </form>

    </div>
  );
};
