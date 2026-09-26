// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Check, ChevronDown, RotateCcw, SlidersHorizontal } from "lucide-react";

// import { projectsPageData } from "../../../data/projects";

// import "../../css/Projects/ProjectFilters.css";

// type FilterKey =
//   | "propertyType"
//   | "location"
//   | "priceRange"
//   | "developer";

// type FilterValues = {
//   propertyType: string;
//   location: string;
//   priceRange: string;
//   developer: string;
// };

// export default function ProjectFilters() {
//   const { filters } = projectsPageData;

//   const [activeDropdown, setActiveDropdown] =
//     useState<FilterKey | null>(null);

//   const [selectedFilters, setSelectedFilters] =
//     useState<FilterValues>({
//       propertyType: filters.propertyType.options[0],
//       location: filters.location.options[0],
//       priceRange: filters.priceRange.options[0],
//       developer: filters.developer.options[0],
//     });

//   const filtersRef = useRef<HTMLDivElement>(null);

//   /*
//    * Close dropdown when user clicks outside
//    */
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         filtersRef.current &&
//         !filtersRef.current.contains(event.target as Node)
//       ) {
//         setActiveDropdown(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener(
//         "mousedown",
//         handleClickOutside
//       );
//     };
//   }, []);

//   /*
//    * Select a filter option
//    */
//   const handleSelect = (
//     filterKey: FilterKey,
//     value: string
//   ) => {
//     setSelectedFilters((previous) => ({
//       ...previous,
//       [filterKey]: value,
//     }));

//     setActiveDropdown(null);
//   };

//   /*
//    * Reset all filters
//    */
//   const handleClearAll = () => {
//     setSelectedFilters({
//       propertyType: filters.propertyType.options[0],
//       location: filters.location.options[0],
//       priceRange: filters.priceRange.options[0],
//       developer: filters.developer.options[0],
//     });

//     setActiveDropdown(null);
//   };

//   /*
//    * Check whether any filter is active
//    */
//   const hasActiveFilters =
//     selectedFilters.propertyType !==
//       filters.propertyType.options[0] ||
//     selectedFilters.location !==
//       filters.location.options[0] ||
//     selectedFilters.priceRange !==
//       filters.priceRange.options[0] ||
//     selectedFilters.developer !==
//       filters.developer.options[0];

//   const dropdowns: {
//     key: FilterKey;
//     label: string;
//     options: string[];
//   }[] = [
//     {
//       key: "propertyType",
//       label: filters.propertyType.label,
//       options: filters.propertyType.options,
//     },
//     {
//       key: "location",
//       label: filters.location.label,
//       options: filters.location.options,
//     },
//     {
//       key: "priceRange",
//       label: filters.priceRange.label,
//       options: filters.priceRange.options,
//     },
//     {
//       key: "developer",
//       label: filters.developer.label,
//       options: filters.developer.options,
//     },
//   ];

//   return (
//     <section
//       className="project-filters"
//       id="projects"
//     >
//       <div className="project-filters__container">
//         {/* Section Header */}
//         <div className="project-filters__header">
//           <div className="project-filters__heading">
//             <span className="project-filters__eyebrow">
//               FIND YOUR SPACE
//             </span>

//             <h2>
//               Explore Our Projects
//             </h2>
//           </div>

//           <div className="project-filters__header-icon">
//             <SlidersHorizontal
//               size={18}
//               strokeWidth={1.5}
//             />
//           </div>
//         </div>

//         {/* Filters */}
//         <div
//           className="project-filters__controls"
//           ref={filtersRef}
//         >
//           {dropdowns.map((dropdown) => {
//             const isOpen =
//               activeDropdown === dropdown.key;

//             const selectedValue =
//               selectedFilters[dropdown.key];

//             const isSelected =
//               selectedValue !== dropdown.options[0];

