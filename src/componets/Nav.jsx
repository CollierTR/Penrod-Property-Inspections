import { NavLink } from "react-router-dom"
import logoClose from "/PenrodClose.png"
import redLogo from "/PenrodRed.png"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NavMenu from "./NavMenu"
import { useState } from "react"


export default function Nav() {

  const [menuState, setMenuState] = useState(false)

  return (

    <>
      {//SECT: This is the mobile nav [open element]
      }
      {menuState && <NavMenu setMenuState={setMenuState} />
      }


      {//SECT: This is the mobile nav [closed element]
      }
      <div className="flex border-b-light border-b-4 bg-primary h-20 sm:hidden justify-between place-items-center text-light px-5">

        <img src={logoClose} width={'60px'} alt="" />
        <FontAwesomeIcon onClick={() => (setMenuState(true))} icon={faBars} size="3x" />


      </div>




      {//SECT: This is the desktop nav element]
      }
      <div className="bg-primary hidden sm:flex h-14 text-light justify-evenly place-items-center">


        <div className="flex justify-center gap-10  md:gap-12 lg:gap-20 xl:gap-28">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/services'}>Services</NavLink>
        </div>


        <div className="relative z-30">
          <img src={redLogo} alt="" className=" relative z-30 top-10 w-[130px] lg:w-[150px] xl:w-[160px]" />
        </div>


        <div className="flex justify-center gap-10  md:gap-12 lg:gap-20 xl:gap-28">
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/contact'}>Contact</NavLink>
        </div>

      </div>



      {//SECT: This is the desktop nav elements bottom svg curve]
      }
      <div className="hidden sm:block relative">
        <div className="custom-shape-divider-top-1724517384 ">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    </>
  )
}
