import React from "react";

const hero = () => {
  return (
    <div className="bg-gray-300 px-10">
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section */}
          <div className="space-y-7 text-black">
            <h1 className="text-7xl font-bold">Products</h1>
            <h2 className="text-3xl font-bold">
              We sell vinyl records from the world's bleakest bands!
            </h2>
          </div>

          {/* image section */}
          <div className="mt-2">
            <div className="w-72 p-5 m-5 bg-black flex flex-col items-center text-gray-300 text-center rounded-lg">
              <img
                src="https://pbs.twimg.com/media/GJhkZKWXkAAvpvo.jpg:large"
                alt="mammoth"
                className="rounded-[20%] w-4/5"
              />
              <h3 className="mt-4 mb-2 font-bold">
                Check out our products by clicking the button!
              </h3>
              <a
                href="/products"
                className="mt-2 mb-2 bg-red-700 text-white rounded-md p-2 hover:bg-red-800"
              >
                Click Here!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
