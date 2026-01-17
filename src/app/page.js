import Hero from "../Components/Home/Hero";
import Welcome from "../Components/Home/Welcome";
import HowItWorks from "../Components/Home/HowItWorks";
import Comments from "../Components/Home/Comments";
import Ready from "../Components/Home/Ready";


export const metadata = {
  title: "Sultan Catering | Premier Street Food & Event Catering in UK",
  description: "Experience authentic Turkish flavors with Sultan Catering. We provide professional food truck catering for weddings, corporate events, and parties across the UK.",
};

export default function Home() {
  return (
    <main className=" bg-[url('/bg.png')] bg-bej">
      <Hero />
      <Welcome />
      <HowItWorks />
      <div 
         className="relative bg-cover bg-center bg-fixed"
         style={{ backgroundImage: "url('/Comment.png')" }} 
       >
          <div className="absolute inset-0 bg-red/20"></div>
          <Comments />
       </div>

      <div 
         className=" bg-no-repeat mt-30 bg-top bg-contain md:bg-auto "
         style={{ backgroundImage: "url('/Sultan.png')" }}
       >
          <Ready />
       </div>
    </main>
  );
}
