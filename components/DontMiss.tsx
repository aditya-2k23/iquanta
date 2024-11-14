import React from "react";

interface ArticleProps {
  href: string;
  imgUrl: string;
  title: string;
  category: {
    href: string;
    name: string;
  };
  author: string;
  authorHref: string;
}

const Article = ({
  href,
  imgUrl,
  title,
  category,
  author,
  authorHref,
}: ArticleProps) => {
  return (
    <div className="overflow-hidden hover:shadow-xl max-w-80 transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative h-28 sm:h-32 lg:h-52">
        <a href={href} rel="bookmark" title={title}>
          <span
            className="block w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imgUrl})` }}
          ></span>
        </a>
      </div>

      {/* Content Section */}
      <div className="p-5 text-center">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold mb-3 hover:text-red-600 transition-colors leading-4 duration-200">
          <a href={href} rel="bookmark" title={title}>
            {title}
          </a>
        </h3>

        {/* Category and Author */}
        <div className="flex items-center justify-center">
          <div className="text-gray-500 text-sm flex flex-col sm:flex-row sm:items-center">
            {/* Category */}
            <a
              href={category.href}
              className="text-red-500 text-center hover:text-red-700 font-semibold"
            >
              <span className="mx-1">|</span>
              {category.name}
              <span className="mx-1">|</span>
            </a>
            {/* Author */}
            <div className="flex items-center mt-2 sm:mt-0">
              <a
                href={authorHref}
                className="text-gray-700 hover:text-gray-900 font-semibold"
              >
                {author}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface BlogPostProps {
  href: string;
  imgUrl: string;
  title: string;
  category: {
    href: string;
    name: string;
  };
  date: string;
}

const BlogPost = ({ href, imgUrl, title, category, date }: BlogPostProps) => {
  return (
    <div className="flex items-center justify-center overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative flex-1 h-32 lg:h-52">
        <a href={href} rel="bookmark" title={title}>
          <span
            className="block w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imgUrl})` }}
          ></span>
        </a>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="p-5">
          {/* Title */}
          <h3 className="sm:text-2xl font-bold mb-3 hover:text-red-600 transition-colors duration-200">
            <a href={href} rel="bookmark" title={title}>
              {title}
            </a>
          </h3>
          {/* Category, Author, and Date */}
          <div className="text-gray-500 text-sm flex flex-col sm:flex-row sm:items-center">
            {/* Category */}
            <a
              href={category.href}
              className="text-red-500 hover:text-red-700 text-center font-semibold uppercase"
            >
              <span className="mx-1">|</span>
              {category.name}
              <span className="mx-1">|</span>
            </a>
            {/* Author and Date */}
            <div className="flex items-center ml-2 mt-2 sm:mt-0">
              <time dateTime={date} className="text-gray-700">
                {new Date(date).toDateString()}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DontMiss = () => {
  return (
    <div className="container mb-10 mx-auto px-5">
      {/* Section Title */}
      <h3 className="py-3 bg-gray-200 italic uppercase font-bold text-3xl sm:text-5xl mb-10 text-center">
        Don&apos;t Miss
      </h3>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-3 justify-around items-start">
        {/* Left Column */}
        <div className="flex flex-wrap gap-5 lg:w-2/3">
          <Article
            href="https://www.iquanta.in/blog/top-colleges-accepting-snap-score/"
            imgUrl="https://www.iquanta.in/blog/wp-content/uploads/2023/09/Colleges-Accepting-SNAP-Score-696x392.jpeg"
            title="Top 15 MBA Colleges Accepting SNAP Score"
            category={{
              href: "https://www.iquanta.in/blog/category/b-schools/",
              name: "B-Schools",
            }}
            author="Sushmita Kshatri"
            authorHref="https://www.iquanta.in/blog/author/sushmita-kshatri/"
          />

          <Article
            href="https://www.iquanta.in/blog/dms-iit-delhi-interview-experience/"
            imgUrl="https://www.iquanta.in/blog/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-31-at-12.18.39-PM-696x392.jpeg"
            title="DMS IIT Delhi Interview Experience by CAT 98.79%iler"
            category={{
              href: "https://www.iquanta.in/blog/category/b-schools/",
              name: "B-Schools",
            }}
            author="Mansi Priyal"
            authorHref="https://www.iquanta.in/blog/author/mansi-priyal/"
          />

          <Article
            href="https://www.iquanta.in/blog/scmhrd-interview-experience/"
            imgUrl="https://www.iquanta.in/blog/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-20-at-2.59.38-PM-696x392.jpeg"
            title="SCMHRD Interview Experience – By SNAP 98.5%iler"
            category={{
              href: "https://www.iquanta.in/blog/category/b-schools/",
              name: "B-Schools",
            }}
            author="Indrajeet Singh"
            authorHref="https://www.iquanta.in/blog/author/administrator/"
          />

          <Article
            href="https://www.iquanta.in/blog/iim-calcutta-interview-experience-by99-81iler/"
            imgUrl="https://www.iquanta.in/blog/wp-content/uploads/2022/02/WhatsApp-Image-2022-12-12-at-1.30.50-PM-696x392.jpeg"
            title="IIM Calcutta Interview Experience – by CAT 99.81%iler"
            category={{
              href: "https://www.iquanta.in/blog/category/cat-non-cat/bschool-interview-experiences/",
              name: "Bschool Interview Experiences",
            }}
            author="Indrajeet Singh"
            authorHref="https://www.iquanta.in/blog/author/administrator/"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5 lg:w-2/3">
          <BlogPost
            href="https://www.iquanta.in/blog/cat-2024-2-week-strategy/"
            imgUrl="https://www.iquanta.in/blog/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-11-at-3.37.21-PM-1-696x392.jpeg"
            title="CAT 2024 : Last 2 Week Strategy & Mistakes to Avoid"
            category={{
              href: "https://www.iquanta.in/blog/category/cat-non-cat/",
              name: "CAT & Non-CAT",
            }}
            date="2024-11-11T16:06:52+05:30"
          />

          <BlogPost
            href="https://www.iquanta.in/blog/karan-converted-fms-delhi-with-less-than-60-in-graduation/"
            imgUrl="https://www.iquanta.in/blog/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-11-at-12.45.33-PM-1-696x392.jpeg"
            title="How Karan Converted FMS Delhi with Less Than 60% in Graduation"
            category={{
              href: "https://www.iquanta.in/blog/category/cat-non-cat/",
              name: "CAT & Non-CAT",
            }}
            date="2024-11-11T12:52:08+05:30"
          />

          <BlogPost
            href="https://www.iquanta.in/blog/clat-fees/"
            imgUrl="https://www.iquanta.in/blog/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-07-at-12.33.02-PM-696x392.jpeg"
            title="CLAT Fees 2025 : Application Form, Eligibility & More"
            category={{
              href: "https://www.iquanta.in/blog/category/uncategorized/",
              name: "Uncategorized",
            }}
            date="2024-11-09T17:01:04+05:30"
          />
        </div>
      </div>
    </div>
  );
};

export default DontMiss;
