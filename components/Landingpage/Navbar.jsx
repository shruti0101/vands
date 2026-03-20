"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Search,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 80) {
        // Scroll DOWN → hide red bar
        setShowTopBar(false);
      } else {
        // Scroll UP → show red bar
        setShowTopBar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 font-semibold">

      {/* TOP RED BAR */}
      <div
        className={`bg-[#c8102e] font-oswald text-white transition-all duration-500 overflow-hidden ${
          showTopBar ? "h-[67px]" : "h-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[70px] px-6">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/vands-logo.webp"
              alt="Vands"
              width={170}
              height={60}
              priority
            />
          </div>

          {/* RIGHT LINKS */}
          <div className="flex font-[var(--font-oswald)] items-center gap-8 text-[13px] uppercase tracking-wide">

            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 cursor-pointer">
              <Phone size={14}/>
              +91-88820-57687
            </span>

            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 cursor-pointer">
              <Mail size={14}/>
              vandsengg@gmail.com
            </span>

            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 cursor-pointer">
              <MapPin size={14}/>
              New Delhi - India
            </span>

            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 cursor-pointer">
              <MessageCircle size={15}/>
              CONTACT US
            </span>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 ml-4">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <div key={i} className="p-2 rounded-full bg-white/30 hover:bg-white/50 transition cursor-pointer">
                  <Icon size={15}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN BLACK NAV */}
      <div className="bg-black text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-10 h-[58px]">

          {/* NAV LINKS */}
          <nav className="flex font-oswald items-center gap-10 text-[17px] uppercase tracking-wide">

            {["HOME", "ABOUT US", "BLOGS", "CONTACT US"].map((item, i) => (
              <button key={i} className="relative group hover:text-gray-300">
                <span className="before:absolute before:-top-4 before:left-0 before:h-[3px] before:w-0 before:bg-white before:transition-all before:duration-300 group-hover:before:w-full">
                  {item}
                </span>
              </button>
            ))}

            {/* DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-300">
                OUR PRODUCTS <ChevronDown size={15}/>
              </button>

              <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black min-w-[230px] shadow-lg">
                <ul className="flex flex-col text-[15px] uppercase">
                  {[
                    "airless spray Machine",
                    "wall putty spray Machine",
                    "airless painting Machine",
                  
                  ].map((item, i) => (
                    <li key={i} className="px-4 py-2 capitalize hover:bg-gray-100 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          {/* SEARCH + WHATSAPP */}
          <div className="flex items-center gap-8">

            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[240px] bg-[#e6e6e6] text-black text-sm px-4 py-2 pr-10 outline-none rounded-md"
              />
              <Search
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"
              />
            </div>

            <a
              href="https://wa.me/918882057687"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 p-2 rounded-md flex items-center justify-center transition"
            >
              <FaWhatsapp size={22} className="text-white"/>
            </a>

          </div>
        </div>
      </div>

    </header>
  );
}