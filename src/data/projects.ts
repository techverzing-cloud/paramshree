export const projectsPageData = {
  hero: {
    eyebrow: "OUR PROJECTS",

    title: "Premium Farmhouses, Villas & Plots",

    description:
      "Thoughtfully designed spaces in nature’s embrace, crafted by Soul Agro Farms Pvt. Ltd.",

    cta: {
      label: "Explore All Projects",
      href: "#projects",
    },

    image: "/images/projects/projects-hero.jpg",

    tagline: {
      line1: "Nature",
      line2: "Inspired",
      line3: "Living",
    },
  },

  filters: {
    propertyType: {
      label: "Property Type",
      options: [
        "All Properties",
        "Farmhouses",
        "Villas",
        "Plots",
      ],
    },

    location: {
      label: "Location",
      options: [
        "All Locations",
        "Rishikesh",
        "Dehradun",
        "Jim Corbett",
        "Alwar",
        "Nainital",
        "Mussoorie",
      ],
    },

    priceRange: {
      label: "Price Range",
      options: [
        "All Price Ranges",
        "Under ₹1 Cr",
        "₹1 Cr – ₹2 Cr",
        "₹2 Cr – ₹3 Cr",
        "Above ₹3 Cr",
      ],
    },

    developer: {
      label: "Developer",
      options: [
        "All Developers",
        "Soul Agro Farms Pvt. Ltd.",
      ],
    },
  },

  /*
   * TEMPORARY DUMMY PROJECT DATA
   *
   * Replace this data later with the actual
   * ParamShree / Soul Agro Farms project data.
   */
  listings: [
    {
      id: 1,
      name: "Soul Prakriti",
      type: "Farmhouses",
      badge: "Farmhouse",
      location: "Rishikesh, Uttarakhand",
      area: "1 – 3 Acres",
      category: "Premium Farmhouse",
      view: "Nature Facing",
      price: "₹1.25 Cr",
      priceSuffix: "onwards",
      image: "/images/projects/project-1.jpg",
      href: "soulprakritipage",
    },

    {
      id: 2,
      name: "Riverside Grove Villas",
      type: "Villas",
      badge: "Villa",
      location: "Dehradun, Uttarakhand",
      area: "2.5 Cr onwards",
      category: "Luxury Villas",
      view: "River View",
      price: null,
      priceSuffix: null,
      image: "/images/projects/project-2.jpg",
      href: "/soulprakritipage",
    },

    {
      id: 3,
      name: "The Oak Residences",
      type: "Villas",
      badge: "Villa",
      location: "Jim Corbett, Uttarakhand",
      area: "1.8 Cr onwards",
      category: "Luxury Villas",
      view: "Jungle Views",
      price: null,
      priceSuffix: null,
      image: "/images/projects/project-3.jpg",
      href: "/projects/the-oak-residences",
    },

    {
      id: 4,
      name: "Aravalli Hideaway",
      type: "Farmhouses",
      badge: "Farmhouse",
      location: "Alwar, Rajasthan",
      area: "2.2 Cr onwards",
      category: "Farmhouses",
      view: "Mountain Views",
      price: null,
      priceSuffix: null,
      image: "/images/projects/project-4.jpg",
      href: "/projects/aravalli-hideaway",
    },

    {
      id: 5,
      name: "Lakeview Villas",
      type: "Villas",
      badge: "Villa",
      location: "Nainital, Uttarakhand",
      area: "3.5 Cr onwards",
      category: "Luxury Villas",
      view: "Lake View",
      price: null,
      priceSuffix: null,
      image: "/images/projects/project-5.jpg",
      href: "/projects/lakeview-villas",
    },

    {
      id: 6,
      name: "Pine Crest Estate",
      type: "Plots",
      badge: "Plot",
      location: "Mussoorie, Uttarakhand",
      area: "4.2 Cr onwards",
      category: "Premium Plots",
      view: "Valley Views",
      price: null,
      priceSuffix: null,
      image: "/images/projects/project-6.jpg",
      href: "/projects/pine-crest-estate",
    },
  ],
  whyInvest: {
  eyebrow: "WHY INVEST WITH US",

  title: "Trusted Partnership for a Better Tomorrow",

  description:
    "As a channel partner of Soul Agro Farms Pvt. Ltd., we bring you verified projects, transparent dealings and complete support at every step of your journey.",

  benefits: [
    {
      id: 1,
      title: "Verified Projects",
      description: "100% genuine and RERA compliant.",
      icon: "shield",
    },
    {
      id: 2,
      title: "Expert Guidance",
      description: "Personalised support from site visit to booking.",
      icon: "users",
    },
    {
      id: 3,
      title: "Value for Money",
      description: "Premium locations with high appreciation.",
      icon: "leaf",
    },
    {
      id: 4,
      title: "End-to-End Support",
      description: "From enquiry to possession.",
      icon: "handshake",
    },
  ],
},
ctaBanner: {
  eyebrow: "DON'T JUST INVEST, BELONG",

  title: "Find Your Perfect Farmhouse or Villa",

  description:
    "Explore our handpicked projects and choose the one that matches your lifestyle and dreams.",

  button: {
    label: "Explore All Projects",
    href: "#projects",
  },

  image: "/images/projects/projects-cta.jpg",
},
};