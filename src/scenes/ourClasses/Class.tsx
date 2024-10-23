

type Props = {
  name: string;
  description?: string;
  image: string;
}

const Class = ({
  name,description,image
}: Props) => {
  const overlayStyles = 'p-5 absolute z-30 flex h-[338px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 gap-8'
  return (
    <li className="relative mx-5 inline-block w-[450px] gap-8">
      <div className={overlayStyles}>
      <p className ="text-2xl">{name}</p>
      <p>{description}</p>
      </div>
      <img src={image}></img>
    </li>
  )
}

export default Class