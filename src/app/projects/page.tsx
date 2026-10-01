


"use client";

import { useMemo, useState } from "react";

import ProjectFilters, {
  type FilterKey,
  type FilterValues,
} from "@/src/Component/section/Projects/ProjectFilters";

import ProjectGrid from "@/src/Component/section/Projects/ProjectGrid";
import ProjectsCTA from "@/src/Component/section/Projects/ProjectsCTA";
import ProjectsHero from "@/src/Component/section/Projects/ProjectsHero";
import WhyInvest from "@/src/Component/section/Projects/WhyInvest";

import { projectsPageData } from "@/src/data/projects";

export default function ProjectPage() {
  const { filters, listings } = projectsPageData;

  const getDefaultFilters = (): FilterValues => ({
    propertyType: filters.propertyType.options[0],
    location: filters.location.options[0],
    priceRange: filters.priceRange.options[0],
    developer: filters.developer.options[0],
  });

  const [selectedFilters, setSelectedFilters] =
    useState<FilterValues>(getDefaultFilters);

  const handleFilterChange = (
    key: FilterKey,
    value: string
  ) => {
    setSelectedFilters((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const handleClearAll = () => {
    setSelectedFilters(getDefaultFilters());
  };

  
  
  const filteredListings = useMemo(() => {
  return listings.filter((project) => {
    // Property Type
    const matchesPropertyType =
      selectedFilters.propertyType === filters.propertyType.options[0] ||
      project.type === selectedFilters.propertyType;

    // Location
    const matchesLocation =
  selectedFilters.location === filters.location.options[0] ||
  project.location
    .toLowerCase()
    .includes(selectedFilters.location.toLowerCase());

    // Price
    const price = project.priceCr;

    let matchesPrice = true;

    if (selectedFilters.priceRange !== filters.priceRange.options[0]) {
      // "On Request" properties don't belong to a specific price range
      if (typeof price !== "number") {
        matchesPrice = false;
      } else {
        switch (selectedFilters.priceRange) {
          case "Under ₹1 Cr":
            matchesPrice = price < 1;
            break;

          case "₹1 Cr – ₹2 Cr":
            matchesPrice = price >= 1 && price < 2;
            break;

          case "₹2 Cr – ₹3 Cr":
            matchesPrice = price >= 2 && price <= 3;
            break;

          case "Above ₹3 Cr":
            matchesPrice = price > 3;
            break;
        }
      }
    }

    // Developer
    const matchesDeveloper =
      selectedFilters.developer === filters.developer.options[0] ||
      project.developer === selectedFilters.developer;

    return (
      matchesPropertyType &&
      matchesLocation &&
      matchesPrice &&
      matchesDeveloper
    );
  });
}, [listings, filters, selectedFilters]);
  return (
    <main>
      <ProjectsHero />

      <ProjectFilters
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onClearAll={handleClearAll}
      />

      <ProjectGrid listings={filteredListings} />

      <WhyInvest />
      <ProjectsCTA />
    </main>
  );
}