import Button from "./Button"
import { Link } from "react-router-dom"

const genericCard = {
  title: 'Card Title',
  button: 'Learn more',
  text: 'This is a paragraph. text will be determined later. This is a paragraph. text will be determined later.',
  img: 'https://placehold.co/400x300?text=Your+Image+Here'
}

export default function ServiceCard({ href = '#', img = genericCard.img, buttonText = genericCard.button, title = genericCard.title, text = genericCard.text }) {


  return (
    <div className="flex flex-col bg-light  justify-center place-items-center w-10/12 sm:w-1/2 lg:w-1/5">

      <img src={img} alt="" className="w-full" />

      <div className="flex flex-col gap-4 justify-center place-items-center p-6">
        <h3 className="text-2xl sm:text-3xl">{title}</h3>
        <p className="text-pretty">{text}</p>
        <Link to={`/services/${href}`}>
          <Button text={buttonText} bgColor="bg-dark" size="text-lg" padding="px-3 py-1" />
        </Link>
      </div>

    </div>
  )
}
