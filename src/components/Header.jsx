"use client";

import { useRouter, usePathname } from "next/navigation";
import { MENU_LIST } from "./constants";
import Link from "next/link";
import CartModal from "@/features/cart/CartModal";
import { useCarts, useCartsDispatch } from "@/context/CartContext";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [payAmount, setPayAmount] = useState();
  const router = usePathname();
  const page = useRouter();
  const carts = useCarts();
  const dispatch = useCartsDispatch();

  const handleMovePage = (path) => {
    page.push(path);
  };

  const handleAddToCart = (product) => {
    dispatch({
      type: "add",
      payload: product,
    });
  };

  const handleDecsreaseCart = (product) => {
    dispatch({
      type: "decsrease",
      payload: product,
    });
  };

  const getTotalPrice = () => {
    let totalPrice = 0;

    for (let i = 0; i < carts.length; i++) {
      totalPrice += carts[i].price * carts[i].quantity;
    }

    return totalPrice;
  };

  const handleCangePay = (event) => {
    const { target } = event;
    const { value } = target;

    setPayAmount(value);
  };

  // const handleCahckaout = async () => {
  //   try {
  //     const payload = {
  //       totalPrice
  //     }
  //   } catch {

  //   }
  // }

  return (
    <header className="bg-amber-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div>
            <h1 className="text-orange-300 text-2xl md:text-3xl font-bold">
              <Link href="/">NYUNCAKE</Link>
            </h1>
            <small className="text-orange-300 text-xs md:text-[14px]">
              Savor Joyful Flavor Advanture!
            </small>
          </div>
          <div className="w-1/2 gap-10 hidden md:flex md:justify-end">
            <ul className="md:flex md:justify-end gap-10">
              {MENU_LIST.map((menu, index) => {
                return (
                  <li
                    key={index}
                    className={
                      router === menu.path
                        ? "text-orange-300 hover:text-orange-300 cursor-pointer"
                        : "text-orange-100 hover:text-[#fb923c] transition-all cursor-pointer"
                    }
                    onClick={() => handleMovePage(menu.path)}
                  >
                    {menu.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <input
              type="text"
              placeholder="Mau makan apa?"
              className="p-2 rounded-md"
            />
          </div>
          <div>
            <button
              type="button"
              className="relative rounded-full bg-[#FB923C] p-2 text-gray-100 hover:drop-shadow-lg hover:scale-110 transition-all border-none"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box flex flex-col">
                <h3 className="font-bold text-lg">Belanjaa Kamu</h3>
                <div className="mt-6 flex flex-col gap-6 overflow-auto max-h-[80%]">
                  {carts.map((cart, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row justify-between"
                      >
                        <div className="relative w-14 mr-2">
                          <Image
                            src={cart.image}
                            alt={cart.name}
                            fill
                            className="rounded-tl-md rounded-md w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-1 max-w-[70%] p-3">
                          <p className="max-w-full text-ellipsis overflow-hidden whitespace-nowrap">
                            {" "}
                            {cart.name}{" "}
                          </p>
                          <p>
                            Rp{" "}
                            {new Intl.NumberFormat("id-ID").format(cart.price)}
                          </p>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-between w-[30%] ml-auto">
                          <button
                            onClick={() => handleDecsreaseCart(cart)}
                            className="w-6 h-6 bg-[#FB923C] rounded-full text-white hover:brightness-[130%] transition-all"
                          >
                            -
                          </button>
                          <p> {cart.quantity} </p>
                          <button
                            onClick={() => handleAddToCart(cart)}
                            className="w-6 h-6 bg-[#FB923C] rounded-full text-white hover:brightness-[130%] transition-all"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-auto flex flex-col gap-5 pt-4">
                  <div className="flex flex-row justify-between">
                    <p>Total Harga</p>
                    <p>{getTotalPrice()}</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-between">
                    <label>Bayar</label>
                    <input
                      type="number"
                      placeholder="0"
                      className="border-2 border-solid border-gray-200 rounded-3xl text-[14px] pt-[6px] pr-[6px] pb-[6px] pl-[14px] w-[75%] outline-none"
                      onChange={handleCangePay}
                    />
                  </div>
                  <button className="bg-[#78350F] h-10 text-center border-none rounded-3xl outline-none text-white hover:brightness-[130%] transition-all">
                    Checkout
                  </button>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
