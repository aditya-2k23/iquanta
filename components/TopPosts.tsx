import React from "react";

interface PostProps {
  title: string;
  link: string;
  imgUrl: string;
  category: string;
}

const TopPosts: React.FC<PostProps> = ({ title, link, imgUrl, category }) => {
  return (
    <div className="w-full h-28 mb-5 p-2">
      <div className="flex items-center justify-center gap-2">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div
              className="h-28 w-28 bg-cover bg-center"
              style={{ backgroundImage: `url(${imgUrl})` }}
            ></div>
          </a>
          <div className="ml-1">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold hover:text-red-600"
            >
              {title}
            </a>
            <div className="mt-2 text-sm font-semibold text-red-600">
              <span>{category}</span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default TopPosts;
