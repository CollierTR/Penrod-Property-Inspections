import { NavLink } from "react-router-dom"
import { RemoveScrollBar } from "react-remove-scroll-bar"
import logo from '../../public/PenrodClose.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"

export default function NavMenu({ setMenuState }) {


  return (
    <div className="text-light text-5xl gap-8 place-items-center py-14 flex flex-col bg-primary w-screen h-screen z-40 overflow-hidden fixed">

      <img src={logo} alt="" className="w-[100px] mb-4" />

      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive ? "text-activeLink" : ""}
        onClick={() => (setMenuState(false))}>
        Home
      </NavLink>

      <NavLink
        to={'/services'}
        className={({ isActive }) =>
          isActive ? "text-activeLink" : ""}
        onClick={() => (setMenuState(false))}>
        Services
      </NavLink>

      <NavLink
        to={'/about'}
        className={({ isActive }) =>
          isActive ? "text-activeLink" : ""}
        onClick={() => (setMenuState(false))}>
        About
      </NavLink>

      <NavLink
        to={'/contact'}
        className={({ isActive }) =>
          isActive ? "text-activeLink" : ""}
        onClick={() => (setMenuState(false))}>
        Contact
      </NavLink>

      <FontAwesomeIcon onClick={() => (setMenuState(false))} icon={faClose} className="absolute top-6 right-6" />

      <RemoveScrollBar />

    </div>
  )
}
