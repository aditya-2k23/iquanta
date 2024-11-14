import React from "react";

interface BlogItem {
  title: string;
  imageUrl: string;
  postUrl: string;
}

const blogPosts: BlogItem[] = [
  {
    title: "Top 20 CLAT Colleges in India Accepting CLAT 2024 Scores",
    imageUrl:
      "https://www.iquanta.in/blog/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-03-at-5.34.58-PM-696x392.jpeg",
    postUrl: "https://www.iquanta.in/blog/top-clat-colleges-in-india/",
  },
  {
    title: "Top Law Entrance Exams 2024-25: Registration, Colleges, Details",

    imageUrl:
      "https://www.iquanta.in/blog/wp-content/uploads/2024/01/Law-Entrance-Tests-696x392.jpeg",
    postUrl:
      "https://www.iquanta.in/blog/top-law-entrance-exams-registration-colleges-details/",
  },
  {
    title: "NLU Placement 2023: Average and Highest Placements of all NLUs",

    imageUrl:
      "https://www.iquanta.in/blog/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-20-at-12.20.11-PM-696x392.jpeg",
    postUrl: "https://www.iquanta.in/blog/nlu-placement/",
  },

  {
    title: "Aditya L1 : Unveiling the Mysteries of the Sun",
    imageUrl:
      "https://www.iquanta.in/blog/wp-content/uploads/2024/01/Ram-Mandir-Movement-Six-Decades-of-Changing-Gujarats-Sociopolitical-Scene-5-1-696x392.png",
    postUrl:
      "https://www.iquanta.in/blog/aditya-l1-unveiling-the-mysteries-of-the-sun/",
  },

  {
    title: "Current Affairs For CLAT 2025: Strategy and Practice Questions",
    imageUrl:
      "https://www.iquanta.in/blog/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-17-at-11.03.59-AM-696x392.jpeg",
    postUrl: "https://www.iquanta.in/blog/current-affairs-for-clat/",
  },
  {
    title: "CLAT Seats 2024: Domicile and General Seat Matrix",
    imageUrl:
      "https://www.iquanta.in/blog/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-19-at-2.07.23-PM-696x392.jpeg",
    postUrl:
      "https://www.iquanta.in/blog/clat-seats-2024-domicile-and-general-seat-matrix/",
  },
  {
    title: "NLU Admission Process 2025 : Application, Eligibility & Dates",
    imageUrl:
      "https://www.iquanta.in/blog/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-14-at-1.32.57-PM-696x392.jpeg",
    postUrl: "https://www.iquanta.in/blog/nlu-admission-process/",
  },
];

const BlogList: React.FC = () => {
  return (
    <div className="">
      {blogPosts.map((post, index) => (
        <div key={index} className="flex flex-col md:flex-row overflow-hidden">
          {/* Content Section */}
          <div className="flex flex-col p-3 md:w-2/3">
            <h3 className="text-xl leading-6 font-semibold">
              <a
                href={post.postUrl}
                className="hover:text-red-700"
                title={post.title}
              >
                {post.title}
              </a>
            </h3>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 flex items-center justify-center md:w-1/3">
            <a href={post.postUrl} className="block h-full w-full">
              <div
                className="bg-cover mt-2 bg-center h-16 w-32"
                style={{ backgroundImage: `url(${post.imageUrl})` }}
              ></div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
