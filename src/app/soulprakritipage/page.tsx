import AboutProject from "@/src/Component/section/Soulprakriti/AboutProject";
import Hero from "../../Component/section/Soulprakriti/Hero";
import WhySoulPrakriti from "@/src/Component/section/Soulprakriti/WhySoulPrakriti";
import Amenities from "@/src/Component/section/Soulprakriti/Amenities";
import Gallery from "@/src/Component/section/Soulprakriti/Gallery";
import Location from "@/src/Component/section/Soulprakriti/Location";
import CraftedDetails from "@/src/Component/section/Soulprakriti/CraftedDetails";
import FloorPlans from "@/src/Component/section/Soulprakriti/FloorPlans";
import EmailSubscription from "@/src/Component/section/Contact/EmailSubscription";


export default function SoulPrakritiPage() {
  return (
    <>
      <Hero />
      <AboutProject/>
      <FloorPlans/>
      <WhySoulPrakriti/>
      
      <Gallery/>
      <Amenities/>
      <Location/>
      <CraftedDetails/>
      <EmailSubscription/>
      
      {/* Next sections will come here */}
    </>
  );
}