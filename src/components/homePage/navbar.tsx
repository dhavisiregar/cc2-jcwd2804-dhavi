"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    router.push("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-gray-200 text-black shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* logo section */}
          <div className="flex-shrink-0">
            <img
              onClick={handleClick}
              src="/images/logo.png"
              alt="logo"
              className="w-3/5 cursor-pointer"
            />
          </div>

          {/* hamburger menu button */}
          <div className="md:flex lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* navlinks section */}
          <nav className="hidden lg:flex lg:space-x-6">
            <a
              href="/about"
              className="text-xl font-semibold hover:text-red-700"
            >
              About
            </a>
            <a
              href="/products"
              className="text-xl font-semibold hover:text-red-700"
            >
              Products
            </a>
            <a
              href="/teams"
              className="text-xl font-semibold hover:text-red-700"
            >
              Team
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:flex lg:hidden bg-gray-200">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <a
              href="/about"
              className="text-lg font-semibold hover:text-red-700"
            >
              About Us
            </a>
            <a
              href="/products"
              className="text-lg font-semibold hover:text-red-700"
            >
              Products
            </a>
            <a
              href="/teams"
              className="text-lg font-semibold hover:text-red-700"
            >
              Team
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
