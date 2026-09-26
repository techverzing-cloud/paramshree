import ProjectFilters from "@/src/Component/section/Projects/ProjectFilters";
import ProjectGrid from "@/src/Component/section/Projects/ProjectGrid";
import ProjectsCTA from "@/src/Component/section/Projects/ProjectsCTA";
import ProjectsHero from "@/src/Component/section/Projects/ProjectsHero";
import WhyInvest from "@/src/Component/section/Projects/WhyInvest";


export default function ProjectPage() {
  return (
    <main>
      <ProjectsHero/>
      <ProjectFilters/>
      <ProjectGrid/>
      <WhyInvest/>
      <ProjectsCTA/>
    </main>
  );
}