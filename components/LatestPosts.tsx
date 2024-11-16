import React from "react";
import "../app/globals.css";
import RedNewsletterForm from "./RedNewsletterForm";

interface BlogPostProps {
  title: string;
  link: string;
  category: string;
  categoryLink: string;
  author: string;
  authorLink: string;
  imageUrl: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  link,
  category,
  categoryLink,
  author,
  authorLink,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col p-3">
      <div className="w-full mb-4">
        <a href={link} className="block">
          <div
            className="h-52 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </a>
      </div>
      <h3 className="text-xl font-semibold mb-2 hover:text-red-600">
        <a href={link}>{title}</a>
      </h3>
      <div className="text-sm flex flex-col font-semibold justify-center items-center border-b border-black gap-1">
        <a href={categoryLink} className="text-red-500 uppercase">
          | {category} |
        </a>
        <a href={authorLink} className="text-gray-600 pb-2 hover:text-red-500">
          {author}
        </a>
      </div>
    </div>
  );
};

const LatestPosts = () => {
  const articles = [
    {
      title:
        "CAT 99.96%iler, IIM Ahmedabad Convert Kislay Shares his Secret Strategy",
      url: "https://www.iquanta.in/blog/cat-99-96iler-iim-ahmedabad-convert-kislay/",
      imgUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-14-at-6.04.43-PM-1-696x392.jpeg",
      category: "CAT & Non-CAT",
      author: "Indrajeet Singh",
      date: "November 14, 2024",
    },
    {
      title: "CLAT Mini Mock Series by iQuanta: 14th November 2024",
      url: "https://www.iquanta.in/blog/clat-mini-mock-series-by-iquanta-13th-november-2024-2/",
      imgUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/11/CLAT-Mini-Mock-Series-13-696x392.png",
      category: "CLAT Mini Mock Series",
      author: "Indrajeet Singh",
      date: "November 14, 2024",
    },
    {
      title:
        "How a Small Town Boy Scored CAT 99.76%ile and Converted IIM Bangalore",
      url: "https://www.iquanta.in/blog/cat-99-76iler-and-converted-iim-bangalore/",
      imgUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-13-at-12.30.26-PM-1-696x392.jpeg",
      category: "CAT & Non-CAT",
      author: "Indrajeet Singh",
      date: "November 13, 2024",
    },
    {
      title:
        "Solve 100+ CAT Level Algebra Questions in 10 Hours : Algebra Marathon by iQuanta",
      url: "https://www.iquanta.in/blog/algebra-marathon-by-iquanta/",
      imgUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-11-at-4.00.01-PM-1-696x392.jpeg",
      category: "CAT & Non-CAT",
      author: "Indrajeet Singh",
      date: "November 11, 2024",
    },
    {
      title: "IPMAT Registration Details: Fees, Last Date, Eligibility & More",
      url: "https://www.iquanta.in/blog/ipmat-registration/",
      imgUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-11-at-3.51.03-PM-696x392.jpeg",
      category: "IPMAT",
      author: "Indrajeet Singh",
      date: "November 11, 2024",
    },
    {
      title: "IIFT Convert Soumyadeep Shares His Preparation Strategy",
      url: "https://www.iquanta.in/blog/iift-convert-soumyadeep-shares-his-preparation-strategy/",
      imgUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-15-at-2.57.05-PM-1-696x392.jpeg",
      category: "CAT & Non-CAT",
      date: "November 15, 2024",
    },
  ];

  const blogData = [
    {
      title: "CLAT Mini Mock Series by iQuanta: 14th November 2024",
      link: "https://www.iquanta.in/blog/clat-mini-mock-series-by-iquanta-13th-november-2024-2/",
      category: "CLAT Mini Mock Series",
      categoryLink:
        "https://www.iquanta.in/blog/category/law/clat/clat-mini-mock-series/",
      author: "Indrajeet Singh",
      authorLink: "https://www.iquanta.in/blog/author/administrator/",
      imageUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/11/CLAT-Mini-Mock-Series-13-696x392.png",
    },
    {
      title:
        "How a Small Town Boy Scored CAT 99.76%ile and Converted IIM Bangalore",
      link: "https://www.iquanta.in/blog/cat-99-76iler-and-converted-iim-bangalore/",
      category: "CAT & Non-CAT",
      categoryLink: "https://www.iquanta.in/blog/category/cat-non-cat/",
      author: "Indrajeet Singh",
      authorLink: "https://www.iquanta.in/blog/author/administrator/",
      imageUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-13-at-12.30.26-PM-1-696x392.jpeg",
    },
    {
      title:
        "Solve 100+ CAT Level Algebra Questions in 10 Hours : Algebra Marathon by iQuanta",
      link: "https://www.iquanta.in/blog/algebra-marathon-by-iquanta/",
      category: "CAT & Non-CAT",
      categoryLink: "https://www.iquanta.in/blog/category/cat-non-cat/",
      author: "Indrajeet Singh",
      authorLink: "https://www.iquanta.in/blog/author/administrator/",
      imageUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-11-at-4.00.01-PM-1-696x392.jpeg",
    },
    {
      title: "IPMAT Registration Details: Fees, Last Date, Eligibility & More",
      link: "https://www.iquanta.in/blog/ipmat-registration/",
      category: "IPMAT",
      categoryLink: "https://www.iquanta.in/blog/category/after-12th/ipmat/",
      author: "Indrajeet Singh",
      authorLink: "https://www.iquanta.in/blog/author/administrator/",
      imageUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-11-at-3.51.03-PM-696x392.jpeg",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row px-8 md:px-10 gap-5 justify-between mx-auto">
      <div className="flex flex-col lg:flex-row gap-5">
        <div id="tdi_102" className="w-full lg:w-[99%]">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row border-b border-black pb-4 lg:pb-[21px] items-center mb-2 md:mb-0"
            >
              <div className="flex-shrink-0 flex items-center justify-center">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <div
                    className="w-96 h-60 bg-cover bg-center mr-1"
                    style={{ backgroundImage: `url(${article.imgUrl})` }}
                  />
                </a>
              </div>
              <div className="flex flex-col justify-between mt-4 px-4 md:px-0 lg:mt-0 ml-0 lg:ml-2 gap-3">
                <h3 className="hover:text-red-500 text-2xl leading-[26px] font-bold">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </h3>
                <div className="details">
                  <span className="font-semibold text-red-500 mr-2 lg:mr-[10px] hover:text-red-600 cursor-pointer uppercase">
                    | {article.category} |
                  </span>
                  <span className="text-gray-700">{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-shrink-0 border-l border-black border-r w-full lg:w-[360.58px] text-center mt-4 lg:mt-0">
        <div className="">
          {blogData.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              link={post.link}
              category={post.category}
              categoryLink={post.categoryLink}
              author={post.author}
              authorLink={post.authorLink}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </div>
      <div className="flex-shrink-0 w-full lg:w-[285.91px] mt-4 lg:mt-0">
        <RedNewsletterForm />
      </div>
    </div>
  );
};

export default LatestPosts;