//             return (
//               <div
//                 className={`project-filter ${
//                   isOpen
//                     ? "project-filter--open"
//                     : ""
//                 } ${
//                   isSelected
//                     ? "project-filter--selected"
//                     : ""
//                 }`}
//                 key={dropdown.key}
//               >
//                 {/* Dropdown Trigger */}
//                 <button
//                   type="button"
//                   className="project-filter__trigger"
//                   onClick={() =>
//                     setActiveDropdown(
//                       isOpen
//                         ? null
//                         : dropdown.key
//                     )
//                   }
//                   aria-expanded={isOpen}
//                   aria-haspopup="listbox"
//                 >
//                   <span className="project-filter__trigger-content">
//                     <span className="project-filter__label">
//                       {dropdown.label}
//                     </span>

//                     <span className="project-filter__value">
//                       {selectedValue}
//                     </span>
//                   </span>

//                   <span className="project-filter__chevron">
//                     <ChevronDown
//                       size={16}
//                       strokeWidth={1.6}
//                     />
//                   </span>
//                 </button>

//                 {/* Dropdown */}
//                 <div
//                   className={`project-filter__dropdown ${
//                     isOpen
//                       ? "project-filter__dropdown--open"
//                       : ""
//                   }`}
//                   role="listbox"
//                 >
//                   <div className="project-filter__dropdown-inner">
//                     {dropdown.options.map(
//                       (option) => {
//                         const isOptionSelected =
//                           selectedValue ===
//                           option;

//                         return (
//                           <button
//                             type="button"
//                             role="option"
//                             aria-selected={
//                               isOptionSelected
//                             }
//                             key={option}
//                             className={`project-filter__option ${
//                               isOptionSelected
//                                 ? "project-filter__option--active"
//                                 : ""
//                             }`}
//                             onClick={() =>
//                               handleSelect(
//                                 dropdown.key,
//                                 option
//                               )
//                             }
//                           >
//                             <span>
//                               {option}
//                             </span>

//                             {isOptionSelected && (
//                               <Check
//                                 size={15}
//                                 strokeWidth={2}
//                               />
//                             )}
//                           </button>
//                         );
//                       }
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}

//           {/* Clear All */}
//           <button
//             type="button"
//             className={`project-filters__clear ${
//               hasActiveFilters
//                 ? "project-filters__clear--active"
//                 : ""
//             }`}
//             onClick={handleClearAll}
//             disabled={!hasActiveFilters}
//           >
//             <RotateCcw
//               size={14}
//               strokeWidth={1.7}
//             />

//             <span>Clear All</span>
//           </button>
//         </div>

//         {/* Temporary selected state */}
//         <div className="project-filters__summary">
//           <span className="project-filters__summary-dot" />

//           <span>
//             Showing projects matching your
//             preferences
//           </span>
//         </div>
//       </div>
//     </section>
//   );
//
// }


"use client";

