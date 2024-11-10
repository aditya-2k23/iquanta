import React from "react";

const Hero = () => {
  const articles = [
    {
      title: "How Karal Went From CAT 83%ile to 99.03%ile",
      link: "https://www.iquanta.in/blog/how-karal-went-from-cat-83ile-to-99-03ile/",
      imageUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-08-at-3.47.41-PM-1-696x392.jpeg",
      category: "CAT & Non-CAT",
      excerpt:
        "Here’s the Interview of CAT Topper Karal Maheshwari, who cleared the CAT exam in his third attempt by moving from 83%ile to 99.03%ile. Q: Congratulations...",
    },
    {
      title:
        "FMS Delhi Student, CAT 99.11%iler Shares His CAT Preparation Journey",
      link: "https://www.iquanta.in/blog/fms-delhi-student-shares-cat-preparation-journey/",
      imageUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-09-at-17.38.57-1-696x392.jpeg",
      category: "CAT Exam",
      excerpt:
        "Here's the interview of Abhinay Shrivastava who cleared the CAT exam with 99.11 percentile. Q : Today, we have a special guest to have a...",
    },
    {
      title: "How Rushikesh Converted IIM Bangalore in his First Attempt",
      link: "https://www.iquanta.in/blog/how-rushikesh-converted-iim-bangalore/",
      imageUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/11/AvDNi1DvEOs-HD-1-1-696x392.jpg",
      category: "CAT & Non-CAT",
      excerpt:
        "Here’s the Interview of CAT Topper Rushikesh Patil who cleared the CAT exam and converted IIM Bangalore in his first attempt. Q: Congratulations Rushikesh on...",
    },
  ];

  const additionalArticles = [
    {
      title: "ISB Selection Process : 1 Year Vs. 2 Year Program Detail",
      link: "https://www.iquanta.in/blog/isb-selection-process/",
      imageUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-19-at-3.10.51-PM-1-696x392.jpeg",
      category: "B-Schools",
      author: "Subham Har",
    },
    {
      title:
        "Top 12 MBA Colleges in Uttar Pradesh: Ranking, Fees, Exams, Admission",
      link: "https://www.iquanta.in/blog/mba-colleges-uttar-pradesh/",
      imageUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/09/top-mba-colleges-in-uttar-pradesh.webp",
      category: "B-Schools",
      author: "Subham Har",
    },
    {
      title: "Top 50 MBA Colleges in the World : Rank, Fee & Placement",
      link: "https://www.iquanta.in/blog/top-mba-colleges-in-the-world/",
      imageUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/09/top-50-mba-colleges-in-the-world.webp",
      category: "B-Schools",
      author: "Subham Har",
    },
    {
      title: "Top 12 GMAT Colleges in India : Know Programs, Fee & Package",
      link: "https://www.iquanta.in/blog/top-12-indian-colleges-accepting-gmat-scores/",
      imageUrl:
        "https://www.iquanta.in/blog/wp-content/uploads/2022/10/c-696x392.jpg",
      category: "B-Schools",
      author: "Mansi Priyal",
    },
  ];

  return (
    <section className="bg-gray-100 border-t border-b mt-16 border-black px-10 py-12">
      <div className="container mx-auto px-4 mt-8">
        {/* Original Articles */}
        <div className="grid md:grid-cols-3 gap-8 cursor-pointer">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <div
                  className="h-72 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${article.imageUrl})` }}
                ></div>
              </a>
              <div className="p-6 text-center">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-2xl font-semibold mb-3 hover:text-red-600 transition-colors">
                    {article.title}
                  </h3>
                </a>
                <div className="text-gray-600 mb-4">
                  <span className="font-medium text-red-600">
                    | {article.category} |
                  </span>
                </div>
                <p className="text-gray-700">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Articles */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalArticles.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div
                  className="h-48 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
              </a>
              <div className="p-4 text-center">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-lg font-bold mb-2 hover:text-red-600">
                    {item.title}
                  </h3>
                </a>
                <div className="flex justify-center gap-2 text-sm text-gray-700">
                  <span className="font-medium text-red-600">
                    | {item.category} |
                  </span>
                  <span>{item.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
