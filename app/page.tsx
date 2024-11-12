import DontMiss from "@/components/DontMiss";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="container h-screen mx-auto bg-[#ededed]">
      <Header />
      <Hero />
      <DontMiss />
    </div>
  );
}
