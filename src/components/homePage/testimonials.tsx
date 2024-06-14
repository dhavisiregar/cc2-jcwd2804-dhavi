import React from "react";

interface Testimonial {
  name: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Euronymous (Mayhem)",
    feedback:
      "Quite possibly one of the heaviest records ever and will almost certainly be the heaviest!",
    image: "https://pbs.twimg.com/media/DMBLLisUIAIU5XH.jpg",
  },
  {
    name: "Fenriz (Darkthrone)",
    feedback:
      "Fantastic service and shipping. Will definitely buy from Helvete again.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamN1dL-LaIGMb602kKL2neMNoTWu2XCB0Zw&s",
  },
  {
    name: "Kurt Ballou (Converge)",
    feedback: "Exceeded my expectations in every way. Five stars!",
    image:
      "https://i.discogs.com/z7piyvx-t_46dxH2tYbzYIRvGQhSysJLQ1t6CbHcrSs/rs:fit/g:sm/q:90/h:598/w:478/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI2MTMx/Mi0xNjcwNjE0MjM1/LTEwNjUucG5n.jpeg",
  },
  {
    name: "A.L.N (Mizmor)",
    feedback:
      "As a vinyl collector, I've shopped at countless stores, but Helvete stands out. Their curated collection always has something unique and rare that I can't find anywhere else.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrfjnJYNkJ0w6lXZfk_PYn65JjW_dna-lvg&s",
  },
  {
    name: "Arifin Arian (Seringai)",
    feedback:
      "I've been in the music industry for over a decade, and finding a reliable source for high-quality records and equipment is crucial. Helvete has consistently exceeded my expectations.",
    image:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1489056773/cwrnbvbkailebeb47bkr.jpg",
  },
  {
    name: "Chase H. Mason (Gatecreeper)",
    feedback:
      "As a musician, finding a supportive community is essential. Helvete not only offers an amazing selection of records but also supports local bands.",
    image:
      "https://i.discogs.com/mpyqOoAD2aN3ILtUBI5asMaC1pisP9Aap3gqbVaVN4c/rs:fit/g:sm/q:90/h:400/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTUzMDA2/ODItMTY0MzA1ODUz/Ny03MDY3LmpwZWc.jpeg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-gray-300">
      <div className="container mx-auto px-6">
        <h1 className="text-7xl text-black font-bold text-center mb-8">
          What Our Servants Say
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-28 h-28 rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-300 text-2xl font-bold">
                    {testimonial.name}
                  </p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
