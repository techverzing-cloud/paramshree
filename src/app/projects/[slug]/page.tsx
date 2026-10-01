import { notFound } from "next/navigation";

import Amenities from "@/src/Component/section/ProjectsPageProjects/Amenities"; 
import AboutProject from "../../../Component/section/ProjectsPageProjects/AboutProject"; 
import Hero from "@/src/Component/section/ProjectsPageProjects/Hero"; import Gallery from "../../../Component/section/ProjectsPageProjects/Gallery"; 
import CraftedDetails from "@/src/Component/section/ProjectsPageProjects/CraftedDetails"; 
import Location from "../../../Component/section/ProjectsPageProjects/Location"; 
import FloorPlans from "@/src/Component/section/ProjectsPageProjects/FloorPlans"; 
import WhyThisProject from "@/src/Component/section/ProjectsPageProjects/WhyThisProject"; 
import { ProjectPageProject } from "@/src/data/ProjectPageProject";
import EmailSubscription from "@/src/Component/section/Contact/EmailSubscription";
import ProjectsCTA from "@/src/Component/section/Projects/ProjectsCTA";
import Videos from "../../../Component/section/ProjectsPageProjects/Videos";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(ProjectPageProject).map((slug) => ({
    slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  if (!(slug in ProjectPageProject)) {
    notFound();
  }

  const project =
    ProjectPageProject[
      slug as keyof typeof ProjectPageProject
    ];

  return (
    <main>
      <Hero project={project} />

      <AboutProject project={project} />

      <Amenities project={project} />

      <Gallery project={project} />
      <Videos project={project}/>

      <CraftedDetails project={project} />

      <Location project={project} />

      <FloorPlans project={project} />

      <WhyThisProject project={project} />
      <ProjectsCTA/>
      <EmailSubscription/>
      
    </main>
  );
}