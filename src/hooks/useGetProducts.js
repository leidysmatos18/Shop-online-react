import { useEffect, useState } from "react";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleRenderProducts = async () => {
      try {
        const url = "https://api.escuelajs.co/api/v1/products";
        const response = await fetch(url)
        const data = await response.json()
        setProducts(data);
      } catch (error) {
        error;
      }
    };

    handleRenderProducts();
  }, []);

  return products
}

export default useGetProducts;