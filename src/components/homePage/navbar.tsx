"use client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
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

          {/* navlinks section */}
          <nav className="md:flex md:space-x-6 sm:flex sm:space-x-3">
            <a
              href="/home"
              className="text-xl font-semibold hover:text-red-700"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-xl font-semibold hover:text-red-700"
            >
              About Us
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
    </div>
  );
};

export default Navbar;
