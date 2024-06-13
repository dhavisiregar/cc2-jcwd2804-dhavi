import Navbar from "@/components/homePage/navbar";
import Products from "@/components/products/product";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default page;
