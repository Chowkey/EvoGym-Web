export enum SelectedPage {
  Home="home",
  About= "about",
  Ourclasses= "ourclasses",
  ContactUs= "contactus",
}

export interface BenefitType {
  icon: JSX.Element,
  title: string,
  description: string,
}

export interface ClassType {
  name: string,
  description?: string, //? means you can have it or not
  image: string,
}