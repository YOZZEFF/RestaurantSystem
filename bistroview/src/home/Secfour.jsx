import main from '../images/main.png'
import childone from '../images/child_one.png'
import childtwo from '../images/child_two.png'
import childthree from '../images/child_three.png'
import childfour from '../images/child_four.png'
import { Link} from 'react-router-dom'
import secfour from  '../assets/css_home/sectionFour.module.css'


export const Secfour = () => {
  return (
    <div >
        <div className={secfour.head}>
            <h2>Our Blog & Articles</h2>
            <Link to='/pages'>Read All Articles</Link>
        </div>
<div className={secfour.parent}>
        <div className={secfour.main}>

            <img src={main} alt='burger'/>
            <p className={secfour.date}>january 4,2023</p>
            <p className={secfour.title}>
                The secert tip & trick to prepare a perfect burger & pizza for our customers
            </p>
            <p className={secfour.desc}>
            is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
             is that it has a more-or-less normal distribution of letters,
            </p>


        </div>
        <div className={secfour.col_one}>
            <div className={secfour.card}>
            <img src={childone} alt='food'/>
            <p className={secfour.date}>january 4,2023</p>
            <p className={secfour.title}>
                how to prepare perfect french fries in an air fryr
            </p>
            </div>
            <div className={secfour.card}>
            <img src={childtwo} alt='food'/>
            <p className={secfour.date}>january 4,2023</p>
            <p className={secfour.title}>
                how to prepare delicuious chicken tender
            </p>
    </div>

</div>
        <div className={secfour.col_two}>
            <div className={secfour.card}>
            <img src={childthree} alt='food'/>
            <p className={secfour.date}>january 4,2023</p>
            <p className={secfour.title}>
                7 delicious cheesecake recipe you can prpare
            </p>
            </div>
            <div className={secfour.card}>
            <img src={childfour} alt='food'/>
            <p className={secfour.date}>january 4,2023</p>
            <p className={secfour.title}>
                5 great pizza restaurants you should visit this city
            </p>
    </div>

</div>
</div>
    </div>
  )
}
