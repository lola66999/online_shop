import logo from "../assets/logo/logo.png";
import { MoreVertical, ArrowUp } from "lucide-react";
import ApexChart from "../components/ApexChart";
import ApexChart2 from "../components/ApexChart2";
export default function Dashboard() {
  return (
    <>
      <div className="">
        <div className="flex gap-5">
          <div className="top-29 left-70 w-90.25 h-55.5 rounded-lg bg-white opacity-100 shadow-[0px_1px_3px_0px_#00000033]">
            <section className="flex justify-between px-4 py-3">
              <h1 className="text-[#23272E] font-lato font-bold text-[18px] leading-6.5 tracking-[0%]">
                Total Sales
              </h1>
              <button className="p-1 rounded-full hover:bg-gray-100">
                <MoreVertical size={18} className="text-gray-600" />
              </button>
            </section>
            <span className="px-4 text-[#6A717F] font-lato font-normal text-[14px] leading-[100%] tracking-[-2%]">
              Last 7 days
            </span>

            <section className="flex gap-1 place-items-center">
              <b className="text-[#023337] px-4 py-4 font-lato font-bold text-[32px] leading-[100%]">
                $350K
              </b>
              <p className="font-lato font-normal text-[16px] leading-[100%] text-[#000000]">
                Sales
              </p>
              <ArrowUp size={18} className="text-[#1EB564]" />
              <p className="font-lato font-medium text-[14px] leading-[100%] text-[#1EB564]">
                10.4%
              </p>
            </section>
            <section className="flex items-center">
              <p className="px-4 text-[#6A717F] font-lato font-normal text-[14px] leading-[100%] tracking-[-2%]">
                Previous 7days{" "}
              </p>
              <span className="text-[#6467F2]">($235)</span>
            </section>
            <div className="flex justify-end mr-4">
              <button className="w-24 h-8 rounded-[50px] border  border-[#6467F2] px-3  py-1 flex items-center justify-center gap-2.5 text-[#6467F2]">
                Details
              </button>
            </div>
          </div>
          <div className="top-29 left-70 w-90.25 h-55.5 rounded-lg bg-white opacity-100 shadow-[0px_1px_3px_0px_#00000033]">
            <section className="flex justify-between px-4 py-3">
              <h1 className="text-[#23272E] font-lato font-bold text-[18px] leading-6.5 tracking-[0%]">
                Total Sales
              </h1>
              <button className="p-1 rounded-full hover:bg-gray-100">
                <MoreVertical size={18} className="text-gray-600" />
              </button>
            </section>
            <span className="px-4 text-[#6A717F] font-lato font-normal text-[14px] leading-[100%] tracking-[-2%]">
              Last 7 days
            </span>

            <section className="flex gap-1 place-items-center">
              <b className="text-[#023337] px-4 py-4 font-lato font-bold text-[32px] leading-[100%]">
                $350K
              </b>
              <p className="font-lato font-normal text-[16px] leading-[100%] text-[#000000]">
                Sales
              </p>
              <ArrowUp size={18} className="text-[#1EB564]" />
              <p className="font-lato font-medium text-[14px] leading-[100%] text-[#1EB564]">
                10.4%
              </p>
            </section>
            <section className="flex items-center">
              <p className="px-4 text-[#6A717F] font-lato font-normal text-[14px] leading-[100%] tracking-[-2%]">
                Previous 7days{" "}
              </p>
              <span className="text-[#6467F2]">($235)</span>
            </section>
            <div className="flex justify-end mr-4">
              <button className="w-24 h-8 rounded-[50px] border  border-[#6467F2] px-3  py-1 flex items-center justify-center gap-2.5 text-[#6467F2]">
                Details
              </button>
            </div>
          </div>
          <div className=" top-29 left-70 w-90.25 h-55.5 rounded-lg bg-white opacity-100 shadow-[0px_1px_3px_0px_#00000033]">
            <section className="flex justify-between px-4 py-3">
              <h1 className="text-[#23272E] font-lato font-bold text-[18px] leading-6.5 tracking-[0%]">
                Total Sales
              </h1>
              <button className="p-1 rounded-full hover:bg-gray-100">
                <MoreVertical size={18} className="text-gray-600" />
              </button>
            </section>
            <span className="px-4 text-[#6A717F] font-lato font-normal text-[14px] leading-[100%] tracking-[-2%]">
              Last 7 days
            </span>

            <section className="flex gap-1 place-items-center">
              <b className="text-[#023337] px-4 py-4 font-lato font-bold text-[32px] leading-[100%]">
                $350K
              </b>
              <p className="font-lato font-normal text-[16px] leading-[100%] text-[#000000]">
                Sales
              </p>
              <ArrowUp size={18} className="text-[#1EB564]" />
              <p className="font-lato font-medium text-[14px] leading-[100%] text-[#1EB564]">
                10.4%
              </p>
            </section>
            <section className="flex items-center">
              <p className="px-4 text-[#6A717F] font-lato font-normal text-[14px] leading-[100%] tracking-[-2%]">
                Previous 7days{" "}
              </p>
              <span className="text-[#6467F2]">($235)</span>
            </section>
            <div className="flex justify-end mr-4">
              <button className="w-24 h-8 rounded-[50px] border  border-[#6467F2] px-3  py-1 flex items-center justify-center gap-2.5 text-[#6467F2]">
                Details
              </button>
            </div>
          </div>
        </div>
       
        <div className="flex gap-5">
          <div className="w-162.5">
            <ApexChart />
          </div>

          <div className="w-108.5">
            <ApexChart2 />
          </div>
        </div>
      </div>
    </>
  );
}
