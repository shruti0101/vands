"use client";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppSticky = () => {
  return (<>
    <a href="https://wa.me/919990730939"
      target="_blank"
      className="bg-green-500 hover:bg-green-600 p-2 rounded-full flex items-center justify-center transition fixed bottom-4 right-4  lg:bottom-20 lg:right-10 z-50 animate-bounce"
    >
      <FaWhatsapp size={35} className="text-white" />
    </a>

    <a href="tel:9990730939"
      target="_blank"
      className="bg-red-500 hover:bg-red-600 p-2 rounded-full flex items-center justify-center transition fixed bottom-4 right-4  lg:bottom-5 lg:right-10 z-50 animate-bounce"
    >
      <FaWhatsapp size={35} className="text-white" />
    </a>
  </>);
};

export default WhatsAppSticky;
