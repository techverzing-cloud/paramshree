import ServicesCTA from "@/src/Component/section/Services/ServicesCTA";
import ServicesHero from "@/src/Component/section/Services/ServicesHero";
import ServicesOffer from "@/src/Component/section/Services/ServicesOffer";
import ServicesProcess from "@/src/Component/section/Services/ServicesProcess";
import ServicesWhyChooseUs from "@/src/Component/section/Services/ServicesWhyChooseUs";



export default function ServicePage() {
  return (
    <main>
        <ServicesHero/>
        <ServicesOffer/>
        <ServicesWhyChooseUs/>
        <ServicesProcess/>
        <ServicesCTA/>
    </main>
  );
}