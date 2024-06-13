import Navbar from "@/components/homePage/navbar";
import Home from "@/components/homePage/hero";
import React from "react";
import Company from "@/components/homePage/companyOverview";
import Testimonials from "@/components/homePage/testimonials";
import Products from "@/components/homePage/products";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Products />
      </div>
      <div>
        <Company />
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default page;
