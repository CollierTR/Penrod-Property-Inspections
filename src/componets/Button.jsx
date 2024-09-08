import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

export default function Button({ text = 'Click Me!', padding = 'py-2 px-4', bgColor = 'bg-primary', textColor = 'text-light', size = 'text-xl', isCallButton = '' }) {



  return (

    <button className={` border-2 border-light rounded-full ${padding} ${bgColor} ${textColor} ${size}`}>
      {isCallButton && <FontAwesomeIcon icon={faPhone} className="mr-4" />}
      {text}
    </button>

  )
}
