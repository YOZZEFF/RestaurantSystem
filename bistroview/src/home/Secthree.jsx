import cheif from '../images/cheif.png'
import foodone from '../images/foodone.png'
import foodtwo from '../images/foodtwo.png'
import delv from '../images/delviry.png'
import offers from '../images/offers.png'
import online from '../images/onlineservice.png'
import secthree from '../assets/css_home/sectionThree.module.css'

export const Secthree = () => {
  return (
    <div>
           <div className={secthree.container}>
        <img src={cheif} alt='cheif'/>

        <div className={secthree.imgcol}>
        <img src={foodone} alt='food'/>
        <img src={foodtwo} alt='food' className={secthree.foodtwo}/>
        </div>

        <div className={secthree.rightside}>
          <div className={secthree.title}>
            <p className={secthree.tit}>
              Fasted Food Delivry in City
            </p>
            <p className={secthree.para}>
              Our visula designer lets you  quickly and of drag a down your way to customapps for both keep desktop
            </p>

          </div>

              <div className={secthree.icon_container}>
            <div className={secthree.icon}>
            <img src={delv} alt='delv'/>
            <p>Delviry within30 minutes</p>
            </div>
            <div className={secthree.icon}>
            <img src={offers} alt='offers'/>
            <p>Best Offer & Prices</p>
            </div>
            <div className={secthree.icon}>
            <img src={online} alt='online'/>
            <p>Online Services Avalible</p>
            </div>
            </div>

        </div>





    </div>
    </div>
  )
}
