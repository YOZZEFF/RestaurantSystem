import secthree from '../assets/css_about/secthree.module.css'
import imageside from '../images/img_sectionthree_about.png'
export const SecThreeAbout = () => {
  return (
    <div className={secthree.parent}>
        <img src={imageside} alt='food' className={secthree.rightside}/>

        <div className={secthree.leftside}>

            <div className={secthree.title}>
                <h1>
                    A little information for our valuable guest
                </h1>
                <p>
                    At place, we belive that dining is not just about food,but also about the overall experience , Our staff,Renowend for
                    their warmth and dedication, atrives to make  every visit an unforgattable event.
                </p>

            </div>

            <div className={secthree.boxes}>

            <div className={secthree.row_one}>
                <div className={secthree.box}>
                <p>3</p>
                <p>Locations</p>
                </div>
                <div className={secthree.box}>
                <p>1995</p>
                <p>Founded</p>
                </div>
            </div>

            <div className={secthree.row_two}>
            <div className={secthree.box}>
                <p>65+</p>
                <p>Staff Members</p>
                </div>
                <div className={secthree.box}>
                <p>100%</p>
                <p>Satisfied Customers</p>
                </div>
            </div>





            </div>





        </div>



    </div>
  )
}
