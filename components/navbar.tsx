"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Import } from "lucide-react";
import LOGO from "../public/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-[9999] w-full bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 sm:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src={LOGO}
                alt="ELEVEN TEN"
                width={0}
                height={0}
                sizes="100vw"
                className="w-16 sm:w-20 h-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs font-light tracking-widest text-foreground/80 hover:text-foreground transition-colors duration-300 uppercase whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="p-2 hover:text-muted-foreground transition-colors duration-300 hidden sm:flex"
              >
                <Phone className="w-5 h-5 text-foreground" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 -mr-2 hover:text-muted-foreground transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 z-[9998] bg-black/20 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          {/* Mobile Menu - Fixed Overlay */}
          <div className="fixed top-16 left-0 right-0 z-[9998] md:hidden bg-background border-b border-border shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 space-y-3 pb-6">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-light tracking-widest text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors duration-300 uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
