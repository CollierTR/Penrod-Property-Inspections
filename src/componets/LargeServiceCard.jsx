import Button from "./Button";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const genericCard = {
  title: 'Card Title',
  button: 'Learn more',
  text: 'This is a paragraph. text will be determined later. This is a paragraph. text will be determined later.',
  img: 'https://placehold.co/400x250?text=Your+Image+Here'
}

export default function LargeServiceCard({ img = genericCard.img, buttonText = genericCard.button, title = genericCard.title, text = genericCard.text, href = "#" }) {



  return (
    <div className=" flex-grow bg-light w-full border-dark border-2">
      <div className="flex flex-col bg-light  justify-center place-items-center w-full">

        <div className="h-96 bg-dark w-full">
          <img src={img} alt="" className="size-full" />
        </div>

        <div className="flex flex-col gap-4 justify-center place-items-center p-6">
          <h3 className="text-2xl sm:text-3xl text-center">{title}</h3>
          <p className="text-pretty text-center">{text}</p>
          <Link to={`${href}`}>
            <Button text={buttonText} bgColor="bg-dark" size="text-lg" padding="px-3 py-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
