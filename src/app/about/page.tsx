import Navbar from "@/components/homePage/navbar";
import CompanyHistory from "@/components/aboutUsPage/companyHistory";
import Team from "@/components/aboutUsPage/team";
import Culture from "@/components/aboutUsPage/culture";
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
        <Team />
      </div>
      <div>
        <Culture />
      </div>
    </div>
  );
};

export default page;
