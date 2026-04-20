"use client";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppSticky = () => {
  return (
    <a
      href="https://wa.me/919990730939"
      target="_blank"
      className="bg-green-500 hover:bg-green-600 p-2 rounded-md flex items-center justify-center transition fixed bottom-4 right-4  lg:bottom-10 lg:right-10 z-50"
    >
      <FaWhatsapp size={40} className="text-white" />
    </a>
  );
};

export default WhatsAppSticky;
