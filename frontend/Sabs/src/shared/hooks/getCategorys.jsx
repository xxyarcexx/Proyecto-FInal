import axios from "axios";
import React, { useState, useEffect } from "react";

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategories = await axios.get(
          "http://localhost:3030/categories"
        );
        setCategories(responseCategories.data.categories);
        console.log('categorias',responseCategories.data.categories);
        setError(null);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return {
    categories,
    error,
    loading,
  };
};
