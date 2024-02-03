/* eslint-disable react/no-unescaped-entities */
import Layouts from "@/components/Layouts";
import Image from "next/image";

const Page = () => {
  return (
    <Layouts>
      <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
        <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
              <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
               
                <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">About Us</a>
                <div className="pt-2 pr-0 pb-0 pl-0">
                  <p className="text-sm font-medium inline">Dibuat Oleh:</p>
                  <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 ">Kelompok 5 || 12 Rekayasa Perangkat Lunak 1</a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="block">
                <img
                  src="https://i.ibb.co/SQkSDzx/1.jpg"
                  className="object-cover rounded-lg max-h-64 sm:max-h-96 w-full h-full"
                  alt="About Us Image"
                />
              </div>
            </div>
          </div>
          

          <div className="text-center pb-12">
           
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
              Check our awesome team members
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
       
          <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
              <img className="object-center object-cover h-auto w-full" src="https://i.ibb.co/QDnj2Xt/Whats-App-Image-2024-02-03-at-09-33-39-da801a12.jpg" alt="Team Member" />

              </div>
              <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">Adzkiya Shabrina</p>
                <p className="text-base text-gray-400 font-normal">Front end Developer</p>
              </div>
            </div>

            <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
              <img className="object-center object-cover h-auto w-full" src="https://i.ibb.co/D1kt24B/Whats-App-Image-2024-02-03-at-09-27-22-22a620f4.jpg" alt="Team Member" />

              </div>
              <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">Yuniarti Indah Sari</p>
                <p className="text-base text-gray-400 font-normal">Web Designer</p>
              </div>
            </div>

            <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
              <img className="object-center object-cover h-auto w-full" src="https://i.ibb.co/YcNfh8Z/Whats-App-Image-2024-02-02-at-23-04-47-c15bfeea.jpg" alt="Team Member" />

              </div>
              <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">Ahmad Ramadhani</p>
                <p className="text-base text-gray-400 font-normal">Back end Developer</p>
              </div>
            </div>

            <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
              <img className="object-center object-cover h-auto w-full" src="https://i.ibb.co/HdM7mtT/Whats-App-Image-2024-02-02-at-22-52-28-48e709e6.jpg" alt="Team Member" />

              </div>
              <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">Muhammad Fahmy Abrory</p>
                <p className="text-base text-gray-400 font-normal">Front end Developer</p>
              </div>
            </div>

            <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
              <img className="object-center object-cover h-auto w-full" src="https://i.ibb.co/nPnd3qF/Whats-App-Image-2024-02-03-at-12-59-43-b59fb337.jpg" alt="Team Member" />

              </div>
              <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">Muhammad Naufal Baidhawi</p>
                <p className="text-base text-gray-400 font-normal">Front end Developer</p>
              </div>
            </div>

            <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
              <img className="object-center object-cover h-auto w-full" src="https://i.ibb.co/y0tYMZ8/Whats-App-Image-2024-02-02-at-22-18-58-b8903e86.jpg" alt="Team Member" />

              </div>
              <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">Muhammad Rifki</p>
                <p className="text-base text-gray-400 font-normal">Web Designer</p>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
            {/* ... existing product cards ... */}
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Page;
