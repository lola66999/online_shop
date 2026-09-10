import { CirclePlus, MoreVertical } from "lucide-react";
import img1 from "../assets/img/product1.png";
import img2 from "../assets/img/product2.png";
import img3 from "../assets/img/product3.png";
import img4 from "../assets/img/product4.png";
import img5 from "../assets/img/product5.png";
import img6 from "../assets/img/product6.png";
import img7 from "../assets/img/product7.png";
import img8 from "../assets/img/product8.png";

export default function Categories() {
  return (
    <div>
      <div className="mt-5 px-2 py-2">
        <div className="flex justify-between">
          <h3 className="font-lato font-bold text-[22px] py-2 px-2 leading-none tracking-[0.5%] text-[#023337]">
            Discover
          </h3>
          <div className="flex gap-4 px-2 py-2">
            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
              <CirclePlus size={20} />
              <span>Add Product</span>
            </button>
            <button className="p-2 rounded-lg flex gap-2 bg-white hover:bg-neutral-100 text-black border px-4 py-2  border-neutral-200 transition-colors duration-200">
              <span>More Action</span>
              <MoreVertical size={24} />
            </button>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-y-3">
          <div className="w-60.5 h-22 rounded-md bg-white p-3 gap-2 flex place-items-center shadow-[0px_1px_3px_0px_#00000033]">
            <img src={img1} alt="rasm" className="w-16 h-16 rotate-0 opacity-100 rounded border border-gray-300" />
            <p className="font-['Lato'] font-medium text-lg leading-[100%] tracking-[0.5%] text-black">Electronics</p>
          </div>
           <div className="w-60.5 h-22 rounded-md bg-white p-3 gap-2 flex place-items-center shadow-[0px_1px_3px_0px_#00000033]">
            <img src={img2} alt="rasm" className="w-16 h-16 rotate-0 opacity-100 rounded border border-gray-300" />
            <p className="font-['Lato'] font-medium text-lg leading-[100%] tracking-[0.5%] text-black">Fashion</p>
          </div>
           <div className="w-60.5 h-22 rounded-md bg-white p-3 gap-2 flex place-items-center shadow-[0px_1px_3px_0px_#00000033]">
            <img src={img3} alt="rasm" className="w-16 h-16 rotate-0 opacity-100 rounded border border-gray-300" />
            <p className="font-['Lato'] font-medium text-lg leading-[100%] tracking-[0.5%] text-black">Accessories</p>
          </div>
           <div className="w-60.5 h-22 rounded-md bg-white p-3 gap-2 flex place-items-center shadow-[0px_1px_3px_0px_#00000033]">
            <img src={img4} alt="rasm" className="w-16 h-16 rotate-0 opacity-100 rounded border border-gray-300" />
            <p className="font-['Lato'] font-medium text-lg leading-[100%] tracking-[0.5%] text-black">Home & Kitchen</p>
          </div>
           <div className="w-60.5 h-22 rounded-md bg-white p-3 gap-2 flex place-items-center shadow-[0px_1px_3px_0px_#00000033]">
            <img src={img5} alt="rasm" className="w-16 h-16 rotate-0 opacity-100 rounded border border-gray-300" />
            <p className="font-['Lato'] font-medium text-lg leading-[100%] tracking-[0.5%] text-black">Sports & Outdoors</p>
          </div>
           <div className="w-60.5 h-22 rounded-md bg-white p-3 gap-2 flex place-items-center shadow-[0px_1px_3px_0px_#00000033]">
            <img src={img6} alt="rasm" className="w-16 h-16 rotate-0 opacity-100 rounded border border-gray-300" />
            <p className="font-['Lato'] font-medium text-lg leading-[100%] tracking-[0.5%] text-black">Toys & Games</p>
          </div>
           <div className="w-60.5 h-22 rounded-md bg-white p-3 gap-2 flex place-items-center shadow-[0px_1px_3px_0px_#00000033]">
            <img src={img7} alt="rasm" className="w-16 h-16 rotate-0 opacity-100 rounded border border-gray-300" />
            <p className="font-['Lato'] font-medium text-lg leading-[100%] tracking-[0.5%] text-black">Health & Fitness</p>
          </div>
           <div className="w-60.5 h-22 rounded-md bg-white p-3 gap-2 flex place-items-center shadow-[0px_1px_3px_0px_#00000033]">
            <img src={img8} alt="rasm" className="w-16 h-16 rotate-0 opacity-100 rounded border border-gray-300" />
            <p className="font-['Lato'] font-medium text-lg leading-[100%] tracking-[0.5%] text-black">Books</p>
          </div>
        </div>
      </div>
    </div>
  );
}
