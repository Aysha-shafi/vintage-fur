import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const sliderContent = [
  {
    title: "FURNITURE",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    buttonText: "CONTACT US",
    backgroundImage: "/banner-bg.png"
  },
  {
    title: "FURNITURE",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    buttonText: "CONTACT US",
    backgroundImage: "/banner-bg.png"
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [direction, setDirection] = useState("right");
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    if (animating) return;
    setDirection("right");
    const nextIndex = (current + 1) % sliderContent.length;
    animateSlide(nextIndex, "right");
  };

  const handlePrev = () => {
    if (animating) return;
    setDirection("left");
    const nextIndex = (current - 1 + sliderContent.length) % sliderContent.length;
    animateSlide(nextIndex, "left");
  };

  const animateSlide = (newIndex, dir) => {
    setAnimating(true);
    setNext(newIndex);

    const currentContent = document.getElementById("current-slide-content");
    const nextContent = document.getElementById("next-slide-content");
    const backgroundElement = document.getElementById("hero-background");

    if (!currentContent || !nextContent || !backgroundElement) {
      setCurrent(newIndex);
      setAnimating(false);
      return;
    }

    nextContent.style.transition = "none";
    nextContent.style.transform =
      dir === "right" ? "translateX(100%)" : "translateX(-100%)";
    currentContent.style.transform = "translateX(0)";

    void nextContent.offsetWidth;

    const slideDuration = "0.7s";
    currentContent.style.transition = `transform ${slideDuration} ease-in-out`;
    nextContent.style.transition = `transform ${slideDuration} ease-in-out`;

    currentContent.style.transform =
      dir === "right" ? "translateX(-100%)" : "translateX(100%)";
    nextContent.style.transform = "translateX(0)";

    backgroundElement.style.backgroundImage = `url('${sliderContent[newIndex].backgroundImage}')`;

    setTimeout(() => {
      setCurrent(newIndex);
      currentContent.style.transition = "none";
      nextContent.style.transition = "none";
      currentContent.style.transform = "translateX(0)";
      setAnimating(false);
    }, 700);
  };

  const nextIndex = (current + 1) % sliderContent.length;
  const currentSlideData = sliderContent[current];
  const nextSlideData = sliderContent[next];

  return (
    <header className="relative w-full h-[800px] overflow-hidden text-center">
      <Navbar />


      <div
        id="hero-background"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${currentSlideData.backgroundImage}')` }}
      ></div>


      <div className="relative z-10 h-full w-full overflow-hidden">

        <div
          id="current-slide-content"
          className="absolute inset-0 flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-8xl font-normal tracking-widest mb-4 ">
            {currentSlideData.title}
          </h1>
          <p className="text-md text-black mb-8 max-w-lg mx-auto pt-8 p-2 rounded">
            {currentSlideData.text}
          </p>
          <button className="bg-yellow-500 hover:bg-black hover:cursor-pointer text-white rounded mt-80 py-3 px-10 text-md uppercase tracking-wider  transition">
            {currentSlideData.buttonText}
          </button>
        </div>


        <div
          id="next-slide-content"
          className="absolute inset-0 flex flex-col items-center justify-center px-4"
          style={{
            transform:
              direction === "right" ? "translateX(100%)" : "translateX(-100%)",
          }}
        >
          <h1 className="text-8xl font-normal tracking-widest mb-4 ">
            {nextSlideData.title}
          </h1>
          <p className="text-md mb-8 max-w-lg mx-auto pt-8 p-2 rounded">
            {nextSlideData.text}
          </p>
          <button className="bg-yellow-500 text-white rounded mt-80 py-3 px-10 text-md uppercase tracking-wider hover:bg-black hover:cursor-pointer transition">
            {nextSlideData.buttonText}
          </button>
        </div>
      </div>


      <button
        onClick={handlePrev}
        disabled={animating}
        className="absolute z-20 left-4 mt-30 top-1/2 -translate-y-1/2 
             w-20 h-20 rounded-full flex items-center justify-center
             bg-black text-white border border-white/30 shadow-lg
             hover:bg-yellow-500 hover:text-black hover:scale-105
             cursor-pointer transition-all duration-300 "
      >
        <img src="/left-arrow.png" alt="Previous" className="w-4 h-4 " />
      </button>


      <button
        onClick={handleNext}
        disabled={animating}
        className="absolute z-20 right-4 mt-30 top-1/2 -translate-y-1/2 
             w-20 h-20 rounded-full flex items-center justify-center
             bg-black text-white border border-white/30 shadow-lg
             hover:bg-yellow-500 hover:text-black hover:scale-105
             cursor-pointer transition-all duration-300 "
      >
        <img src="/right-arrow.png" alt="Next" className="w-4 h-4" />
      </button>


    </header>
  );
}

export default Hero;
