import HeroSection from "@/components/landingPage/HeroSection";
import LandingPageCard from "@/components/landingPage/LandingPageCard";

let cardDataList = [
  {
    id: 0,
    title: "Early Access: The New Vibe Bag",
    urlText: "Shop Now",
    url: "/",
    img: "/images/cardImg.jpg",
  },
  {
    id: 1,
    title: "Women's Sandals",
    urlText: "Discover the Selection",
    url: "/",
    img: "/images/cardImg.jpg",
  },
  {
    id: 2,
    title: "Louis Vuitton Perfumes",
    urlText: "Explore the Selection",
    url: "/",
    img: "/images/cardImg.jpg",
  },
];

export default function Home() {
  return (
    <main className="h-full w-full">
      <HeroSection
        category="MEN"
        title="Spring Collection 2024"
        buttonTextOne={"Discover the Collection"}
      />
      <div className="p-6 flex gap-5 flex-nowrap w-full h-full">
        {cardDataList.map((item, i) => {
          return (
            <LandingPageCard
              key={i + item.title}
              img={item.img}
              title={item.title}
              url={item.url}
              urlText={item.urlText}
            />
          );
        })}
      </div>
    </main>
  );
}
