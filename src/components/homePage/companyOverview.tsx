import React from "react";

const companyOverview = () => {
  return (
    <div className="relative z-[-1] bg-black px-10">
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section */}
          <div className="space-y-7 text-red-700 order-2 sm:order-1">
            <h1 className="text-7xl font-bold">Company Overview</h1>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              magnam, in expedita doloribus, et asperiores temporibus odit a
              iusto eaque architecto voluptatum modi? Itaque accusantium
              pariatur quisquam. Numquam, impedit est.
            </p>
          </div>

          {/* image section */}
          {/* <div className="relative z-30 order-1 sm:order-2"></div> */}
        </div>
      </div>
    </div>
  );
};

export default companyOverview;
