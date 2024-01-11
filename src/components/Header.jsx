import Cart from "@/fiturs/Cart";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div>
            <h1 className="text-[#FB923C] text-3xl font-bold">NYUNFOOD</h1>
            <small className="text-[#444444]">
              Savor Joyful Flavor Advanture!
            </small>
          </div>
          <div className="w-1/2 gap-10 hidden md:flex md:justify-end">
            <Link href="/" className="text-[#2E2E2E] font-semibold">
              Home
            </Link>
            <Link href="/">Menu</Link>
            <Link href="/">Blog</Link>
          </div>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
