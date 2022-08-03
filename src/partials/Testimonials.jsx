import React from 'react';

import TestimonialImage from '../images/testimonial.jpg';


function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4">Testimonials</h2>
            <p className="text-xl text-gray-600">We have worked with students at all different levels who have leveraged their GMAT scores to get into their dream business schools.</p>
          </div>
          {/* Testimonials */}
          <div className="flex flex-col lg:flex-row items-center"> 
          <div className="max-w-3xl mx-auto mt-10 p-5" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-5 mx-4 md:mx-0">
                <blockquote className="text-xl font-medium mb-4">
                  “I cannot thank you all enough. Before working with you, I could not break the 700 mark no matter what I tried. Within 3 weeks I was able to post a 740.“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Charlotte R.</cite>
                <div className="text-gray-600 flex flex-col">
                  <a className="text-blue-600 hover:underline" href="#0">Harvard Business School</a>
                  <span>Class of '24</span> 
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-10 p-5" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-5 mx-4 md:mx-0">
                <blockquote className="text-xl font-medium mb-4">
                  “The help that I recieved was absolutely invaluable. I had limited time to prep and the folks at Bellinger & Co worked around my schedule to accomodate me.“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Evan B.</cite>
                <div className="text-gray-600 flex flex-col">
                  <a className="text-blue-600 hover:underline" href="#0">Ross School of Business</a>
                  <span>Class of '23</span> 
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-10 p-5" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-5 mx-4 md:mx-0">
                <blockquote className="text-xl font-medium mb-4">
                  “I came to B&C with only 5 weeks to prepare for the GMAT and with thier help I was able to score a 710 on my first try!“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Anthony L.</cite>
                <div className="text-gray-600 flex flex-col">
                  <a className="text-blue-600 hover:underline" href="#0">Haas School of Business</a>
                  <span>Class of '23</span> 
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;