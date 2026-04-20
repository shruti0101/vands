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

  // ✅ SEARCH STATE
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  // LIVE SEARCH LOGIC
useEffect(() => {
  if (!searchQuery.trim()) {
    setResults([]);
    return;
  }

  const filtered = allProducts.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  setResults(filtered);
}, [searchQuery]);

  // ✅ SCROLL LOGIC
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

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  };

const allProducts = categories.flatMap((cat) => cat.products || []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 font-semibold">
      {/* TOP BAR */}
      <div
        className={`hidden lg:block bg-[#c8102e] text-white transition-all duration-500 overflow-hidden ${
          showTopBar ? "h-[67px]" : "h-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[70px] px-6">
          <Image src="/vands-logo.webp" alt="Vands" width={170} height={60} />

          <div className="flex items-center gap-8 text-[13px] uppercase">
            <span className="flex items-center gap-2">
              <Phone size={14} /> +91-88820-57687
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> vandsengg@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> New Delhi - India
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle size={15} /> CONTACT US
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

      {/* MAIN NAV */}
      <div className="bg-black text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 lg:px-10 h-[58px]">

          {/* LOGO */}
          <div className="lg:hidden">
            <Image src="/vands-logo.webp" alt="Vands" width={120} height={40} />
          </div>

          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-10 text-[17px] uppercase">
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT US</Link>
            <Link href="/blogs">BLOGS</Link>
            <Link href="/contact">CONTACT US</Link>

            {/* PRODUCTS */}
            <div className="relative group">
              <button className="flex items-center gap-1">
                OUR PRODUCTS <ChevronDown size={15} />
              </button>

              <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black min-w-[230px] shadow-lg z-50">
                {categories.map((item) => (
                  <Link
                    key={item.id}
                    href={`/categories/${item.id}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* SEARCH */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative">

              {/* INPUT */}
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[240px] bg-[#e6e6e6] text-black text-sm px-4 py-2 pr-10 rounded-md outline-none"
              />

              {/* ICON */}
              <Search
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"
              />

              {/* ✅ RESULTS DROPDOWN */}
           {searchQuery && (
  <div className="absolute top-full left-0 w-full bg-white text-black mt-1 rounded-md shadow-lg z-[9999] max-h-[300px] overflow-y-auto">

    {results.length > 0 ? (
      results.map((item) => (
        <Link
          key={item.id}
          href={`/products/${item.id}`}
          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-sm"
          onClick={() => {
            setSearchQuery("");
            setResults([]);
          }}
        >
          {/* IMAGE */}
          <img
            src={item.image?.[0]?.src}
            alt={item.name}
            className="w-10 h-10 object-cover rounded"
          />

          {/* NAME */}
          <span>{item.name}</span>
        </Link>
      ))
    ) : (
      <div className="px-4 py-2 text-sm text-gray-500">
        No products found
      </div>
    )}

  </div>
)}
            </div>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918882057687"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 p-2 rounded-md"
            >
              <FaWhatsapp size={22} className="text-white" />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
{/* MOBILE MENU */}
{isMobileMenuOpen && (
  <div className="lg:hidden bg-black fixed top-[58px] left-0 w-full h-[calc(100vh-58px)] p-6 z-50 overflow-y-auto">
    <div className="flex flex-col gap-6 text-lg text-white">

      <Link href="/" onClick={closeMenu}>
        HOME
      </Link>

      {/* PRODUCTS DROPDOWN */}
      <div>
        <button
          onClick={() => setIsProductsOpen(!isProductsOpen)}
          className="w-full flex justify-between items-center"
        >
          <span>OUR PRODUCTS</span>
          <span className="text-xl">
            {isProductsOpen ? "−" : "+"}
          </span>
        </button>

        {isProductsOpen && (
          <div className="mt-3 ml-3 flex flex-col gap-3 border-l border-gray-700 pl-3">
            {categories.map((item) => (
              <Link
                key={item.id}
                href={`/categories/${item.id}`}
                onClick={closeMenu}
                className="block text-sm text-gray-300 hover:text-red-400 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link href="/about" onClick={closeMenu}>
        ABOUT US
      </Link>

      <Link href="/blogs" onClick={closeMenu}>
        BLOGS
      </Link>

      <Link href="/contact" onClick={closeMenu}>
        CONTACT US
      </Link>

    </div>
  </div>
)}
      </div>
    </header>
  );
}