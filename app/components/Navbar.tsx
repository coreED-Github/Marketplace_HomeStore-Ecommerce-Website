
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Furniture", href: "/Furniture" },
  { name: "HomeDecor", href: "/Furniture" },
  { name: "Luxuries", href: "/Furniture" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mb-8 border-b">
      {/* Top Banner */}
      <div className="bg-[#2A254B] text-white flex justify-between items-center px-2 py-1 text-xs lg:text-sm">
        <p className="flex-1 text-center">Free delivery on all orders over £50 with code easter</p>
        <select
          className="bg-[#2A254B] text-white border border-gray-500 rounded text-xs"
          aria-label="Language Select"
        >
          <option>English</option>
          <option>Urdu</option>
          <option>French</option>
        </select>
      </div>

    
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
       
        <Link href="/">
          <h1 className="text-2xl md:text-3xl sm:text-1xl font-bold">
            HomeStore<span className="text-primary">Market</span>
          </h1>
        </Link>

      
        <nav className="hidden lg:flex gap-12 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Buttons */}
        <div className="flex   items-center gap-4 h-24">
          {/* Cart Button */}
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="h-10 w-10 flex justify-center items-center"
          >
            <ShoppingBag />
          </Button>
         
         
         
         
          
          <Button
            variant={"outline"}
            className="h-10 w-10 flex justify-center lg:hidden items-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </Button>
         
        </div>
      </div>

     
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg p-6">
            <button
              className="text-gray-600 text-xl font-bold mb-4 h-5"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
            <nav className="flex flex-col gap-4">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className={`text-lg font-semibold ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                  onClick={() => setMenuOpen(false)} 
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}