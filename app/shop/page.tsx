"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

const products = [
  {
    id: 1,
    name: "Multicolor Thread (300 m Pack of 100)",
    description: "100 × 1 · Vibrant assorted colors",
    badge: "100 Pack",
    image: "/products/100x4.jpeg",
  },
  {
    id: 2,
    name: "Navy Thread (500 m Pack of 10)",
    description: "ET-02 · Deep navy finish",
    badge: "10 Pack",
    image: "/products/ET-02.jpeg",
  },
  {
    id: 3,
    name: "Rani Thread (500 m Pack of 10)",
    description: "ET-13 · Rich rani pink tone",
    badge: "10 Pack",
    image: "/products/ET-13.jpeg",
  },
];

const filterLabels: string[] = [
  "All",
  "Multicolor",
  "Navy",
  "Rani",
  "500m Packs",
  "300m Packs",
];

function getPillClass(index: number): string {
  if (index === 0) {
    return "px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border flex-shrink-0 bg-gray-900 text-white border-gray-900";
  }
  return "px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border flex-shrink-0 bg-white text-gray-500 border-gray-200 hover:border-gray-400";
}

function handleInquiryClick(e: React.MouseEvent<HTMLAnchorElement>): void {
  e.stopPropagation();
}

function WhatsAppIcon(): JSX.Element {
  return (
    <svg
      className="w-4 h-4 fill-white flex-shrink-0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ShopPage(): JSX.Element {
  return (
    <main className="w-full bg-[#faf9f7]">
      <Navbar />

      {/* Shop Header */}
      <div className="text-center py-10 px-4 bg-gradient-to-b from-orange-50 to-[#faf9f7]">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-2">
          Our Products
        </h1>
        <p className="text-sm text-gray-400 font-light tracking-wide">
          Premium quality threads for every craft
        </p>
        <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Filter Pills */}
      <div className="flex gap-2 px-4 pb-4 overflow-x-auto max-w-7xl mx-auto">
        {filterLabels.map(function (label: string, i: number) {
          return (
            <button key={label} className={getPillClass(i)}>
              {label}
            </button>
          );
        })}
      </div>

      {/* Product Count */}
      <p className="text-xs text-gray-400 font-light px-4 pb-3 max-w-7xl mx-auto">
        {products.length} products
      </p>

      {/* Products Grid */}
      <div className="px-3 pb-16 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {products.map(function (product) {
            const waMessage = encodeURIComponent(
              "Hello, I'm interested in " +
                product.name +
                ". Please share more details.",
            );
            const waLink = "https://wa.me/919876543210?text=" + waMessage;

            return (
              <Link
                key={product.id}
                href={"/shop/" + product.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    {product.badge}
                  </span>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-3 sm:p-4 flex flex-col flex-grow gap-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-light tracking-wide flex-grow">
                    {product.description}
                  </p>

                  {/* WhatsApp Button */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleInquiryClick}
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 sm:py-2.5 px-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold tracking-wide shadow hover:shadow-md hover:scale-105 transition-all duration-200 mt-auto"
                  >
                    <WhatsAppIcon />
                    Inquiry Now
                  </a>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}
