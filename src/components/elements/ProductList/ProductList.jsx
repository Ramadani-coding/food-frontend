import { useCartsDispatch } from "@/context/CartContext";
import Image from "next/image";

const ProductList = ({ products }) => {
  const dispatch = useCartsDispatch();

  const handleAddToCart = (product) => {
    dispatch({
      type: "add",
      payload: product,
    });
  };

  return (
    <div className="w-full grid gap-4 md:grid-cols-3 lg:grid-cols-5 grid-cols-1">
      {products.map((product, index) => {
        return (
          <div
            key={index}
            className="bg-white w-full md:w-60 h-[280px] shadow-md rounded-md flex flex-col justify-between"
          >
            <div className="relative w-full h-52 object-contain">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="rounded-tl-md rounded-tr-md w-full object-cover"
              />
            </div>
            <div className="px-2 pt-4">
              <p className="max-w-full text-ellipsis overflow-hidden whitespace-nowrap">
                {product.name}
              </p>
            </div>
            <div className=" p-2 flex justify-between">
              <p className="font-semibold text-lg text-[#DC2626]">
                Rp {new Intl.NumberFormat("id-ID").format(product.price)}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-[#FB923C] text-white rounded-full w-7 h-7 text-lg hover:brightness-[130%] transition-all"
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
