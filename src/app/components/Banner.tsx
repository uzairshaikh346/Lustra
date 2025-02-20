import React from 'react';
import Link from 'next/link';

const Banner: React.FC = () => {
  return (
    <section className="text-gray-600 body-font bg-black/80 flex flex-col px-5 md:px-20 md:pt-10 md:flex-row banner">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center fade-in">
          <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-[#FFB22C] animated-title">
            Unleash Your Inner Radiance
            <br className="hidden lg:inline-block" />
            with Lustra Cosmetics
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300 animated-paragraph">
            Discover our premium collection of skincare and makeup, crafted with natural ingredients and designed to make you shine. Glow with confidence and embrace your true beauty.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 fade-in">
          <img
            className="object-cover object-center rounded h-full"
            alt="hero"
            src="/Banner_girl.png" // Replace with your actual image path
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
