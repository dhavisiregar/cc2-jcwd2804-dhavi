import React from "react";

const Hero = () => {
  return (
    <div className="relative z-0 bg-[url('/images/catch.png')] bg-cover bg-center px-4 sm:px-10">
      <div className="absolute inset-0 bg-gray-300 opacity-60 z-[-1]"></div>
      <div className="container mx-auto py-16 sm:py-0 lg:py-0 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center min-h-[400px] sm:min-h-[600px]">
          {/* text content section */}
          <div className="space-y-5 sm:space-y-7 text-black text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
              Products
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              We sell vinyl records from the world&apos;s bleakest bands!
            </h2>
          </div>

          {/* image section */}
          <div className="mt-2 sm:mt-0 flex justify-center">
            <div className="w-full sm:w-72 p-5 m-5 bg-black flex flex-col items-center text-gray-300 text-center rounded-lg">
              <img
                src="https://pbs.twimg.com/media/GJhkZKWXkAAvpvo.jpg:large"
                alt="mammoth"
                className="rounded-[20%] w-4/5"
              />
              <h3 className="mt-4 mb-2 font-bold">
                Check out our products by clicking the button!
              </h3>
              <a
                href="/products"
                className="mt-2 mb-2 bg-red-700 text-white rounded-md p-2 hover:bg-red-800"
              >
                Click Here!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
