// "use client";

// import React, { useState } from "react";
// import MenuFilters from "../../features/menu/components/MenuFilters";
// import MenuGrid from "../../features/menu/components/MenuGrid";
// import { useGetUserProductsQuery, useGetCategoryQuery } from "@/store/services/api/productApi";

// export default function MenuSection() {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [page, setPage] = useState<number>(1);

//   const { data: categoriesResponse, isLoading: categoriesLoading } =
//     useGetCategoryQuery({});

//   const {
//     data: productsResponse,
//     isLoading: productsLoading,
//     isFetching,
//   } = useGetUserProductsQuery({
//     search: searchQuery,
//     category: activeCategory,
//     page,
//   });

//   console.log("Products Response:", productsResponse);

//   const queryArgs = {
//     search: searchQuery,
//     category: activeCategory,
//     page,
//   };

//   console.log("Query Args:", queryArgs);

//   const categoriesList = categoriesResponse?.data?.categories || [];
//   console.log("Categories Response:", categoriesResponse);
//   const productsList = productsResponse?.data?.products || [];
//   console.log("Products List:", productsList);
//   console.log("Products Length:", productsList.length);
//   const pagination = productsResponse?.data?.pagination;

//   const transformedCategories = [
//     { id: "all", name: "All Menu" },
//     ...categoriesList,
//   ];

//   console.log("Active Category:", activeCategory);

//   return (
//     <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//       <div className="mb-8 max-w-md mx-auto">
//         <input
//           type="text"
//           placeholder="Search items..."
//           value={searchQuery}
//           onChange={(e) => {
//             setSearchQuery(e.target.value);
//             setPage(1);
//           }}
//           className="w-full px-4 py-2.5 rounded-full border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary bg-white text-stone-800"
//         />
//       </div>

//       <div className="mb-10">
//         {categoriesLoading ? (
//           <div className="h-10 w-full bg-stone-100 animate-pulse rounded-full" />
//         ) : (
//           <MenuFilters
//             categories={transformedCategories}
//             activeCategory={activeCategory}
//             onCategoryChange={(name) => {
//               console.log("Setting category:", name);
//               setActiveCategory(name);
//               setPage(1);
//             }}
//           />
//         )}
//       </div>

//       <div
//         className={
//           isFetching || productsLoading ? "opacity-60 transition-opacity" : ""
//         }
//       >
//         {productsLoading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {[...Array(4)].map((_, i) => (
//               <div
//                 key={i}
//                 className="h-80 w-full bg-stone-100 animate-pulse rounded-2xl"
//               />
//             ))}
//           </div>
//         ) : (
//           <MenuGrid items={productsList} />
//         )}
//       </div>

//       {pagination && pagination.totalPages > 1 && (
//         <div className="mt-12 flex justify-center items-center gap-4">
//           <button
//             disabled={page === 1}
//             onClick={() => setPage((prev) => prev - 1)}
//             className="px-4 py-2 border rounded-full text-xs disabled:opacity-40"
//           >
//             Previous
//           </button>
//           <span className="text-xs text-stone-500">
//             Page {pagination.currentPage} of {pagination.totalPages}
//           </span>
//           <button
//             disabled={page === pagination.totalPages}
//             onClick={() => setPage((prev) => prev + 1)}
//             className="px-4 py-2 border rounded-full text-xs disabled:opacity-40"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }




"use client";

import React, { useState, useEffect } from "react";
import MenuFilters from "../../features/menu/components/MenuFilters";
import MenuGrid from "../../features/menu/components/MenuGrid";
import { useGetUserProductsQuery, useGetCategoryQuery } from "@/store/services/api/productApi";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  // 1. Introduce a separate state for the debounced search term
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  // 2. Debounce Effect: Wait 300ms after the user stops typing to trigger the query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300); // 300ms is standard for snappy UX without overloading the network

    return () => clearTimeout(handler);
  }, [searchQuery]);

  const { data: categoriesResponse, isLoading: categoriesLoading } = useGetCategoryQuery({});

  // 3. Pass the *debounced* search value to RTK Query instead of the raw input value
  const {
    data: productsResponse,
    isLoading: productsLoading,
    isFetching,
  } = useGetUserProductsQuery({
    search: debouncedSearch,
    category: activeCategory,
    page,
  });

  const categoriesList = categoriesResponse?.data?.categories || [];
  const productsList = productsResponse?.data?.products || [];
  const pagination = productsResponse?.data?.pagination;

  const transformedCategories = [
    { id: "all", name: "All Menu" },
    ...categoriesList,
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(1); // Reset page on type
          }}
          className="w-full px-4 py-2.5 rounded-full border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary bg-white text-stone-800"
        />
      </div>

      <div className="mb-10">
        {categoriesLoading ? (
          <div className="h-10 w-full bg-stone-100 animate-pulse rounded-full" />
        ) : (
          <MenuFilters
            categories={transformedCategories}
            activeCategory={activeCategory}
            onCategoryChange={(name) => {
              setActiveCategory(name);
              setPage(1);
            }}
          />
        )}
      </div>

      <div className={isFetching || productsLoading ? "opacity-60 transition-opacity" : ""}>
        {productsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-80 w-full bg-stone-100 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <MenuGrid items={productsList} />
        )}
      </div>

      {pagination && pagination.totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center gap-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="px-4 py-2 border rounded-full text-xs disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-xs text-stone-500">
            Page {pagination.currentPage} of {pagination.totalPages}
          </span>
          <button
            disabled={page === pagination.totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className="px-4 py-2 border rounded-full text-xs disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}