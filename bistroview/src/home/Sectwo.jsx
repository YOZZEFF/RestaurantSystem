import dessert from '../images/dessert.png'
import breakfast from '../images/breakfast.png'
import maindishes from '../images/maindishes.png'
import drinks from '../images/drinks.png'
import { Link} from 'react-router-dom'
import sectwo from'../assets/css_home/sectionTwo.module.css'



export const Sectwo = () => {
  return (
    <div>
         <h2>Browse Our Menu</h2>

<div className={sectwo.container}>
        <div className={sectwo.card}>
            <img src={breakfast} alt='breakfast'/>
            <h4>Breakfast</h4>
            <p>in the new era of technology we look in the future with certainty and pride for our life</p>
            <Link to={'/menu/all/'+4}>Explore Menu</Link>
        </div>
        <div className={sectwo.card}>
            <img src={maindishes} alt='maindishes'/>
            <h4>Main Dishes</h4>
            <p>in the new era of technology we look in the future with certainty and pride for our life</p>
            <Link to={'/menu/all/'+2}>Explore Menu</Link>
        </div>
        <div className={sectwo.card}>
            <img src={drinks} alt='drinks'/>
            <h4>Drinks</h4>
            <p>in the new era of technology we look in the future with certainty and pride for our life</p>
            <Link to={'/menu/all/'+1}>Explore Menu</Link>
        </div>
        <div className={sectwo.card}>
            <img src={dessert} alt='dessert'/>
            <h4>Desserts</h4>
            <p>in the new era of technology we look in the future with certainty and pride for our life</p>
            <Link to={'/menu/all/'+3}>Explore Menu</Link>
        </div>
        </div>
    </div>
  )
}