import { useEffect, useRef, useState } from "react";
import {
  Check,
  ChevronDown,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";

import { projectsPageData } from "../../../data/projects";
import "../../css/Projects/ProjectFilters.css";

export type FilterKey =
  | "propertyType"
  | "location"
  | "priceRange"
  | "developer";

export type FilterValues = {
  propertyType: string;
  location: string;
  priceRange: string;
  developer: string;
};

type ProjectFiltersProps = {
  selectedFilters: FilterValues;
  onFilterChange: (key: FilterKey, value: string) => void;
  onClearAll: () => void;
};

export default function ProjectFilters({
  selectedFilters,
  onFilterChange,
  onClearAll,
}: ProjectFiltersProps) {
  const { filters } = projectsPageData;

  const [activeDropdown, setActiveDropdown] =
    useState<FilterKey | null>(null);

  const filtersRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside the filter area.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filtersRef.current &&
        !filtersRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // Filter options are kept in the data file so they can be
  // updated without changing the dropdown implementation.
  const dropdowns: {
    key: FilterKey;
    label: string;
    options: string[];
  }[] = [
    {
      key: "propertyType",
      label: filters.propertyType.label,
      options: filters.propertyType.options,
    },
    {
      key: "location",
      label: filters.location.label,
      options: filters.location.options,
    },
    {
      key: "priceRange",
      label: filters.priceRange.label,
      options: filters.priceRange.options,
    },
    {
      key: "developer",
      label: filters.developer.label,
      options: filters.developer.options,
    },
  ];

  const hasActiveFilters = dropdowns.some(
    (dropdown) =>
      selectedFilters[dropdown.key] !== dropdown.options[0]
  );

  return (
    <section className="project-filters" id="projects">
      <div className="project-filters__container">
        {/* Section Header */}
        <div className="project-filters__header">
          <div className="project-filters__heading">
            <span className="project-filters__eyebrow">
              FIND YOUR SPACE
            </span>
            <h2>Explore Our Projects</h2>
          </div>

          <div className="project-filters__header-icon">
            <SlidersHorizontal size={18} strokeWidth={1.5} />
          </div>
        </div>

        {/* Filter Controls */}
        <div
          className="project-filters__controls"
          ref={filtersRef}
        >
          {dropdowns.map((dropdown) => {
            const isOpen = activeDropdown === dropdown.key;
            const selectedValue = selectedFilters[dropdown.key];
            const isSelected =
              selectedValue !== dropdown.options[0];

            return (
              <div
                className={`project-filter ${
                  isOpen ? "project-filter--open" : ""
                } ${
                  isSelected ? "project-filter--selected" : ""
                }`}
                key={dropdown.key}
              >
                {/* Dropdown Trigger */}
                <button
                  type="button"
                  className="project-filter__trigger"
                  onClick={() =>
                    setActiveDropdown(
                      isOpen ? null : dropdown.key
                    )
                  }
                  aria-expanded={isOpen}
                  aria-haspopup="listbox"
                  aria-label={`Select ${dropdown.label}`}
                >
                  <span className="project-filter__trigger-content">
                    <span className="project-filter__label">
                      {dropdown.label}
                    </span>
                    <span className="project-filter__value">
                      {selectedValue}
                    </span>
                  </span>

                  <span className="project-filter__chevron">
                    <ChevronDown
                      size={16}
                      strokeWidth={1.6}
                    />
                  </span>
                </button>

                {/* Dropdown Options */}
                <div
                  className={`project-filter__dropdown ${
                    isOpen
                      ? "project-filter__dropdown--open"
                      : ""
                  }`}
                  role="listbox"
                  aria-label={dropdown.label}
                  aria-hidden={!isOpen}
                >
                  <div className="project-filter__dropdown-inner">
                    {dropdown.options.map((option) => {
                      const isOptionSelected =
                        selectedValue === option;

                      return (
                        <button
                          type="button"
                          role="option"
                          aria-selected={isOptionSelected}
                          key={option}
                          className={`project-filter__option ${
                            isOptionSelected
                              ? "project-filter__option--active"
                              : ""
                          }`}
                          onClick={() => {
                            onFilterChange(dropdown.key, option);
                            setActiveDropdown(null);
                          }}
                        >
                          <span>{option}</span>

                          {isOptionSelected && (
                            <Check
                              size={15}
                              strokeWidth={2}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Clear All */}
          <button
            type="button"
            className={`project-filters__clear ${
              hasActiveFilters
                ? "project-filters__clear--active"
                : ""
            }`}
            onClick={() => {
              onClearAll();
              setActiveDropdown(null);
            }}
            disabled={!hasActiveFilters}
          >
            <RotateCcw size={14} strokeWidth={1.7} />
            <span>Clear All</span>
          </button>
        </div>

        {/* Results Summary */}
        <div className="project-filters__summary">
          <span className="project-filters__summary-dot" />
          <span>
            {hasActiveFilters
              ? "Projects matching your selected preferences"
              : "Explore all available projects"}
          </span>
        </div>
      </div>
    </section>
  );
}