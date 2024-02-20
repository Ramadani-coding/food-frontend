"use client";

import api from "@/api";
import Hero from "@/components/Hero";
import Layouts from "@/components/Layouts";
import ProductList from "@/components/elements/ProductList/ProductList";
import Footer from "@/components/footer";
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
        <Hero />
        <div className="mt-4 md:mt-12">
          <div className="text-center p-4">
            <h1 className="text-2xl font-semibold text-orange-900" id="order">
              OUR NYUNCAKE
            </h1>
            <p className="text-gray-900 font-medium">
              Tempting Treats, Unforgettable Bites
            </p>
          </div>
        </div>
        <ProductList products={products} />
        <Footer />
      </div>
    </Layouts>
  );
};

export default Page;
