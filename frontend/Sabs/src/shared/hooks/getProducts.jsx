import axios from "axios";
// Corregido: Quita 'useEffecet', solo necesitas 'useEffect' una vez.
import React, { useState, useEffect } from "react";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseProducts = await axios.get(
          "http://localhost:3030/products"
        );
        setProducts(responseProducts.data.products);
        console.log(responseProducts.data.products);
        setError(null);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return {
    products,
    error,
    loading,
  };
};
