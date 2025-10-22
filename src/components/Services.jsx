import React from 'react';

const serviceCards = [
  { title: 'FURNITURES', img: "/icon-1.png", link: '/services#furniture' },
  { title: 'OFFICE', img: "/icon-2.png", link: '/services#office' },
  { title: 'HOME', img: "/icon-3.png", link: '/services#home' },
  { title: 'BEDROOM', img: "/icon-4.png", link: '/services#bedroom' },
];

function Services() {
  return (
    <section className="py-20 mt-8 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl  mb-8">OUR SERVICES</h2>
        <p className=" mb-20">There are many variations of passages of Lorem Ipsum </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {serviceCards.map((card) => (
            <div key={card.title} className="p-4 flex flex-col items-center">
              <div className="mb-4 text-4xl text-vintage-yellow">
                <div className="mb-4">
                  <img src={card.img} alt={card.title} className="w-16 h-16 object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">{card.title}</h3>
              <p className="text-sm  mb-4">
                There are many variations of passages of Lorem Ipsum <br />available, but the </p>
              <a href={card.link} className="text-sm  bg-yellow-500 rounded text-vintage-dark text-white py-3 px-6 hover:bg-black  transition duration-300">
                READ MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;