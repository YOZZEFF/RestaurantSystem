import logo from './images/Logo.png'
import { NavLink ,Link} from 'react-router-dom'
import instgram from './images/instgram.png'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import github from './images/github.png'
import  './assets/navstyle.css'
import {useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userslice } from './redux/userslice';




export const Nav = () => {
  const is_admin =1;

 const user =JSON.parse(localStorage.getItem('user')) ;

  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userslice.actions.logout(token)); 
  };




  return (

        <nav>
         <div className='top'>

            <div className='left'>
            <p>(414)-876-101</p>
            <p>yummy@bistrobliss</p>

            </div>
            <div className='right'>
              <img src={facebook} alt="facebook"/>
              <img src={instgram} alt="instgram"/>
              <img src={twitter} alt="twitter"/>
              <img src={github} alt="github"/>

            </div>

         </div>

         <div className='bottom'>
         <img src={logo} alt="logo"/>

            <div className='links'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/menu/allprod'>Menu</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/pages'>Pages</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                </div>
             
                {/* { window.location.reload()} */}

                {
          token ?  (
            <div>{

              
              user.status === is_admin?    <Link to={'/admin/'+token }className='profile' >profile</Link> :<Link to={'/userprofile/'+token }className='profile' >profile</Link>

              }
           <Link to='/' onClick={handleLogout}  className='profile' >Log out</Link>
           </div>

           )
          
          : (
            <div className='auth'><NavLink to='/register' className='auth_btn'>Sign Up</NavLink> 
            <NavLink to='/login' className='auth_btn'>Sign In</NavLink></div> 
          )
        }
             

          
        



         </div>


        </nav>





  )
}
