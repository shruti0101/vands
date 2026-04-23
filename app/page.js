import Image from "next/image";
import Hero from "@/components/Landingpage/Hero";
import About from "@/components/Landingpage/About";
import Categories from "@/components/Landingpage/Categories";

import Bestseller from "@/components/Landingpage/Bestseller";
import Cta from "@/components/Landingpage/Cta";
import Whychoose from "@/components/Landingpage/Whychoose";
import Product from "@/components/Landingpage/Product";
import Faq from "@/components/Landingpage/Faq";
import TestimonialSlider from "@/components/Landingpage/Testimonials";
import Formsection from "@/components/Landingpage/Formsection";
// import Popup from "@/components/Popup";
import CityPage from "../components/City";
import ApplicationsSection from "@/components/Landingpage/Application";
import Youtube from "@/components/Landingpage/Youtube";

import Dedicated from "@/components/Landingpage/Dedicated";

import Stickybutton from "@/components/Landingpage/Stickybutton";

import WhatsAppSticky from "@/components/Landingpage/WhatsAppSticky";
import Popup from "@/components/Popup";

export default function Home() {
  return (
    <>

         <Popup/>
              <Stickybutton />
              <WhatsAppSticky/>
      {/* <Popup></Popup> */}
      <Hero />
      <Whychoose />

      <Categories />

      <About />
      <Bestseller></Bestseller>
      <Cta />

      <ApplicationsSection></ApplicationsSection>
      <Youtube />

      <Formsection></Formsection>
      <Dedicated></Dedicated>
      <TestimonialSlider></TestimonialSlider>
      <Faq></Faq>
      {/* <Countup />
     

    
      */}
      {/* <Product></Product> */}
      {/* 

     
      <CityPage /> */}
    </>
  );
}
