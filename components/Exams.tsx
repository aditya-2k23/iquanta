import React from "react";
import HeroExamCard from "./HeroExamCard";
import BlogList from "./BlogList";

const Exams = () => {
  return (
    <div className="container flex gap-2 px-5 mx-auto">
      <div className="border border-black flex-1 text-center p-4">
        <h2 className="uppercase pb-2 text-center border-b border-black text-red-500 text-4xl font-bold italic mb-4">
          CAT EXAM
        </h2>
        <HeroExamCard />
      </div>
      <div className="border-r border-black flex-1 p-4">
        <h2 className="uppercase pb-2 text-center text-4xl border-b border-black font-bold italic mb-4">
          CLAT
        </h2>
        <BlogList />
      </div>
      <div className="flex-1 p-4">
        <h2 className="uppercase pb-2 text-center text-4xl border-b border-black font-bold italic mb-4">
          CUET
        </h2>
        <BlogList />
      </div>
    </div>
  );
};

export default Exams;
