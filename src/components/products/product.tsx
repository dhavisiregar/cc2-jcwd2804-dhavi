import React from "react";

const products = () => {
  return (
    <section className="bg-gray-300 p-32">
      <h2 className="text-7xl font-bold text-center p-0 text-black">
        Products
      </h2>
      <div className="flex flex-wrap mt-2 justify-center ">
        <div className="w-72 p-5 m-5 bg-black flex flex-col items-center text-gray-300 text-center rounded-lg">
          <img
            src="https://pbs.twimg.com/media/GJhkZKWXkAAvpvo.jpg:large"
            alt="mammoth"
            className="rounded-[20%] w-4/5"
          />
          <h3 className="mt-4 mb-2 font-bold">
            Mammoth Grinder <br /> "Cosmic Crypt" LP
          </h3>
          <p className="mt-2 mb-2">
            Underground extreme metal trio MAMMOTH GRINDER return after five
            long years with their fourth full-length Cosmic Crypt, a non-stop,
            meteoric force of aggression and mayhem.
          </p>
          <button className="mt-2 mb-2 bg-red-700 text-white rounded-md p-2 hover:bg-red-800">
            $35.00
          </button>
        </div>
        <div className="w-72 p-5 m-5 bg-black flex flex-col items-center text-gray-300 text-center rounded-lg">
          <img
            src="/images/gatecreeper-1.png"
            alt="gatecreeper"
            className="rounded-[20%] w-4/5"
          />
          <h3 className="mt-4 mb-2 font-bold">
            Gatecreeper "Dark Superstition" LP
          </h3>
          <p className="mt-2 mb-2">
            Dark Superstition was recorded at God City Studios in Salem,
            Massachusetts, with Converge guitarist Kurt Ballou, who also mixed
            the album. The record is a direct result of Gatecreeper's
            experience, musical refinement, and commitment to death metal.
          </p>
          <button className="mt-2 mb-2 bg-red-700 text-white rounded-md p-2 hover:bg-red-800">
            $39.99
          </button>
        </div>
        <div className="w-72 p-5 m-5 bg-black flex flex-col items-center text-gray-300 text-center rounded-lg">
          <img
            src="/images/agri-1.png"
            alt="agriculture"
            className="rounded-[20%] w-10/12"
          />
          <h3 className="mt-4 mb-2 font-bold">Agriculture "Agriculture" LP</h3>
          <p className="mt-2 mb-2">
            For something to be “ecstatic,” the feelings and emotions it evokes
            must transcend what we tend to experience most regularly in our
            lives. Ecstatic joy isn't just happiness; it's a feeling of
            jubilation which impacts us emotionally and in a metaphysical,
            arguably spiritual sense too.
          </p>
          <button className="mt-2 mb-2 bg-red-700 text-white rounded-md p-2 hover:bg-red-800">
            $29.99
          </button>
        </div>
        <div className="w-72 p-5 m-5 bg-black flex flex-col items-center text-gray-300 text-center rounded-lg">
          <img
            src="https://images.tokopedia.net/img/cache/700/VqbcmM/2023/2/17/c1e0b638-6468-47b7-ac73-e3b10f82cecd.jpg"
            alt="avhath"
            className="rounded-[20%] w-4/5"
          />
          <h3 className="mt-4 mb-2 font-bold">
            Avhath <br /> "FELO DE SE/HALLOWED GROUND" 7"
          </h3>
          <p className="mt-2 mb-2">
            Disaster Records presents a special hazy blood red 7″ vinyl limited
            to 222pcs, seminal maxi-single from Avhath released in 2021
            featuring an award-winning single FELO DE SE and the furious
            HALLOWED GROUND, both produced by Alyuadi Febryansyah.
          </p>
          <button className="mt-2 mb-2 bg-red-700 text-white rounded-md p-2 hover:bg-red-800">
            $19.99
          </button>
        </div>
        <div className="w-72 p-5 m-5 bg-black flex flex-col items-center text-gray-300 text-center rounded-lg">
          <img
            src="https://shop.revolvermag.com/cdn/shop/files/image_2440486e-55ab-4244-9763-96a23e3de670_600x.png?v=1690312591"
            alt="deafheaven"
            className="rounded-[20%] w-4/5"
          />
          <h3 className="mt-4 mb-2 font-bold">Deafheaven "Sunbather" LP</h3>
          <p className="mt-2 mb-2">
            Sunbather expanded on the group's dynamic 2011 debut and doubled
            down on the wall-of-sound arrangements heavily influenced by
            shoegaze, juxtaposed with opaque screaming, breakdowns and overall
            song structures typically found on black metal recordings.
          </p>
          <button className="mt-2 mb-2 bg-red-700 text-white rounded-md p-2 hover:bg-red-800">
            $54.99
          </button>
        </div>
      </div>
    </section>
  );
};

export default products;
