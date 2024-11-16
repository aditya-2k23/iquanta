import Image from "next/image";
import React from "react";

const HeroSectionCard = () => {
  return (
    <div className="flex flex-col items-center pb-4 space-y-4 md:space-x-4 md:space-y-0">
      {/* Image Container */}
      <div className="w-full md:w-auto md:mb-8">
        <a
          href="https://www.iquanta.in/blog/iquanta-startup-india/"
          title="iQuanta Recognized Under StartUp India Initiative by Govt. of India"
          rel="bookmark"
        >
          <Image
            src="https://www.iquanta.in/blog/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-14-at-3.34.03-PM-696x392.jpeg"
            alt="Image"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </a>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between mt-2 md:mt-0 pr-3 pl-0">
        {/* Title */}
        <h3 className="text-2xl leading-8 font-bold mb-2 text-gray-800 md:text-[40px] md:leading-10">
          <a
            href="https://www.iquanta.in/blog/iquanta-startup-india/"
            rel="bookmark"
            className="hover:text-red-600"
          >
            iQuanta Recognized Under StartUp India Initiative by Govt. of India
          </a>
        </h3>

        {/* Meta Information */}
        <div className="text-sm flex items-center text-gray-900 md:flex-row md:space-y-1 md:space-x-2">
          <a
            href="https://www.iquanta.in/blog/category/iquanta-initiatives/"
            className="text-red-500 font-semibold uppercase hover:underline"
          >
            <span className="mx-1">|</span>
            iQuanta Initiatives
            <span className="mx-1">|</span>
          </a>
          <div className="flex space-x-2">
            <a
              href="https://www.iquanta.in/blog/author/administrator/"
              className="hover:underline"
            >
              Indrajeet Singh
            </a>
            <span>-</span>
            <time dateTime="2023-07-14T15:55:41+05:30">July 14, 2023</time>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-gray-900 text-base mt-2 md:text-lg md:leading-6 font-serif">
          iQuanta Recognized Under StartUp India Initiative by Govt. of India
          With immense pleasure, we would like to let you all know that iQuanta
          has been...
        </p>
      </div>
    </div>
  );
};

export default HeroSectionCard;
