// import React from "react";

const SeaFarer = () => {
  return (
    <div className="flex flex-col gap-0 bg-[#bdd6f0]">
      {/* Top Hero Background */}
      <section
        className="relative w-full min-h-[600px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/juniorseafarer.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/5 z-0" />
        <div className="relative container mx-auto flex flex-wrap justify-center items-end z-10 py-40 md:py-56">
          {/* Empty placeholder if needed */}
        </div>
      </section>

      {/* First Text Block */}
      <section className="w-full p-4 my-8 ">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full min-w-[250px] break-words flex flex-col text-left">
            <h1 className=" text-md md:text-3xl text-black">
              The Junior Seafarers is a distinctive program at Pioneer Girls
              Junior Academy, <br />
              designed to inspire a sense of adventure and
              marine stewardship among its students.
            </h1>
          </div>
        </div>
      </section>

      {/* Bottom Hero with Overlay and Text */}
      <section
        className="relative w-full min-h-[600px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/seatoys.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative container mx-auto flex items-center justify-center h-full z-10 py-24 md:py-32 px-4 mt-24">
          <h1 className="text-left text-white text-md md:text-3xl">
            This initiative has been launched and introduces young girls to the
            fascinating world of maritime exploration, combining education,
            physical activity, and environmental consciousness.
          </h1>
        </div>
      </section>
    </div>
  );
};

export default SeaFarer;
