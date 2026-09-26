import ContactInformation from "@/src/Component/section/Contact/ContactInformation";
import ContactHero from "../../Component/section/Contact/ContactHero";
import OfficeVisit from "@/src/Component/section/Contact/OfficeVisit";
import FAQ from "@/src/Component/section/Contact/FAQ";
import ServicesCTA from "@/src/Component/section/Services/ServicesCTA";
import EmailSubscription from "@/src/Component/section/Contact/EmailSubscription";
import BrochureDownload from "@/src/Component/section/Contact/BrochureDownload";


export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactInformation/>

      <OfficeVisit/>

      <FAQ/>
      <ServicesCTA/>
      <EmailSubscription/>
      <BrochureDownload/>
      
      {/* Next Contact sections will come here */}
    </main>
  );
}