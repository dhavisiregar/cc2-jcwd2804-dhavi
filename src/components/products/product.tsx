import React from "react";

const products = () => {
  return (
    <section className="bg-black p-20">
      <h2 className="text-7xl font-bold text-center p-0 text-red-700">
        Products
      </h2>
      <div className="flex flex-wrap mt-2 justify-center ">
        <div className="w-72 p-5 m-5 bg-red-700 text-black text-center rounded-lg">
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
          <button className="mt-2 mb-2 bg-black text-red-700 rounded-md p-2 hover:bg-gray-500">
            $20.00 USD
          </button>
        </div>
        <div className="w-72 p-5 m-5 bg-red-700 text-black text-center rounded-lg">
          <img
            src="https://cdn.store-assets.com/s/174181/i/73689760.jpg"
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
          <button className="mt-2 mb-2 bg-black text-red-700 rounded-md p-2 hover:bg-gray-500">
            $40.00 USD
          </button>
        </div>
        <div className="w-72 p-5 m-5 bg-red-700 text-black text-center rounded-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4tWuPWTHVIZNn_EAfQtPJ6RQoafTTNJrrQ&s"
            alt="agriculture"
            className="rounded-[20%] w-4/5"
          />
          <h3 className="mt-4 mb-2 font-bold">Agriculture "Agriculture" LP</h3>
          <p className="mt-2 mb-2">
            For something to be “ecstatic,” the feelings and emotions it evokes
            must transcend what we tend to experience most regularly in our
            lives. Ecstatic joy isn't just happiness; it's a feeling of
            jubilation which impacts us emotionally and in a metaphysical,
            arguably spiritual sense too.
          </p>
          <button className="mt-2 mb-2 bg-black text-red-700 rounded-md p-2 hover:bg-gray-500">
            $30.00 USD
          </button>
        </div>
        <div className="w-72 p-5 m-5 bg-red-700 text-black text-center rounded-lg">
          <img
            src="https://images.tokopedia.net/img/cache/700/VqbcmM/2023/2/17/c1e0b638-6468-47b7-ac73-e3b10f82cecd.jpg"
            alt="body-void"
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
          <button className="mt-2 mb-2 bg-black text-red-700 rounded-md p-2 hover:bg-gray-500">
            $35.00 USD
          </button>
        </div>
        <div className="w-72 p-5 m-5 bg-red-700 text-black text-center rounded-lg">
          <img
            src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/5/17/f45ef5d3-4265-4142-b8eb-7ad453a67485.jpg"
            alt="seasalt"
            className="rounded-[20%] w-4/5"
          />
          <h3 className="mt-4 mb-2 font-bold">Deafheaven "Sunbather" LP</h3>
          <p className="mt-2 mb-2">
            Sunbather expanded on the group's dynamic 2011 debut and doubled
            down on the wall-of-sound arrangements heavily influenced by
            shoegaze, juxtaposed with opaque screaming, breakdowns and overall
            song structures typically found on black metal recordings.
          </p>
          <button className="mt-2 mb-2 bg-black text-red-700 rounded-md p-2 hover:bg-gray-500">
            $55.00 USD
          </button>
        </div>
      </div>
    </section>
  );
};

export default products;
