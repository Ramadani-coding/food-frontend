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
        <div className="text-center p-4">
          <h1 className="text-2xl font-semibold text-orange-900">
            OUR NYUNCAKE
          </h1>
          <p className="text-gray-900 font-medium">
            Tempting Treats, Unforgettable Bites
          </p>
        </div>
        <ProductList products={products} />
      </div>
    </Layouts>
  );
};

export default Page;
