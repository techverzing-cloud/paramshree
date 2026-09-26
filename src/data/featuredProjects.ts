
export interface FeaturedProject {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  href: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    name: "Soul Prakriti",
    category: "Farmhouse Project",
    description:
      "Explore Soul Prakriti, a project by Soul Agro Farms Pvt. Ltd.",
    image: "/homehero/hero1.jpg",
    href: "/soulprakritipage",
  },

  {
    id: 2,
    name: "Soul Prakriti",
    category: "Farmhouse Project",
    description:
      "Explore Soul Prakriti, a project by Soul Agro Farms Pvt. Ltd.",
    image: "/images/gallery/soul-prakriti-1.jpg",
    href: "https://soulprakriti.com",
  },

  {
    id: 3,
    name: "Soul Prakriti",
    category: "Farmhouse Project",
    description:
      "Explore Soul Prakriti, a project by Soul Agro Farms Pvt. Ltd.",
    image: "/images/gallery/soul-prakriti-2.jpg",
    href: "https://soulprakriti.com",
  },



  // Add future featured projects here.
  // Keep image paths relative to the public folder.
];