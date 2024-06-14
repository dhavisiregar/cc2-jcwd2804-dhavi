import React from "react";

const culture = () => {
  return (
    <div className="relative z-[-1] bg-[url('/images/avhath.jpg')] px-10">
      <div className="absolute inset-0 bg-gray-300 opacity-60 z-[-1]"></div>
      <div className="container py-16 sm:py-0 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section */}
          <div className="space-y-7 text-black order-2 sm:order-1">
            <h1 className="text-7xl text-center font-bold">Our Culture</h1>
            <p className="font-bold text-justify">
              At Helvete, we value creativity, intensity, and community. Every
              team member is deeply passionate about music, which drives the
              company's mission and daily operations. Our knowledgeable team is
              dedicated to providing exceptional customer service and engaging
              with local metal scenes through events and workshops, we believe
              that a vibrant, inclusive, and supportive culture is the
              cornerstone of our success.
            </p>
          </div>

          {/* image section */}
          <div className="relative z-30">
            <img
              src="/images/office.jpg"
              alt="office"
              className="shadow-2xl rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default culture;
