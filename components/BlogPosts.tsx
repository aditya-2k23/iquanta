import React from "react";

interface BlogPost {
  href: string;
  title: string;
  category: { href: string; name: string };
  date: string;
}

const posts: BlogPost[] = [
  {
    href: "https://www.iquanta.in/blog/algebra-marathon-by-iquanta/",
    title:
      "Solve 100+ CAT Level Algebra Questions in 10 Hours : Algebra Marathon by iQuanta",
    category: {
      href: "https://www.iquanta.in/blog/category/cat-non-cat/",
      name: "CAT & Non-CAT",
    },
    date: "2024-11-11",
  },
  {
    href: "https://www.iquanta.in/blog/ipmat-registration/",
    title: "IPMAT Registration Details: Fees, Last Date, Eligibility & More",
    category: {
      href: "https://www.iquanta.in/blog/category/after-12th/ipmat/",
      name: "IPMAT",
    },
    date: "2024-11-11",
  },
  {
    href: "https://www.iquanta.in/blog/tiss-2024-forms-out/",
    title:
      "TISS 2024 Forms Out : Check Selection Criteria, CAT Cutoff & Application",
    category: {
      href: "https://www.iquanta.in/blog/category/cat-non-cat/",
      name: "CAT & Non-CAT",
    },
    date: "2024-11-11",
  },
  {
    href: "",
    title:
      "TISS 2024 Forms Out : Check Selection Criteria, CAT Cutoff & Application",
    category: {
      href: "",
      name: "CAT & Non-CAT",
    },
    date: "2024-11-11",
  },
  {
    href: "",
    title: "CLAT Mini Mock Series by iQuanta: 11th November 2024",
    category: {
      href: "",
      name: "CLAT Mini Mock Series",
    },
    date: "2024-11-11",
  },
  {
    href: "",
    title: "CAT 2024 : Last 2 Week Strategy & Mistakes to Avoid",
    category: {
      href: "",
      name: "CAT & Non-CAT",
    },
    date: "2024-11-11",
  },
  {
    href: "",
    title: "How Karan Converted FMS Delhi with Less Than 60% in Graduation",
    category: {
      href: "",
      name: "CAT & Non-CAT",
    },
    date: "2024-11-11",
  },
  {
    href: "",
    title: "CLAT Fees 2025 : Application Form, Eligibility & More",
    category: {
      href: "",
      name: "Uncategorized",
    },
    date: "2024-11-09",
  },
];

const BlogPosts: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {posts.map((post, index) => (
        <div key={index} className="flex pt-2 flex-col overflow-hidden w-full">
          {/* Content */}
          <div className="pl-3 pr-1 mb-1 flex flex-col justify-between flex-grow">
            {/* Title */}
            <h3 className="text-lg leading-6 font-bold text-gray-900 mb-1">
              <a
                href={post.href}
                rel="bookmark"
                title={post.title}
                className="hover:text-red-500"
              >
                {post.title}
              </a>
            </h3>

            {/* Category & Date */}
            <div className="text-sm text-gray-600 mb-1">
              <a href={post.category.href} className="text-red-500 font-bold">
                <span className="mr-1">|</span>
                {post.category.name}
                <span className="mx-1">|</span>
              </a>
              <time dateTime={post.date} className="font-semibold">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
