import PartnersCta from "@/src/Component/section/Partners/PartnersCta";
import PartnersDeveloper from "@/src/Component/section/Partners/PartnersDeveloper";
import PartnersHero from "@/src/Component/section/Partners/PartnersHero";
import PartnersOverview from "@/src/Component/section/Partners/PartnersOverview";
import PartnersWhyPartner from "@/src/Component/section/Partners/PartnersWhyPartner";

export default function PartnersPage() {
  return (
    <main>
      <PartnersHero/>
      <PartnersOverview/>
      <PartnersDeveloper/>
      <PartnersWhyPartner/>
      <PartnersCta/>
    </main>
  );
}