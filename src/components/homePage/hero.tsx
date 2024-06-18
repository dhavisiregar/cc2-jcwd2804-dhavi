import React from "react";

const Hero = () => {
  return (
    <div className="relative z-[-1] bg-[url('/images/avhath.jpg')] bg-cover bg-center px-6 mt-10 md:px-10 md:mt-12 lg:mt-0">
      <div className="absolute inset-0 bg-gray-300 opacity-60 z-[-1]"></div>
      <div className="container mx-auto py-16 sm:py-0 lg:py-0 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center min-h-[400px] sm:min-h-[600px] lg:min-h-[700px] shadow-2xl">
          {/* Text content section */}
          <div className="space-y-7 text-black order-2 sm:order-1 px-4 sm:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center sm:text-left">
              Velkommen til Helvete Records!
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center sm:text-left">
              Record Label & Mailorder specializing in{" "}
              <span className="text-red-700">METAL.</span>
            </h2>
          </div>

          {/* Image section */}
          <div className="relative z-30 order-1 sm:order-2">
            <img
              src="https://cms.kerrang.com/images/2024/02/_1200x630_crop_center-center_82_none/Helvete-Courtesy-of-Finn-Hakon-Rodland-DayalPatterson.jpg?mtime=1706877002"
              alt="Helvete Records"
              className="shadow-2xl rounded-md max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
