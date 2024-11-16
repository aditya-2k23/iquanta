import React from "react";

const Article = ({
  title,
  link,
  date,
}: {
  title: string;
  link: string;
  date: string;
}) => {
  return (
    <div className="flex flex-col pt-2">
      <h3 className="text-xl font-semibold mb-2 leading-6 hover:text-red-500">
        <a href={link}>{title}</a>
      </h3>
      <div className="text-sm font-semibold border-b border-black">
        <p className="text-gray-600 pb-3">{date}</p>
      </div>
    </div>
  );
};

const articles = [
  {
    title: "Importance of Mock Tests for CAT 2025",
    link: "https://www.iquanta.in/blog/importance-of-mock-tests-for-cat-2025/",
    date: "November 15, 2024",
  },
  {
    title: "Best Books for Quantitative Aptitude for CAT",
    link: "",
    date: "November 15, 2024",
  },
  {
    title: "IIFT Convert Soumyadeep Shares His Preparation Strategy",
    link: "",
    date: "November 15, 2024",
  },
  {
    title: "CUET UG Syllabus 2025: All Subjects and Sections",
    link: "",
    date: "November 15, 2024",
  },
  {
    title: "NLSIU Bangalore: Best NLU in India",
    link: "",
    date: "November 15, 2024",
  },
];

const RedNewsletterForm = () => {
  return (
    <div className="">
      {/* Newsletter Form */}
      <form action="" method="post" className="space-y-4 max-w-md mx-auto">
        <input type="hidden" name="list" value="402" />
        <input type="hidden" name="double_opt_in" value="" />
        <input type="url" name="rdr_url" value="" style={{ display: "none" }} />

        <div className="flex flex-col gap-4">
          {/* Email Input */}
          <input
            type="email"
            name="email"
            aria-label="email"
            placeholder="Email address"
            required
            className="p-2 border border-black placeholder:text-gray-700 placeholder:text-xs placeholder:font-semibold placeholder:font-serif outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            name="tds-subscribe"
            className="bg-red-500 font-serif text-xs uppercase font-semibold text-white p-4 hover:bg-red-400 transition"
          >
            I want in {"->"}
          </button>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2 mt-4">
          <input
            id="pp_checkbox_tdi_109"
            value="Y"
            type="checkbox"
            className="cursor-pointer"
          />
          <label
            htmlFor="pp_checkbox_tdi_109"
            className="text-sm font-serif cursor-pointer"
          >
            I&apos;ve read and accept the{" "}
            <a className="hover:underline text-red-600">Privacy Policy</a>.
          </label>
        </div>
      </form>

      {/* Technology Section */}
      <div className="mt-8">
        <h3 className="text-xl text-center uppercase font-extrabold">
          Technology
        </h3>
        <a
          href="https://www.iquanta.in/blog/importance-of-mock-tests-for-cat-2025/"
          title="Importance of Mock Tests for CAT 2025"
          className="block mt-4 relative"
        >
          <span
            className="flex justify-end text-justify text-white flex-col bg-cover bg-center h-80"
            style={{
              backgroundImage:
                "url('https://www.iquanta.in/blog/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-15-at-5.15.13-PM-696x392.jpeg')",
            }}
          >
            <div className="bg-[#00000062] py-4 px-5 shadow-lg">
              <h3 className="font-bold text-xl mb-1">
                Importance of Mock Tests for CAT 2025
              </h3>
              <p className="text-xs font-semibold text-gray-200">
                Indrajeet Singh - November 15, 2024
              </p>
            </div>
          </span>
        </a>
      </div>

      {/* Health Section */}
      <div className="mt-9">
        <h3 className="text-xl bg-red-500 py-2 italic text-white font-extrabold uppercase text-center mb-2">
          Health
        </h3>
        <div className="">
          {articles.map((article, index) => (
            <Article
              key={index}
              title={article.title}
              link={article.link}
              date={article.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RedNewsletterForm;
