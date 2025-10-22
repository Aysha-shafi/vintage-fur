import React from 'react';

function AboutPage() {
  return (
    <section className="bg-yellow-500 py-25  px-15">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left (Text Section) */}
        <div className="lg:w-1/2 pl-10  text-white">
          <h2 className="text-4xl pb-10  mb-6">ABOUT US</h2>
          <p className="text-base leading-relaxed mb-20">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. There are many variations of passages of Lorem Ipsum
            available, but the majority have able.
          </p>
          <button className="bg-black text-white font-semibold py-3 px-8 rounded-sm hover:bg-gray-800 transition duration-300">
            READ MORE
          </button>
        </div>

        {/* Right (Image Section) */}
        <div className="lg:w-1/2 flex justify-center pr-15 lg:justify-end mt-10 lg:mt-0">
          <img
            src="/img-1.png"
            alt="Vintage furniture crib"
            className="max-w-md w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
