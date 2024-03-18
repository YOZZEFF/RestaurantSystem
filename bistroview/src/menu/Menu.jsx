import { SecOneMenu } from './SecOneMenu'
import { SecTwoMenu } from './SecTwoMenu'
import { SecThreeMenu } from './SecThreeMenu'




export const Menu = () => {
  return (
    <div>
      <SecOneMenu/>   {/* links section */}
  
      <SecTwoMenu/>


      {/* cards section */}
      <SecThreeMenu/>

    </div>
  )
}
