import React from 'react';

const furnitureItems = [
  { title: 'TEMPOR INCIDIDUNT UT LABORE ET DOLORE', image: '/img-2.png' },
  { title: 'TEMPOR INCIDIDUNT UT LABORE ET DOLORE', image: '/img-3.png' },
];

function ShopPage() {
  return (
    <section className="py-20" >

      <div className="max-w-7xl mx-auto text-center px-12">
        <h2 className="text-4xl  mb-2">OUR FURNITURES</h2>
        <p className=" mb-28 mt-8">There are many variations of passages of lorem ipsum</p>

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






    </section>
  );
}

export default ShopPage;