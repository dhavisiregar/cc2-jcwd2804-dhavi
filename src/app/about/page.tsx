import Navbar from "@/components/homePage/navbar";
import CompanyHistory from "@/components/aboutUsPage/companyHistory";
import Culture from "@/components/aboutUsPage/culture";
import Teams from "@/components/aboutUsPage/teams";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div>
        <CompanyHistory />
      </div>
      <div>
        <Teams />
      </div>
      <div>
        <Culture />
      </div>
    </div>
  );
};

export default page;
