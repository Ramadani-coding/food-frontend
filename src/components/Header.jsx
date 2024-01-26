"use client";

import { useRouter, usePathname } from "next/navigation";
import { MENU_LIST } from "./constants";

const Header = ({ handleOpenModalCart }) => {
  const router = usePathname();
  const page = useRouter();
  const textActive = "text-[#fb923c]";

  const handleMovePage = (path) => {
    page.push(path);
  };

  return (
    <header className="bg-amber-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div>
            <h1 className="text-orange-300 text-2xl md:text-3xl font-bold">
              NYUNCAKE
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
              className="relative rounded-full bg-[#FB923C] p-2 text-gray-100"
              onClick={handleOpenModalCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
