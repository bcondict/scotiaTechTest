import { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../api/productsApi";
import type { IProduct } from "../types/product.types";

export const useProduct = (searchTerms: string, category: string) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        if (isMounted) {
          setProducts(data);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setLoading(false);
          console.log(error);
        }
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLocaleLowerCase()
        .includes(searchTerms.toLocaleLowerCase());

      const matchesCategory =
        category == "Todos" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerms, category]);

  return { filteredProducts, loading };
};
