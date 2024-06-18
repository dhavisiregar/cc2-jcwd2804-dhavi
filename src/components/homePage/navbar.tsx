"use client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="fixed w-screen z-20 bg-gray-200 text-black shadow-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="container flex justify-between items-center py-2 px-10">
        {/* logo section */}
        <div className="font-bold text-4xl">
          <img
            onClick={handleClick}
            src="/images/logo.png"
            alt=""
            className="w-3/5 cursor-pointer"
          />
        </div>

        {/* navlinks section */}
        <div>
          <ul className="flex gap-10">
            <li>
              <a
                href="/home"
                className="inline-block hover:text-red-700 text-xl font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="inline-block hover:text-red-700 text-xl font-semibold"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="inline-block hover:text-red-700 text-xl font-semibold"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/teams"
                className="inline-block hover:text-red-700 text-xl font-semibold"
              >
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
