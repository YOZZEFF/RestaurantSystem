import brand_one from '../images/menu_pics/1.png'
import brand_two from '../images/menu_pics/2.png'
import brand_three from '../images/menu_pics/3.png'
import secthre from '../assets/css_menu/secThree.module.css'

export const SecThreeMenu = () => {
  return (
    <div className={secthre.parent}>
        <div className={secthre.left_side}>
            <p className={secthre.title}>You can order through apps</p>
            <p className={secthre.para}>Lorem ipsum dolor sit amet consectetur adipiscing elit enim
            bibendum sed et aliquet aliquet risus tempor semper.</p>
        </div>

        <div className={secthre.right_side}>
            <img src={brand_one} alt='brand'/>
            <img src={brand_two} alt='brand'/>
            <img src={brand_three} alt='brand'/>



        </div>



    </div>
  )
}
