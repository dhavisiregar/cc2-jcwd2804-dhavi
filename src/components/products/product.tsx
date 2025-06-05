import React from "react";

const products = [
  {
    img: "https://pbs.twimg.com/media/GJhkZKWXkAAvpvo.jpg:large",
    title: "Mammoth Grinder 'Cosmic Crypt' LP",
    description:
      "Underground extreme metal trio MAMMOTH GRINDER return after five long years...",
    price: "$24.40",
    link: "https://www.relapse.com/products/mammoth-grinder-cosmic-crypt-12",
  },
  {
    img: "/images/gatecreeper-1.png",
    title: "Gatecreeper 'Dark Superstition' LP",
    description:
      "Dark Superstition was recorded at God City Studios in Salem, MA with Kurt Ballou...",
    price: "$32.19",
    link: "https://evilgreed.net/products/gatecreeper-dark-superstition-lp",
  },
  {
    img: "/images/agri-1.png",
    title: "Agriculture 'Agriculture' LP",
    description:
      "For something to be 'ecstatic,' the feelings and emotions it evokes must transcend...",
    price: "$24.99",
    link: "https://nowflensing.com/products/agriculture-agriculture-lp",
  },
  {
    img: "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/2/17/c1e0b638-6468-47b7-ac73-e3b10f82cecd.jpg",
    title: "Avhath 'FELO DE SE/HALLOWED GROUND' 7\"",
    description:
      "Disaster Records presents a special hazy blood red 7″ vinyl limited to 222pcs...",
    price: "$16.81",
    link: "https://disasterposse.com/product/avhath-7/",
  },
  {
    img: "https://shop.revolvermag.com/cdn/shop/files/image_2440486e-55ab-4244-9763-96a23e3de670_600x.png?v=1690312591",
    title: "Deafheaven 'Sunbather' LP",
    description:
      "Sunbather expanded on the group's dynamic 2011 debut and doubled down on shoegaze...",
    price: "$24.99",
    link: "https://deathwishinc.eu/products/deafheaven-sunbather",
  },
  {
    img: "https://pbs.twimg.com/media/GJhkZKWXkAAvpvo.jpg:large",
    title: "Mammoth Grinder 'Cosmic Crypt' LP",
    description:
      "Underground extreme metal trio MAMMOTH GRINDER return after five long years...",
    price: "$24.40",
    link: "https://www.relapse.com/products/mammoth-grinder-cosmic-crypt-12",
  },
  {
    img: "/images/gatecreeper-1.png",
    title: "Gatecreeper 'Dark Superstition' LP",
    description:
      "Dark Superstition was recorded at God City Studios in Salem, MA with Kurt Ballou...",
    price: "$32.19",
    link: "https://evilgreed.net/products/gatecreeper-dark-superstition-lp",
  },
  {
    img: "/images/agri-1.png",
    title: "Agriculture 'Agriculture' LP",
    description:
      "For something to be 'ecstatic,' the feelings and emotions it evokes must transcend...",
    price: "$24.99",
    link: "https://nowflensing.com/products/agriculture-agriculture-lp",
  },
];

const Products = () => {
  return (
    <section className="relative z-0 bg-[url('/images/catch.png')] bg-cover bg-center p-10 sm:p-10 mt-20">
      <div className="absolute inset-0 bg-gray-300 opacity-60 z-[-1]"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center text-black">
          Products
        </h2>
        <div className="flex flex-wrap mt-10 justify-center gap-8">
          {products.map((product, idx) => (
            <a
              key={idx}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-black font-bold mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  {product.description}
                </p>
                <p className="text-black font-semibold">{product.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
