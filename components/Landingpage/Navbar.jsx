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
  Menu,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { categories } from "@/Data";

export default function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 80) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close everything
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  };

  let category = categories.map((cat) => cat);

  return (
    <header className="w-full fixed top-0 left-0 z-50 font-semibold">
      {/* TOP RED BAR */}
      <div
        className={`hidden lg:block bg-[#c8102e] font-oswald text-white transition-all duration-500 overflow-hidden ${
          showTopBar ? "h-[67px]" : "h-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[70px] px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/vands-logo.webp"
              alt="Vands"
              width={170}
              height={60}
              priority
            />
          </div>

          <div className="flex font-[var(--font-oswald)] items-center gap-8 text-[13px] uppercase tracking-wide">
            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 cursor-pointer">
              <Phone size={14} />
              +91-88820-57687
            </span>
            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 cursor-pointer">
              <Mail size={14} />
              vandsengg@gmail.com
            </span>
            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 cursor-pointer">
              <MapPin size={14} />
              New Delhi - India
            </span>
            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 cursor-pointer">
              <MessageCircle size={15} />
              CONTACT US
            </span>
            <div className="flex items-center gap-3 ml-4">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-full bg-white/30 hover:bg-white/50 transition cursor-pointer"
                  >
                    <Icon size={15} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN BLACK NAV */}
      <div className="bg-black text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 lg:px-10 h-[58px]">
          {/* MOBILE LOGO */}
          <div className="lg:hidden">
            <Image src="/vands-logo.webp" alt="Vands" width={120} height={40} />
          </div>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex font-oswald items-center gap-10 text-[17px] uppercase tracking-wide">
            {[
              { name: "HOME", href: "/" },
              { name: "ABOUT US", href: "#" },
              { name: "BLOGS", href: "/blogs" },
              { name: "CONTACT US", href: "/contact" },
            ].map((item, i) => (
              <button key={i} className="relative group hover:text-gray-300">
                <Link href={item.href}>{item.name}</Link>
              </button>
            ))}

            {/* DESKTOP DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-300">
                OUR PRODUCTS <ChevronDown size={15} />
              </button>
              <div className="absolute left-0 top-full rounded-md hidden group-hover:block z-50 bg-white text-black min-w-[230px] shadow-lg">
                <ul className="flex flex-col text-[15px] uppercase  ">
                  {category.map((item, i) => (
                    <Link
                      href={`/categories/${item.id}`}
                      key={i}
                      className="px-4 py-2 capitalize hover:bg-gray-100 w-full cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          {/* SEARCH + WHATSAPP */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative z-5">
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
            
             <a href="https://wa.me/918882057687"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 p-2 rounded-md flex items-center justify-center transition"
            >
              <FaWhatsapp size={22} className="text-white" />
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black fixed top-[58px] left-0 w-full h-[calc(100vh-58px)] p-6 overflow-y-auto z-40 border-t border-gray-800">
            <div className="flex flex-col gap-6 font-oswald uppercase text-lg">

              <Link href="/" onClick={closeMenu}>HOME</Link>

              <Link href="/about" onClick={closeMenu}>ABOUT US</Link>

              <Link href="/blogs" onClick={closeMenu}>BLOGS</Link>

              <Link href="/contact" onClick={closeMenu}>CONTACT US</Link>

              {/* MOBILE PRODUCTS ACCORDION */}
              <div className="flex flex-col gap-2">
                <button
                  className="flex items-center gap-1 hover:text-gray-300 w-fit"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  OUR PRODUCTS
                  <ChevronDown
                    size={15}
                    className={`relative group transition-transform duration-300 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ACCORDION DROPDOWN */}
                {isProductsOpen && (
                  <div className="flex flex-col group-hover:block bg-white text-black rounded-md overflow-hidden ml-2">
                    {category.map((item) => (
                      <Link
                        key={item.id}
                        href={`/categories/${item.id}`}
                        className="px-4 py-2 capitalize text-[15px] hover:bg-gray-100 border-b border-gray-200 last:border-none"
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}