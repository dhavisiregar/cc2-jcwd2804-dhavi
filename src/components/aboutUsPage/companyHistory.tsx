import React from "react";

const companyHistory = () => {
  return (
    <div className="relative z-[-1] bg-[url('/images/avhath.jpg')] px-10 mt-24">
      <div className="absolute inset-0 bg-gray-300 opacity-60 z-[-1]"></div>
      <div className="container py-16 sm:py-0 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section */}
          <div className="space-y-7 text-black order-2 sm:order-1">
            <h1 className="text-7xl font-bold">About Us</h1>
            <p className="text-left font-bold">
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
              alt=""
              className="shadow-2xl rounded-md w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default companyHistory;
