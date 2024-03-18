import React from 'react'
import admin from '../assets/css_admin/admin.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Admin = () => {

  const user =JSON.parse(localStorage.getItem('user'));
  const token = useSelector((state) => state.user.token);



  return (
    <div className={admin.parent}>
      <p className={admin.admin_name}>{user.name}</p>
           <hr></hr>
      <div className={admin.cards}>
        <Link to={'/admin/'+token+'/getusers'}>
        <div className={admin.card_one}>
        <h3>View Users</h3>
        <p>you can view users of the site  </p>
        </div>
        </Link>
        <Link to={'/admin/'+token+'/getresrvations'}>
        <div className={admin.card_two}>
        <h3>View Resrvations</h3>
        <p>you can view resrvations of the site  </p>
        </div>
        </Link>
        <Link to={'/admin/'+token+'/products'}>
        <div className={admin.card_three}>
        <h3>View Products</h3>
        <p>you can view products of the site  </p>
        </div>
        </Link>

      </div>



    



        
</div>
  )
}
