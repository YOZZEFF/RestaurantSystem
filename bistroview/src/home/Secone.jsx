import background from '../images/Mask group.png'
import text from '../images/sectionone.svg'
import { Link } from 'react-router-dom'
import secone from'../assets/css_home/sectionone.module.css'
import {useSelector } from 'react-redux';


export const Secone = () => {
  const token = useSelector((state)=>state.user.token)

  return (
    <div>

<div className={secone.container}>

      <img src={background} alt='background' id={secone.one}/>

      <div className={secone.parent}>
      <img src={text} alt='text' id={secone.two}/>

          <div className={secone.links}>

          {
          token ?  
         <Link to="/booking" className={secone.book}>Book A Table</Link>

          :        
              <Link to="/login" className={secone.book}>Book A Table</Link>

        }
                  <Link to="/menu/allprod" className={secone.explore}>Explore Menu</Link>

          </div>

      </div>

  </div>
    </div>
  )
}
