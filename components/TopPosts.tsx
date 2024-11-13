import React from "react";

interface PostProps {
  title: string;
  link: string;
  imgUrl: string;
  category: string;
}

const TopPosts: React.FC<PostProps> = ({ title, link, imgUrl, category }) => {
  return (
    <div className="bg-gray-50 w-72 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className="h-24 w-36 bg-cover bg-center"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      </a>
      <div className="p-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold hover:text-red-600"
        >
          {title}
        </a>
        <div className="mt-2 text-sm text-gray-600">
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
};

export default TopPosts;
