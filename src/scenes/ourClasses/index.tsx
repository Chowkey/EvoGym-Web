import { SelectedPage } from "@/shared/types"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import { ClassType } from "@/shared/types"
import Class from "./Class"
const classes = [
  {
    name: "Weight Training Classes",
    description: "Weight training classes are designed to help participants build strength and muscle mass. These classes typically involve lifting weights or using resistance bands to target different muscle groups.",
    image: image1,
  },
  {
    name: "Second Classes",
    description: "Weight training classes are designed to help participants build strength and muscle mass. These classes typically involve lifting weights or using resistance bands to target different muscle groups.",
    image: image2,
  },
  {
    name: "Third Classes",
    description: "Weight training classes are designed to help participants build strength and muscle mass. These classes typically involve lifting weights or using resistance bands to target different muscle groups.",
    image: image3,
  },
  {
    name: "Fourth Classes",
    description: "Weight training classes are designed to help participants build strength and muscle mass. These classes typically involve lifting weights or using resistance bands to target different muscle groups.",
    image: image4,
  },
  {
    name: "Fifth Classes",
    description: "Weight training classes are designed to help participants build strength and muscle mass. These classes typically involve lifting weights or using resistance bands to target different muscle groups.",
    image: image5,
  },
  {
    name: "Sixth",
    description: "Weight training classes are designed to help participants build strength and muscle mass. These classes typically involve lifting weights or using resistance bands to target different muscle groups.",
    image: image6,
  },
]
type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => {setSelectedPage(SelectedPage.Ourclasses)}}>
        <div className = "mx-auto w-5/6">
          <HText>Our Classes</HText>
          <p className = "py-5">
          Gym classes offer a variety of fitness programs designed to help individuals achieve their health and wellness goals. From high-intensity interval training to strength training and yoga, these classes provide a structured and motivating environment for participants to improve their physical fitness. With experienced instructors guiding the sessions, participants can learn proper exercise techniques and receive personalized guidance. Whether you're looking to build strength, improve cardiovascular endurance, or enhance flexibility, gym classes offer a diverse range of options to suit different fitness levels and preferences.
          </p>
        </div>
      </motion.div>
      <div className = "mt-10 w-full overflow-x-auto classScroll ">
        <ul className = "whitespace-nowrap">
          {classes.map((item: ClassType, index) =>(
            <Class key={ `${item.name}-${index}`} name={item.name}
            description = {item.description}
            image={item.image}
            ></Class>
          ) )}
        </ul>
      </div>
    </section>
  )
}

export default OurClasses