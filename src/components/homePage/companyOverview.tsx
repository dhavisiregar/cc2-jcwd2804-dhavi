import React from "react";

const companyOverview = () => {
  return (
    <div className="relative bg-[url('/images/avhath.jpg')] px-10">
      <div className="absolute inset-0 bg-gray-300 opacity-60"></div>
      <div className="container py-16 sm:py-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section */}
          <div className="space-y-7 text-black order-2 sm:order-1">
            <h1 className="text-7xl text-center font-bold">Helvete</h1>
            <p className="font-bold text-justify">
              Helvete Records, established in 1991, is a premier record label
              and retail destination dedicated to delivering the most intense
              and authentic metal music experience. Founded by passionate
              metalheads and musicians, we began in Seattle and have expanded
              nationwide, becoming a trusted name for metal enthusiasts and
              collectors.
            </p>
          </div>

          {/* video section */}
          <div className="relative w-full overflow-hidden pt-[56.25%]">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/TnLkWvb0vBI?si=o2tuSoa2Usn72oyg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default companyOverview;
