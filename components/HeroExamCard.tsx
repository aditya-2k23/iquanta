import React from "react";

const HeroExamCard = () => {
  return (
    <div className="flex flex-col gap-4 w-full lg:flex-1">
      {/* Image Container */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <a
          href="https://www.iquanta.in/blog/cat-99-76iler-and-converted-iim-bangalore/"
          title="How a Small Town Boy Scored CAT 99.76%ile and Converted IIM Bangalore"
          rel="bookmark"
        >
          <div
            className="h-64 w-[30rem] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://www.iquanta.in/blog/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-13-at-12.30.26-PM-1-696x392.jpeg')",
            }}
          />
        </a>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center">
        {/* Title */}
        <h3 className="text-5xl font-semibold hover:text-red-600">
          <a
            href="https://www.iquanta.in/blog/cat-99-76iler-and-converted-iim-bangalore/"
            rel="bookmark"
          >
            How a Small Town Boy Scored CAT 99.76%ile and Converted IIM
            Bangalore
          </a>
        </h3>

        {/* Meta Information */}
        <div className="text-sm text-gray-600 font-semibold space-y-1 mt-2">
          <div className="flex items-center space-x-2">
            <a
              href="https://www.iquanta.in/blog/author/administrator/"
              className="hover:underline"
            >
              Indrajeet Singh
            </a>
            <span>-</span>
            <time dateTime="2024-11-13T12:49:18+05:30">November 13, 2024</time>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-gray-800 mt-3">
          Here&apos;s the Interview of CAT Topper Mayank, who hails from a small town
          of Bihar, scored 99.76%ile in the...
        </p>
      </div>
    </div>
  );
};

export default HeroExamCard;
