import {useForm} from "react-hook-form"
import { SelectedPage } from "@/shared/types"
import {motion} from "framer-motion"
import HText from "@/shared/HText"
type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {
  const inputStyles = "mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";
  const {register,
    trigger,
    formState: {errors}} = useForm();
  const onSubmit = async (e:any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className ="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => {setSelectedPage(SelectedPage.ContactUs)}}>
        {/*Header*/}
        <div className="md:w-3/5">
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE</HText>
            <p className="my-5">
            Build and Deploy a Complete Typescript Fitness Application tutorial. For frontend, we will be using React, Typescript, Vite, Tailwind, Hero Icons, Framer Motion, Form Submit, React Anchor Link Smooth Scroll. We will also be using Cloudflare Pages for deploying our app.
            </p>
        </div>
        {/*FORM AND IMAGE*/} 
        <div className="mt-10 justify-between gap-8 md:flex">
          <div>
            <form target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/leviethoang2112005@email.com"
            method="POST">
              <input className={inputStyles} type="text" placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}>
              </input>
              {errors.name && (
                <p className="mt-1 text-primary-500">
                 {errors.name.type === "required" && "This field is required."}
                 {errors.name.type === "maxLength" && "Name cannot exceed 100 characters."}
                </p>
              )}

              <input className={inputStyles} type="text" placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i ,
              })}>
              </input>
              {errors.email && (
                <p className="mt-1 text-primary-500">
                 {errors.email.type === "required" && "This field is required."}
                 {errors.email.type === "pattern" && "Invalid Email Address."}
                </p>
              )}

              <textarea className={inputStyles} 
              rows={4}
              cols={50} placeholder="MESSAGE"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}>
              </textarea>
              {errors.message && (
                <p className="mt-1 text-primary-500">
                 {errors.message.type === "required" && "This field is required."}
                 {errors.message.type === "maxLength" && "Message cannot exceed 2000 characters."}
                </p>
              )}
              <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">SUBMIT</button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs