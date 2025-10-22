import React, { useState, useEffect } from 'react';

const allTestimonials = [
  { name: 'LOKSANS', image: '/img-7.png', quote: 'ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit' },
  { name: 'LOKSANS', image: '/img-8.png', quote: 'ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit' },
  { name: 'LOKSANS', image: '/img-7.png', quote: 'ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit' },
  { name: 'LOKSANS', image: '/img-8.png', quote: 'ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit' },
  { name: 'LOKSANS', image: '/img-7.png', quote: 'ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit' },
  { name: 'LOKSANS', image: '/img-8.png', quote: 'ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit' },
  { name: 'LOKSANS', image: '/img-7.png', quote: 'ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit' },
  { name: 'LOKSANS', image: '/img-8.png', quote: 'ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit' },
];

const SLIDES_COUNT = Math.ceil(allTestimonials.length / 2);

function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES_COUNT);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const translateValue = `translateX(-${currentSlide * 100}%)`;

  const cardStyles = "bg-white text-left relative transition-transform duration-300 p-0 border border-black shadow-lg";

  return (
    <div className="max-w-7xl mx-auto text-center px-12 pt-10 pb-20 relative">
      <h2 className="text-4xl mb-3 tracking-wider">WHAT IS SAYS OUR CLIENTS</h2>
      <p className="mb-16 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing</p>

      <div className="relative overflow-hidden">

        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: translateValue }}
        >
          {Array.from({ length: SLIDES_COUNT }).map((_, slideIndex) => {
            const start = slideIndex * 2;
            const slideCards = allTestimonials.slice(start, start + 2);

            return (
              <div key={slideIndex} className="flex-shrink-0 w-full flex flex-col items-center relative">
                <div className="w-full max-w-[1000px] mx-auto flex flex-col items-start relative">
                  {/* Card 1 */}
                  {slideCards[0] && (
                    <div className={`${cardStyles} w-full max-w-[700px] mr-auto mt-4`}>
                      <div className="flex items-start p-6">
                        <div className="relative w-33 h-20 mr-6 flex-shrink-0">
                          <img src={slideCards[0].image} alt={slideCards[0].name} className="w-full h-full object-cover" />
                          <img
                            src="/quote-icon.png"
                            alt="Quote Icon"
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 object-contain z-10"
                          />
                        </div>
                        <div className="pt-0 flex-grow">
                          <h3 className="text-base font-bold text-black mb-2 uppercase tracking-wider">{slideCards[0].name}</h3>
                          <p className="text-lg text-gray-700 leading-relaxed">{slideCards[0].quote}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card 2 */}
                  {slideCards[1] && (
                    <div className={`${cardStyles} w-full max-w-[700px] ml-auto mt-10 min-h-[120px]`}>
                      <div className="flex items-start p-6">
                        <div className="relative w-33 h-20 mr-6 flex-shrink-0">
                          <img src={slideCards[1].image} alt={slideCards[1].name} className="w-full h-full object-cover" />
                          <img
                            src="/quote-icon.png"
                            alt="Quote Icon"
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 object-contain z-10"
                          />
                        </div>
                        <div className="pt-0 flex-grow">
                          <h3 className="text-base font-bold text-black mb-2 uppercase tracking-wider">{slideCards[1].name}</h3>
                          <p className="text-lg text-gray-700 leading-relaxed">{slideCards[1].quote}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>


        <div
          className="flex space-x-2 absolute z-20"
          style={{ left: '24px', top: '250px' }}
        >
          {Array.from({ length: SLIDES_COUNT }).map((_, index) => (
            <div
              key={index}
              className="w-5 h-5 rounded-full cursor-pointer transition-colors duration-300"
              style={{ backgroundColor: index === currentSlide ? 'black' : '#ffb703' }}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
