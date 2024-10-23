import { AcademicCapIcon, UserGroupIcon, HomeModernIcon} from "@heroicons/react/24/solid"
import { SelectedPage } from "@/shared/types"
import HText from "@/shared/HText"
import {motion, stagger} from 'framer-motion'
import {BenefitType} from "@/shared/types"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="w-6 h-6"/>,
    title: "State of the Art Facilities",
    description: "Our gym is equipped with the latest fitness equipment to help you reach your goals. We have everything you need to get in shape and stay healthy."
  },
  {
    icon: <UserGroupIcon className="w-6 h-6"/>,
    title: "100's of Diverse Classes",
    description: "Our staff is here to help you with anything you need. Whether you have questions about your workout or need help with your nutrition, we are here to help."
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6"/>,
    title: "Expert and Pro Trainers",
    description: "Our trainers are certified fitness professionals who are here to help you reach your goals. They will work with you to create a personalized workout plan that is tailored to your needs."
  }
];

const container = {
  hidden: {},
  visible:{
    transition: { staggerChildren: 0.2}
  }
}
type Props = {
  setSelectedPage: (value: SelectedPage) => void,

}

const Benefits= ({
  setSelectedPage,
}: Props) => {
  return (
    <section id="about" 
    className="mx-auto min-h-full w-5/6 py-20" 
    >
      <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.About)}>
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST GYM</HText>
          <p className = "my-5 text-sm">
            We are more than just a gym. We are a community of like-minded individuals who are here to support each other in our fitness journeys. Our members are our family, and we are here to help you reach your goals.
          </p>
        </div>
          {/* Benefits */}
          <motion.div className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount: 0.5}}
          variants={container}>
            {benefits.map((benefit: BenefitType) => 
            (<Benefit
              key = {benefit.title}
              icon = {benefit.icon}
              title = {benefit.title}
              description = {benefit.description}
              setSelectedPage={setSelectedPage}
            />))
            }
          </motion.div>
        {/* Graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphics */}
          <img className="mx-auto" alt = "image "src={BenefitPageGraphic}></img>
          {/* Description */}
          <div>
            {/* Heading */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:z-[-1] before:content-abstractwaves">
                <div>
                  <HText>MILLIONS OF HAPPY MEMBERS GETTING {""}
                  <span className="text-primary-500">FIT</span> WITH US
                  </HText>
                </div>
              </div>
            </div>
            {/* Description */}
            <div>
              <p className="my-5">The fitness industry is constantly evolving, and we strive to stay ahead of the curve. Our team of experts is dedicated to providing you with the latest fitness trends and techniques. Whether you're a beginner or an experienced athlete, we have something for everyone. From high-intensity interval training to yoga and pilates, our diverse range of classes will keep you motivated and engaged. Join our community today and start your fitness journey with us!</p>
              <p className="mb-5"> From high-intensity interval training to yoga and pilates, our diverse range of classes will keep you motivated and engaged. Join our community today and start your fitness journey with us!</p>
            </div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>
            </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits