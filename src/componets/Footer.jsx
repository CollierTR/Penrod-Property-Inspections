import logo from '../../public/PenrodRed.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faEnvelope, faPhone, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

  return (
    <div>
      <div className="text-light flex flex-col justify-center place-items-center py-10 bg-primary border-y-light border-y-2">

        <div className="flex flex-col sm:flex-row justify-center place-items-center sm:place-items-start gap-20 lg:gap-36 2xl:gap-48 m-4">
          {/*SECT: Logo*/}
          <img src={logo} alt="" className='-mt-5 hidden sm:block w-1/6' />
          {/*SECT: Contact us*/}
          <div className="flex flex-col gap-4">
            <h3 className='text-xl font-bold'>CONTACT US</h3>
            <a href="tel:6604122963">
              <div className='flex place-items-center gap-4'><FontAwesomeIcon icon={faPhone} transform='shrink-7' mask={faCircle} size='2x' /><p className='text-lg'>(660) 412-2963</p></div>
            </a>
            <a href="mailto:penrodseptic@gmail.com">
              <div className='flex place-items-center gap-4'><FontAwesomeIcon icon={faEnvelope} transform='shrink-7' mask={faCircle} size='2x' /><p className='text-lg'>penrodseptic@gmail.com</p></div>
            </a>
          </div>
          {/*SECT: Stay in touch*/}
          <div className="hidden sm:flex flex-col gap-4 justify-center place-items-center">
            <h3 className='text-xl font-bold'>STAY IN TOUCH</h3>
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faFacebook} size='2x' />
              <FontAwesomeIcon icon={faQuestion} transform='shrink-7' mask={faCircle} size='2x' />
              <FontAwesomeIcon icon={faQuestion} transform='shrink-7' mask={faCircle} size='2x' />
            </div>
          </div>
        </div>

        {/*SECT: Bottom line and that which follows*/}
        <div className="sm:border-t-2 flex flex-row-reverse lg:flex-row justify-center place-items-center gap-4 sm:gap-20 lg:gap-36 2xl:gap-48 p-4">
          <div className="hidden lg:flex justify-center place-items-center gap-4">
            <Link to={'/'}>HOME</Link>
            <Link to={'/services'}>SERVICES</Link>
            <Link to={'/about'}>ABOUT</Link>
            <Link to={'/contact'}>CONTACT</Link>
          </div>
          <p>Copyright © 2024</p>
          <a href="https://tristancollier.com" target='_blank'>
            <p className='underline'>Website by Collier Web Services</p>
          </a>

        </div>

      </div>
      <div className="bg-dark h-6"></div>

    </div >
  )
}
