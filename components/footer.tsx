import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import LOGO from "../public/logo.jpg";

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div>
            <Image
              src={LOGO}
              alt="ELEVEN TEN"
              width={0}
              height={0}
              sizes="100vw"
              className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover"
            />
            <p className="text-background/60 font-light text-sm leading-relaxed tracking-wide">
              Premium thread manufacturing from Surat, India. Trusted by
              textile, garment, and embroidery industries worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-light text-xs mb-8 tracking-widest uppercase text-background/80">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Shop", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-background/60 hover:text-background transition-colors duration-300 font-light text-sm tracking-wide"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-light text-xs mb-8 tracking-widest uppercase text-background/80">
              Connect With Us
            </h4>
            <div className="flex gap-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-background/60 hover:text-background transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-background/60 hover:text-background transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://wa.me/917096669511?text=Hello%20Eleven%20Ten%2C%20I%20want%20more%20details"
                target="_blank"
                className="text-background/60 hover:text-background transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 my-12"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-background/50 text-xs font-light tracking-widest uppercase">
            &copy; 2024 ELEVEN TEN. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-background/50 text-xs hover:text-background transition-colors duration-300 font-light tracking-widest uppercase"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-background/50 text-xs hover:text-background transition-colors duration-300 font-light tracking-widest uppercase"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
