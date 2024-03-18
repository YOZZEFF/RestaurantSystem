import container_card from '../images/sectionone_about.png'
import card from '../images/sectionone_card_about.png'
import secone from '../assets/css_about/secone.module.css'
export const SecOneAbout = () => {
  return (
    <div  className={secone.parent}>

      <div className={secone.left}>
      <img src={container_card} alt='container' className={secone.container_card}/>
      <img src={card} alt='card' className={secone.card}/>
      </div>

      <div className={secone.right}>
      <p className={secone.title}>
        We Provide Healthy Food For your  Family.
      </p>
      <p className={secone.desc}>
      In the buzzing world of social media where everyone seems to have a story to tell, it's important for food businesses to post content that's not only appetising but also retains your audience's attention. While many businesses resort to just posting pictures of their dishes, there are other content ideas that
      can make your brand truly stand out.
      </p>
      </div>

    </div>
  )
}
