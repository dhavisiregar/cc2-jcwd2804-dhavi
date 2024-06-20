import React from "react";

const Products = () => {
  return (
    <section className="relative z-0 bg-[url('/images/catch.png')] bg-cover bg-center p-10 sm:p-10 mt-20">
      <div className="absolute inset-0 bg-gray-300 opacity-60 z-[-1]"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center text-black">
          Products
        </h2>
        <div className="flex flex-wrap mt-10 justify-center gap-8">
          {/* Product Item */}
          {[
            {
              img: "https://pbs.twimg.com/media/GJhkZKWXkAAvpvo.jpg:large",
              title: "Mammoth Grinder 'Cosmic Crypt' LP",
              description:
                "Underground extreme metal trio MAMMOTH GRINDER return after five long years with their fourth full-length Cosmic Crypt, a non-stop, meteoric force of aggression and mayhem.",
              price: "$24.40",
            },
            {
              img: "/images/gatecreeper-1.png",
              title: "Gatecreeper 'Dark Superstition' LP",
              description:
                "Dark Superstition was recorded at God City Studios in Salem, Massachusetts, with Converge guitarist Kurt Ballou, who also mixed the album. The record is a direct result of Gatecreeper's experience, musical refinement, and commitment to death metal.",
              price: "$32.19",
            },
            {
              img: "/images/agri-1.png",
              title: "Agriculture 'Agriculture' LP",
              description:
                "For something to be 'ecstatic,' the feelings and emotions it evokes must transcend what we tend to experience most regularly in our lives. Ecstatic joy isn't just happiness; it's a feeling of jubilation which impacts us emotionally and in a metaphysical, arguably spiritual sense too.",
              price: "$24.99",
            },
            {
              img: "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/2/17/c1e0b638-6468-47b7-ac73-e3b10f82cecd.jpg",
              title: "Avhath 'FELO DE SE/HALLOWED GROUND' 7\"",
              description:
                "Disaster Records presents a special hazy blood red 7″ vinyl limited to 222pcs, seminal maxi-single from Avhath released in 2021 featuring an award-winning single FELO DE SE and the furious HALLOWED GROUND, both produced by Alyuadi Febryansyah.",
              price: "$16.81",
            },
            {
              img: "https://shop.revolvermag.com/cdn/shop/files/image_2440486e-55ab-4244-9763-96a23e3de670_600x.png?v=1690312591",
              title: "Deafheaven 'Sunbather' LP",
              description:
                "Sunbather expanded on the group's dynamic 2011 debut and doubled down on the wall-of-sound arrangements heavily influenced by shoegaze, juxtaposed with opaque screaming, breakdowns and overall song structures typically found on black metal recordings.",
              price: "$24.99",
            },
            {
              img: "https://pbs.twimg.com/media/GJhkZKWXkAAvpvo.jpg:large",
              title: "Mammoth Grinder 'Cosmic Crypt' LP",
              description:
                "Underground extreme metal trio MAMMOTH GRINDER return after five long years with their fourth full-length Cosmic Crypt, a non-stop, meteoric force of aggression and mayhem.",
              price: "$24.40",
            },
            {
              img: "/images/gatecreeper-1.png",
              title: "Gatecreeper 'Dark Superstition' LP",
              description:
                "Dark Superstition was recorded at God City Studios in Salem, Massachusetts, with Converge guitarist Kurt Ballou, who also mixed the album. The record is a direct result of Gatecreeper's experience, musical refinement, and commitment to death metal.",
              price: "$32.19",
            },
            {
              img: "/images/agri-1.png",
              title: "Agriculture 'Agriculture' LP",
              description:
                "For something to be 'ecstatic,' the feelings and emotions it evokes must transcend what we tend to experience most regularly in our lives. Ecstatic joy isn't just happiness; it's a feeling of jubilation which impacts us emotionally and in a metaphysical, arguably spiritual sense too.",
              price: "$24.99",
            },
            {
              img: "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/2/17/c1e0b638-6468-47b7-ac73-e3b10f82cecd.jpg",
              title: "Avhath 'FELO DE SE/HALLOWED GROUND' 7\"",
              description:
                "Disaster Records presents a special hazy blood red 7″ vinyl limited to 222pcs, seminal maxi-single from Avhath released in 2021 featuring an award-winning single FELO DE SE and the furious HALLOWED GROUND, both produced by Alyuadi Febryansyah.",
              price: "$16.81",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-72 p-5 bg-black flex flex-col items-center text-gray-300 text-center rounded-lg"
            >
              <img
                src={product.img}
                alt={product.title}
                className="rounded-[20%] w-3/5 sm:w-4/5"
              />
              <h3 className="mt-4 mb-2 text-lg font-bold">{product.title}</h3>
              <p className="mt-2 mb-2 text-sm">{product.description}</p>
              <button className="mt-2 mb-2 bg-red-700 text-white rounded-md p-2 hover:bg-red-800">
                {product.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
