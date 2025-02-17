import React from 'react';
import Link from 'next/link';

const CosmeticInfoSection: React.FC = () => {
  return (
    <div className="flex flex-col text-black">
      <div className="flex relative flex-col items-start px-20 pt-6 pb-96 w-full min-h-[750px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eefa295acdde4f8d76b1e93f54793f86c6241546c9b588efda33e6086e15817?placeholderIfAbsent=true&apiKey=d576bd6e955f48bd991858acd2b7cebb"
          className="object-cover absolute inset-0 size-full"
          alt="Background image for cosmetics information"
        />
        <div className="flex relative flex-col mb-0 w-full max-w-[933px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between items-start w-full max-md:max-w-full">
            <div className="self-start text-4xl" role="heading" aria-level={1}>
              INFO BAO
            </div>
          </div>
          <div className="flex flex-col self-end mt-28 max-w-full w-[356px] max-md:mt-10 max-md:mr-2">
            <h2 className="text-5xl max-md:text-4xl">About Cosmetics</h2>
            <p className="mt-6 mr-6 ml-4 text-sm max-md:mx-2.5">
              Learn more about other cosmetics with INFO BAO
            </p>
            <div
              className="shrink-0 self-center mt-20 h-0.5 border border-solid border-stone-50 w-[132px] max-md:mt-10"
              aria-hidden="true"
            ></div>
            <div className="flex z-10 self-center max-w-full text-sm w-[132px]">
              <div className="flex flex-col w-full">
                <div className="flex gap-3 self-start">
                  <div
                    className="shrink-0 w-px h-9 border border-white border-solid"
                    aria-hidden="true"
                  ></div>
                  <Link
                    href="#more-info"
                    className="my-auto basis-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    More information
                  </Link>
                </div>
                <div
                  className="shrink-0 h-0.5 border border-white border-solid"
                  aria-hidden="true"
                ></div>
              </div>
              <div
                className="shrink-0 w-px border border-white border-solid h-[38px]"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticInfoSection;