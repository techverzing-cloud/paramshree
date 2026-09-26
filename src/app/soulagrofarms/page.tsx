import About from "@/src/Component/section/Soul Agro Farms Pvt ltd/About";
import Hero from "../../Component/section/Soul Agro Farms Pvt ltd/Hero";
import WhyChooseUs from "@/src/Component/section/Soul Agro Farms Pvt ltd/WhyChooseUs";
import Gallery from "@/src/Component/section/Soul Agro Farms Pvt ltd/Gallery";
import Location from "@/src/Component/section/Soul Agro Farms Pvt ltd/Location";
import Amenities from "@/src/Component/section/Soul Agro Farms Pvt ltd/Amenities";
import Projects from "@/src/Component/section/Soul Agro Farms Pvt ltd/Projects";
import Testimonials from "@/src/Component/section/Soul Agro Farms Pvt ltd/Testimonials";
import Investment from "@/src/Component/section/Soul Agro Farms Pvt ltd/Investment";
import EmailSubscription from "@/src/Component/section/Contact/EmailSubscription";

export default function SoulAgroFarmsPage() {
  return (
    <main>
      <Hero />
      <About/>
      <WhyChooseUs/>
      <Gallery/>
      <Location/>
      <Amenities/>
      <Projects/>
      <Testimonials/>
      <Investment/>
      <EmailSubscription/>
    </main>
  );
}