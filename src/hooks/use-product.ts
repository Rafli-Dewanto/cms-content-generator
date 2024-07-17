import { fetchProductInfo } from "@/api/product";
import { useQuery } from "@tanstack/react-query";

/**
 * Custom hook to fetch product information based on the product slug.
 * It utilizes the `useQuery` hook from `@tanstack/react-query` to manage the fetching state.
 *
 * @param {string} slug - The unique identifier for the product.
 * @returns The query object containing the status of the fetch, and the product data.
 */
export function useProduct(slug: string) {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: async () => fetchProductInfo(slug),
  });
}
