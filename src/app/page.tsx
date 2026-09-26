import Image from "next/image";
import Hero from "../Component/section/home/hero";
import HomeAbout from "../Component/section/home/homeabout";
import HomeAmenities from "../Component/section/home/homeAmenities";
import Location from "../Component/section/home/Location"
import HomeFeauturedProjects from "../Component/section/home/homeFeaturedProjects";
import Gallery from "../Component/section/home/gallery";
import GetInTouch from "../Component/section/home/GetInTouch";
import ServicesCTA from "../Component/section/Services/ServicesCTA";
import BrochureDownload from "../Component/section/Contact/BrochureDownload";
export default function Home() {
  return (
     <>
     <Hero />
     <HomeAbout />
     <HomeAmenities/>
     <Location/>
     <HomeFeauturedProjects/>
     <Gallery/>
     <ServicesCTA/>
     <BrochureDownload/>
     </>
  );
}
