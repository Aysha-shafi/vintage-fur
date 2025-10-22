import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import React from 'react';

const furnitureItems = [
  { title: 'TEMPOR INCIDIDUNT UT LABORE ET DOLORE', image: '/img-2.png' },
  { title: 'TEMPOR INCIDIDUNT UT LABORE ET DOLORE', image: '/img-3.png' },
];

function OurFurnitures() {



  return (
    <section className="py-20" >

      <div className="max-w-7xl mx-auto text-center px-12">
        <h2 className="text-4xl  mb-2">OUR FURNITURES</h2>
        <p className=" mb-12 mt-8">There are many variations of passages of lorem ipsum</p>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {furnitureItems.map((item, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <div className="w-full  mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover"

                />
              </div>

              <h3 className="text-1xl text-yellow-500 pr-20 font-extrabold  mb-4">{item.title}</h3>
              <p className="text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              </p>
            </div>
          ))}
        </div>
      </div>




      <div
        className="py-16 bg-repeat bg-center mb-20 w-full "
        style={{
          backgroundImage: "url('/bg-1.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold text-white mt-10  mb-4">WHO WE ARE ?</h2>
          <h3 className="text-lg text-white mb-8 max-w-2xl mx-auto">
            DESIGNERS & INNOVATORS
          </h3>
          <p className="text-1xl text-white mb-8 mx-auto leading-snug max-w-5xl tracking-wide" style={{ width: "100%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>

          <button className="bg-black text-white mt-15 rounded py-3 px-6 text-1xl uppercase hover:bg-white hover:text-black transition duration-300">
            GET A QUOTE
          </button>
        </div>
      </div>




      <h1 className='text-4xl  ml-150 mt-20 mb-5 '>OUR PROJECTS</h1>
      <p className='ml-130 mb-20 '>Lorem ipsum dolor sit amet, consectetur adipisicing </p>

      <div className="flex justify-center space-x-4 overflow-x-auto group">
        {["/img-4.png", "/img-5.png", "/img-6.png"].map((src, i) => (
          <div
            key={i}
            className="w-90 flex-shrink-0 relative transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100"
          >

            <div className="relative group">

              <div
                className="aspect-square bg-cover bg-center transform transition-transform duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-105"
                style={{ backgroundImage: `url(${src})` }}
              ></div>


              <div className="absolute inset-0 bg-yellow-500 bg-opacity-40 opacity-0  group-hover:opacity-40 transition-opacity duration-300"></div>


              <p className="absolute bottom-4 w-full text-center text-white text-xl font-semibold pointer-events-none">
                MODERN HOME DESIGN
              </p>


              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold  bg-opacity-50 px-6 py-2  border border-white pointer-events-auto">
                VIEW MORE
              </button>
            </div>
          </div>
        ))}
      </div>




    </section>
  );
}

export default OurFurnitures;