"use client";

import api from "@/api";
import Layouts from "@/components/Layouts";
import ProductList from "@/components/elements/ProductList/ProductList";
import { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await api.get("/products");
    const data = await response.data.payload;
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layouts>
      <div className="max-w-7xl mx-auto px-4">
        <h1>Home</h1>
        <ProductList products={products} />
      </div>
    </Layouts>
  );
};

export default Page;
