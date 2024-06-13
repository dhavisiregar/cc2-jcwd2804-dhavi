import React from "react";

const hero = () => {
  return (
    <div className="relative z-[-1] bg-black px-10">
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section */}
          <div className="space-y-7 text-red-700 order-2 sm:order-1">
            <h1 className="text-7xl font-bold">Welcome to Helvete Records!</h1>
            <h2 className="text-3xl">
              Record Label & Mailorder specializing in METAL.
            </h2>
          </div>

          {/* image section */}
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="relative z-30 order-1 sm:order-2"
          >
            <img
              src="https://cms.kerrang.com/images/2024/02/_1200x630_crop_center-center_82_none/Helvete-Courtesy-of-Finn-Hakon-Rodland-DayalPatterson.jpg?mtime=1706877002 "
              alt=""
              className="shadow-2xl rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
