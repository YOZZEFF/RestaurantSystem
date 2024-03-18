import video from '../images/Doner Club Kebab B Roll Commercial Video Ad _ Signa Productions.mp4'
import sectwo from '../assets/css_about/sectwo.module.css'
import titleVideo from '../images/about_video_title.png'
import iconone from '../images/iconone_about.png'
import icontwo from '../images/icontwo_about.png'
import iconthree from '../images/iconthree_about.png'

export const SecTwoAbout = () => {

  return (
    <div className={sectwo.parent}>

      <div className={sectwo.childvideo}>
      <video  src={video}   controls autoPlay loop muted />
        <img src={titleVideo} alt='titlevideo' className={sectwo.title} />
      </div>

      <div className={sectwo.childicon}>

        <div className={sectwo.card}>
        <img src={iconone} alt='icon' />
        <div className={sectwo.words}>
          <h3>Multi Cuisine</h3>
          <p>in the new era of technology we look in the future with certainty life</p>
        </div>
        </div>

        <div className={sectwo.card}>
        <img src={icontwo} alt='icon' />
        <div className={sectwo.words}>
          <h3>Easy To Order</h3>
          <p>in the new era of technology we look in the future with certainty life</p>
        </div>
        </div>

        <div className={sectwo.card}>
        <img src={iconthree} alt='icon' />
        <div className={sectwo.words}>
          <h3>Fast Delivery</h3>
          <p>in the new era of technology we look in the future with certainty life</p>
        </div>
        </div>



      </div>
    </div>
  )
}
