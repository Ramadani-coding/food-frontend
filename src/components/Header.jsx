"use client";

import Cart from "@/fiturs/cart/Cart";
import { useRouter, usePathname } from "next/navigation";
import { MENU_LIST } from "./constants";

const Header = () => {
  const router = usePathname();
  const page = useRouter();
  const textActive = "text-[#fb923c]";

  const handleMovePage = (path) => {
    page.push(path);
  };

  return (
    <header className="bg-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div>
            <h1 className="text-[#fb923c] text-2xl md:text-3xl font-bold">
              NYUNFOOD
            </h1>
            <small className="text-[#444444] text-xs md:text-[14px]">
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
                        ? "text-[#fb923c] hover:text-[#fb923c] cursor-pointer"
                        : "text-[#444444] hover:text-[#fb923c] transition-all cursor-pointer"
                    }
                    onClick={() => handleMovePage(menu.path)}
                  >
                    {menu.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
