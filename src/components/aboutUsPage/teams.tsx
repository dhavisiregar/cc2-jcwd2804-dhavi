import React from "react";

const Hero = () => {
  return (
    <div className="relative z-0 bg-[url('/images/catch.png')] bg-cover bg-center px-4 sm:px-10">
      <div className="absolute inset-0 bg-gray-300 opacity-60 z-[-1]"></div>
      <div className="container py-16 sm:py-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section */}
          <div className="space-y-7 text-black text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
              Our Team
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Here are our team members!
            </h2>
          </div>

          {/* image section */}
          <div className="mt-2 flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md p-5 m-5 bg-black flex flex-col items-center text-gray-300 text-center rounded-lg">
              <img
                src="https://media.istockphoto.com/id/1321029825/photo/portrait-of-business-team.jpg?s=612x612&w=0&k=20&c=r_mjz8nYxz7LyqL1zByr5iYxcnV48dzYwyXcXHyeE4k="
                alt="team"
                className="rounded-[20%] w-4/5"
              />
              <h3 className="mt-4 mb-2 font-bold">
                Check out our team by clicking the button!
              </h3>
              <a
                href="/teams"
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
