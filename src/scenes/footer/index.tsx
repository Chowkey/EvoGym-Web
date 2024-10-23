import Logo from "@/assets/Logo.png"

type Props = {}

const Footer = ({}: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo}></img>
          <p className="mt-2">Our gym offers state-of-the-art facilities and a wide range of fitness classes to help you achieve your health and wellness goals. Whether you're looking to build strength, improve cardiovascular endurance, or enhance flexibility, we have the right program for you. Join us for personal training sessions, group classes, and specialized workout plans tailored to your needs. Our experienced trainers are here to guide you every step of the way.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0" >
          <h1 className="font-bold text-2xl">Links</h1>
          <p className="mb-2">Be Drive</p>
          <p className="mb-2">Grab</p>
          <p className="mb-2">Uber</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h1 className="font-bold text-2xl">Contact Info</h1>
          <p className="mb-2">lekimchau211@gmail.com</p>
          <p className="mb-2">0905059106</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer