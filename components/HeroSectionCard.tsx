import Image from "next/image";
import React from "react";

const HeroSectionCard = () => {
  return (
    <div className="flex space-x-4 flex-col items-center pb-4">
      {/* Image Container */}
      <div className="">
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
          />
        </a>
      </div>

      {/* Content Section */}
      <div className="flex mt-2 flex-col justify-between">
        {/* Title */}
        <h3 className="text-[40px] leading-10 font-bold mb-2 text-gray-800">
          <a
            href="https://www.iquanta.in/blog/iquanta-startup-india/"
            rel="bookmark"
            className="hover:text-red-600"
          >
            iQuanta Recognized Under StartUp India Initiative by Govt. of India
          </a>
        </h3>

        {/* Meta Information */}
        <div className="text-sm flex items-center text-gray-900 space-y-2">
          <a
            href="https://www.iquanta.in/blog/category/iquanta-initiatives/"
            className="text-red-500 font-semibold uppercase hover:underline mr-1"
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
        <p className="text-gray-900 text-lg mt-2">
          iQuanta Recognized Under StartUp India Initiative by Govt. of India
          With immense pleasure, we would like to let you all know that iQuanta
          has been...
        </p>
      </div>
    </div>
  );
};

export default HeroSectionCard;
