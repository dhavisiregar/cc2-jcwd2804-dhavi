import React from "react";

const Culture = () => {
  return (
    <div className="relative z-0 bg-[url('/images/avhath.jpg')] bg-cover bg-center px-4 sm:px-10">
      <div className="absolute inset-0 bg-gray-300 opacity-60 z-[-1]"></div>
      <div className="container mx-auto py-16 sm:py-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section */}
          <div className="space-y-7 text-black text-center sm:text-left order-2 sm:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
              Our Culture
            </h1>
            <p className="text-base sm:text-lg font-bold text-justify">
              At Helvete, we value creativity, intensity, and community. Every
              team member is deeply passionate about music, which drives the
              company&apos;s mission and daily operations. Our knowledgeable
              team is dedicated to providing exceptional customer service and
              engaging with local metal scenes through events and workshops. We
              believe that a vibrant, inclusive, and supportive culture is the
              cornerstone of our success.
            </p>
          </div>

          {/* image section */}
          <div className="relative z-30 order-1 sm:order-2">
            <img
              src="/images/office.jpg"
              alt="office"
              className="shadow-2xl rounded-md w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
