import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faCircle, faAward, faMagnifyingGlass, faClipboard } from "@fortawesome/free-solid-svg-icons"

export default function TriCard() {



  return (


    <div className="py-20 flex w-screen bg-primary flex-col justify-center place-items-center text-center gap-8 text-light border-y-2 border-y-light">

      {
        //SECT: Title  
      }
      <h2 className="text-2xl sm:text-4xl px-14">SECURE INVESTMENT, SECURE FUTURE</h2>

      {
        //SECT: Home icon & divider  
      }
      <div className="flex justify-center place-items-center gap-4 w-full">
        <div className="border-2 border-light w-1/6 lg:w-1/4"></div>
        <FontAwesomeIcon icon={faHouse} mask={faCircle} transform='shrink-6' size="3x" />
        <div className="border-2 border-light w-1/6 lg:w-1/4"></div>
      </div>

      {
        //SECT: Three cards  
      }
      <div className="flex flex-col lg:flex-row justify-center place-items-center lg:place-items-stretch gap-4 text-dark w-full">
        <div className="flex flex-col bg-light p-6 gap-4 justify-center place-items-center w-10/12 sm:w-1/2 lg:w-1/5">
          <FontAwesomeIcon icon={faAward} transform='shrink-6' mask={faCircle} size="3x" />
          <h3 className="text-2xl sm:text-3xl">WHY HIRE US?</h3>
          <p>This is a paragraph. text will be determined later. This is a paragraph.</p>
        </div>
        <div className="flex flex-col bg-light p-6 gap-4 justify-center place-items-center w-10/12 sm:w-1/2 lg:w-1/5">
          <FontAwesomeIcon icon={faMagnifyingGlass} transform='shrink-6' mask={faCircle} size="3x" />
          <h3 className="text-2xl sm:text-3xl">WHAT WE INSPECT</h3>
          <p>This is a paragraph. text will be determined later. This is a paragraph.</p>
        </div>
        <div className="flex flex-col bg-light p-6 gap-4 justify-center place-items-center w-10/12 sm:w-1/2 lg:w-1/5">
          <FontAwesomeIcon icon={faClipboard} transform='shrink-6' mask={faCircle} size="3x" />
          <h3 className="text-2xl sm:text-3xl">SAMPLE REPORT</h3>
          <p>This is a paragraph. text will be determined later. This is a paragraph.</p>
        </div>
      </div>

      {
        //SECT: Button for Schedule  
        //<Button text="SCHEDULE NOW" bgColor="bg-dark" padding="py-2 px-4" />
      }

    </div>

  )
}
