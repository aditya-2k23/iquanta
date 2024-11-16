import DontMiss from "@/components/DontMiss";
import Exams from "@/components/Exams";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestPosts from "@/components/LatestPosts";

export default function Home() {
  return (
    <div className="container overflow-x-hidden h-screen mx-auto bg-[#ededed]">
      <Header />
      <Hero />
      <DontMiss />
      <Exams />
      <h1 className="uppercase italic text-red-500 font-bold text-5xl text-center my-10 p-2">
        Latest Posts
      </h1>
      <LatestPosts />
      <Footer />
    </div>
  );
}
