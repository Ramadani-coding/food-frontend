/* eslint-disable react/no-unescaped-entities */
import Layouts from "@/components/Layouts";
import Image from "next/image";

const Page = () => {
  return (
    <Layouts>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center p-4">
          <h1 className="text-2xl text-orange-900 font-bold">ABOUT US</h1>
        </div>
        <div>
          <p>
            Welcome to NyunCake, where passion meets pastry! At NyunCake, we
            take pride in crafting delightful confections that not only
            tantalize your taste buds but also create memorable moments. Our
            journey began with a simple belief - that the joy of life is best
            celebrated with a slice of happiness. With a commitment to quality
            ingredients, meticulous craftsmanship, and a sprinkle of love,
            NyunCake is more than just a bakery; it's a sweet symphony of
            flavors that tells a story with every bite. Join us in savoring
            life's sweetest moments, one cake at a time.
          </p>
          <div className="w-full h-full p-4">
            <div className="relative w-full h-96 object-contain">
              <Image
                src="https://i.ibb.co/mXTpnjc/1.jpg"
                alt="us"
                fill
                className="w-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="text-center p-2">
          <h1 className="text-orange-900 text-2xl font-bold">KELOMPOK 2</h1>
          <p>
            Adzkiya Shabrina | Muhammad Fahmy Abrory | Muhammad Rifky | Muhammad
            Naufal Baidhawi | Ahmad Ramadani | Yuniarti Indah Sari
          </p>
        </div>
      </div>
    </Layouts>
  );
};

export default Page;
