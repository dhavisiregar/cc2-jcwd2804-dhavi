const Navbar = () => {
  return (
    <div className="fixed w-screen bg-red-700 text-black shadow-md sm:grid-cols-2">
      <div className="container flex justify-between px-10 py-4 sm:py-3">
        {/* logo section */}
        <div className="font-bold text-4xl">
          <a
            href="/home"
            className="inline-block hover:text-red-600 font-semibold"
          >
            Helvete
          </a>
        </div>

        {/* navlinks section */}
        <div>
          <ul className="flex gap-10">
            <li>
              <a
                href="/home"
                className="inline-block hover:text-red-600 text-xl font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="inline-block hover:text-red-600 text-xl font-semibold"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="inline-block hover:text-red-600 text-xl font-semibold"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/teams"
                className="inline-block hover:text-red-600 text-xl font-semibold"
              >
                Teams
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
