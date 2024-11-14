import Image from "next/image";
import React from "react";
import "../app/globals.css";

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
  ];

  return (
    <div className="flex px-8 justify-between mx-auto">
      <div className="flex gap-[18px] flex-shrink-0 items-start w-[668.5px] h-[1830.34px]">
        <div id="tdi_102">
          {articles.map((article, index) => (
            <div key={index} className="flex pb-[21px] items-center">
              <div className="flex-shrink-0 flex items-center justify-center md:w-2/3">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={article.imgUrl}
                    alt={article.title}
                    width={360}
                    height={330}
                    className="mr-1 bg-cover bg-center"
                  />
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="hover:text-red-500 text-2xl font-bold">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </h3>
                <div className="details">
                  <span className="font-semibold text-red-500 mr-[10px] uppercase">
                    | {article.category} |
                  </span>
                  <span className="text-gray-700">{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-shrink-0 w-[360.58px] h-[1908.95px] border border-red-500 text-center">
        Hello
      </div>
      <div className="flex-shrink-0 w-[285.91px] h-[1248.05px] border border-red-500 text-center">
        Hello
      </div>
    </div>
  );
};

export default LatestPosts;
