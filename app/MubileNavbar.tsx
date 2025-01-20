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
  { name: "Home Decor", href: "/Home Decor" },
  { name: "Luxuries", href: "/Luxuries" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <header className="mb-8 border-b">
      <div className="bg-[#2A254B] text-white flex justify-between items-center px-1 py-1 text-xl lg:text-xs">
        <div className="flex-1 flex justify-center text-center gap-1 sm:text-left lg:text-center md:text-center text-xs">
          <p>Free delivery on all orders over £50 with code easter checkout</p>
        </div>
        <div className="flex items-center gap-5">
          <select
            className="bg-[#2A254B] text-white border border-gray-500 rounded text-xs mr-2"
            aria-label="Language Select"
          >
            <option>English</option>
            <option>Urdu</option>
            <option>French</option>
          </select>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            HomeStore<span className="text-primary">Market</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
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

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <Button
          variant="outline"
          onClick={() => setIsMenuOpen(true)}
          className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
        >
          <ShoppingBag />
          <span className="hidden text-xs font-semibold text-gray-500 sm:block">
            Cart
          </span>
        </Button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="flex justify-end p-4">
              <Button
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-bold text-xl"
              >
                X
              </Button>
            </div>
            <div className="flex justify-center items-center h-full">
              <nav className="bg-white p-4 rounded-lg w-4/5">
                {links.map((link, idx) => (
                  <div key={idx} className="py-2">
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
            </div>
          </div>
        )}
      </div>
    </header>
  );
}