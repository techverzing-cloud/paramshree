
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
    name: "Soul Prakriti Farmhouse",
    category: "Farmhouse Project",
    description:
      "Explore Soul Prakriti, a project by Soul Agro Farms Pvt. Ltd.",
    image: "/images/projectpageproject/gallery/farmhouse/farmhouse1.png",
    href: "/projects/soul-prakriti-farmhouse",
  },

  {
    id: 2,
    name: "Soul Prakriti Villa",
    category: "Villa Project",
    description:
      "Explore Soul Prakriti, a project by Soul Agro Farms Pvt. Ltd.",
    image: "/images/home/featuredimages/soulprakritivilla.jpeg",
    href: "/projects/soul-prakriti-villa",
  },

  // {
  //   id: 3,
  //   name: "Soul Prakriti",
  //   category: "Farmhouse Project",
  //   description:
  //     "Explore Soul Prakriti, a project by Soul Agro Farms Pvt. Ltd.",
  //   image: "/images/home/featureimages/soul-prakriti.jpg",
  //   href: "https://soulprakriti.com",
  // },



  // Add future featured projects here.
  // Keep image paths relative to the public folder.
];