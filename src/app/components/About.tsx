"use client"
import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    // Add animation classes on component mount
    const aboutTitle = document.querySelector(".about-title");
    const aboutCards = document.querySelectorAll(".about-card");

    if (aboutTitle) {
      aboutTitle.classList.add("animate-fadeInUp");
    }

    if (aboutCards) {
      aboutCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add(index % 2 === 0 ? "animate-scaleIn" : "animate-rotateIn");
        }, index * 300); // Stagger animations
      });
    }
  }, []);

  return (
    <div>
      <section id="About" className="text-gray-600 body-font bg-black/90">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="about-title text-5xl font-medium title-font text-[#FFB22C] mb-12 text-center">
            About us
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="about-card h-full bg-black p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-8 h-8 text-gray-300 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6 text-xl text-gray-200">
                  At Lustra Cosmetics, we believe in the transformative power of
                  natural beauty. Our journey began with a vision to create
                  skincare and makeup products that not only enhance your
                  appearance but also nurture your skin. We are committed to
                  using the finest natural ingredients, ensuring that every
                  product we offer is safe, effective, and environmentally
                  friendly.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="about-card h-full bg-black p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-8 h-8 text-gray-300 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6 text-xl text-gray-200">
                  Our mission is to provide high-quality skincare solutions that
                  help you achieve glowing, healthy skin. We strive to bridge
                  the gap between nature and science, bringing you innovative
                  products that deliver real results. At Lustra Cosmetics, your
                  beauty and well-being are our top priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;