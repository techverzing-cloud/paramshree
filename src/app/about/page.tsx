
import OurStory from "@/src/Component/section/About/OurStory";
import Hero from "../../Component/section/About/Hero";
import OurValues from "@/src/Component/section/About/OurValues";
import WhyChooseUs from "@/src/Component/section/About/WhyChooseUs";
import Partnership from "@/src/Component/section/About/Partnership";
import OurCommitment from "@/src/Component/section/About/OurCommitment";

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <OurStory/>
      <OurValues/>
      <WhyChooseUs/>
      <Partnership/>
      <OurCommitment/>
    </main>
  );
}