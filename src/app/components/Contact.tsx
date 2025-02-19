import React from 'react';

function Contact() {
  return (
    <div>
      <section id='Contact' className="text-gray-600 body-font relative bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-[#FFB22C] animate__animated animate__bounce hover:animate-bounce">
              Contact Us
            </h1>
          </div>
          <div className="lg:w-2/3 w-full mx-auto flex flex-col-reverse md:flex-row flex-wrap">
            <div className="lg:w-1/2 md:w-2/3 p-4">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-gray-200 text-xl">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-800 bg-opacity-50 rounded border border-[#FFB22C] focus:bg-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-gray-200 text-xl">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-800 bg-opacity-50 rounded border border-[#FFB22C] focus:bg-gray-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-gray-200 text-xl">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-800 bg-opacity-50 rounded border border-[#FFB22C] focus:bg-gray-400 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-transparent border-[2px] border-[#FFB22C] py-2 px-8 focus:outline-none hover:bg-[#FFB22C] rounded text-lg">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-1/3 p-4">
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg">
                <h2 className="text-[#FFB22C] text-2xl md:text-4xl mb-3">Contact Information</h2>
                <p className="text-gray-300 mb-3 md:text-2xl">Feel free to reach out to us through any of the following methods:</p>
                <p className="text-gray-300 md:text-xl"><strong>Email:</strong> bahad473@gmail.com</p>
                {/* <p className="text-gray-300 md:text-xl"><strong>Phone:</strong> 0315-8829818</p> */}
                {/* <p className="text-gray-300 md:text-xl"><strong>Address:</strong> 1234 Beauty Blvd, Skincare City, CA 90001</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
