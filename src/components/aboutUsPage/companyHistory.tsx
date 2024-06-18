import React from "react";

const CompanyHistory = () => {
  return (
    <div className="relative z-0 bg-[url('/images/avhath.jpg')] bg-cover bg-center px-4 sm:px-10 mt-12">
      <div className="absolute inset-0 bg-gray-300 opacity-60 z-[-1]"></div>
      <div className="container mx-auto py-16 sm:py-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section */}
          <div className="space-y-7 text-black order-2 sm:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center font-bold">
              About Us
            </h1>
            <p className="text-justify font-bold text-sm sm:text-base lg:text-lg">
              Mayhem guitarist Euronymous was "the central figure involved in
              the formation of the Norwegian black metal scene", which he
              "almost single-handedly founded". During May - June 1991, he
              opened a record shop called Helvete. The shop was at Schweigaards
              gate 56 in Oslo. Norwegian black metal musicians often met at the
              shop and in its basement. They included the members of Mayhem, the
              members of Emperor, Varg "Count Grishnackh" Vikernes of Burzum,
              and Snorre "Blackthorn" Ruch of Thorns. Euronymous also founded an
              independent record label called Deathlike Silence Productions,
              which was based at Helvete. It released albums by Norwegian bands
              Mayhem and Burzum, Swedish bands Merciless and Abruptum, and a
              Japanese band Sigh.
            </p>
          </div>

          {/* image section */}
          <div className="relative z-30 order-1 sm:order-2">
            <img
              src="https://fastly.4sqi.net/img/general/600x600/120191882_kWMbYAP1QflmXhuIVO_LqCI4z-7vr3vJybmBssXY7ag.jpg"
              alt="Helvete Record Shop"
              className="shadow-2xl rounded-md w-full sm:w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;
