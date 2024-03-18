import foot from './assets/footer.module.css'
import logo from './images/footer_logo.png'
import facebook from './images/footer_icon_two.png'
import instagram from './images/footer_icon_three.png'
import twitter from './images/footer_icon_one.png'
import github from './images/footer_icon_four.png'
import foot_one from './images/footer_insta_one.png'
import foot_two from './images/footer_insta_two.png'
import foot_three from './images/footer_insta_three.png'
import foot_four from './images/footer_insta_four.png'
import { Link } from 'react-router-dom'



export const Footer = () => {
  return (
    <div className={foot.parent}>
        <div className={foot.contact}>
            <img src={logo} alt='logo'/>
            <p>
                in the new era of technology we look a
                in the future with certainly and pride to
                for our company end.
            </p>

            <div className={foot.social}>
          <Link to=''>  <img src={facebook} alt='facebook'/></Link>
          <Link to=''> <img src={instagram} alt='instagram'/></Link>
          <Link to=''> <img src={twitter} alt='twitter'/></Link>
          <Link to=''> <img src={github} alt='youtube'/></Link>
            </div>


        </div>
        <div className={foot.links}>
            <h3>Pages</h3>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/pricing'>Pricing</Link>
            <Link to='/pages'>Blog</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/delivry'>Delivery</Link>

        </div>
        <div className={foot.acc}>
        <h3>Utility Pages</h3>

        <Link to=''>Start Here</Link>
        <Link to=''>Styleguide</Link>
        <Link to=''>Password Protected</Link>
        <Link to=''>404 Not Found</Link>
        <Link to=''>Licenses</Link>
        <Link to=''>Changing</Link>
        <Link to=''>View More</Link>
        </div>
        <div className={foot.rightside}>
            <h3>Follow Us On Instgram</h3>
            <div className={foot.row_one}>
                <img src={foot_one} alt='footer_image'/>
                <img src={foot_two} alt='footer_image'/>

            </div>
            <div className={foot.row_two}>
            <img src={foot_three} alt='footer_image'/>
            <img src={foot_four} alt='footer_image'/>

            </div>


        </div>


    </div>
)
}
