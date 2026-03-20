'use client'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'

const SocialBar = () => {
  return (
    <div className="hidden md:flex fixed top-1/3 left-0 z-50 flex-col items-center space-y-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/+91-7042039777"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center rounded-r-lg bg-white text-green-600 shadow-md border border-gray-200 transition-all duration-300"
      >
        {/* Icon always visible */}
        <div className="flex items-center justify-center w-12 h-12">
          <FaWhatsapp size={20} />
        </div>
        {/* Label slides in */}
        <span className="absolute left-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 whitespace-nowrap text-sm font-medium transition-all duration-300">
          WhatsApp
        </span>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/sbs_manufacturers/?igsh=MTRjNDE4NmVhdmwydQ%3D%3D#"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center rounded-r-lg bg-white text-pink-600 shadow-md border border-gray-200 transition-all duration-300"
      >
        <div className="flex items-center justify-center w-12 h-12">
          <FaInstagram size={20} />
        </div>
        <span className="absolute left-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 whitespace-nowrap text-sm font-medium transition-all duration-300">
          Instagram
        </span>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/SBS.COMPANY777?mibextid=ZbWKwL"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center rounded-r-lg bg-white text-blue-600 shadow-md border border-gray-200 transition-all duration-300"
      >
        <div className="flex items-center justify-center w-12 h-12">
          <FaFacebookF size={20} />
        </div>
        <span className="absolute left-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 whitespace-nowrap text-sm font-medium transition-all duration-300">
          Facebook
        </span>
      </a>
    </div>
  )
}

export default SocialBar
