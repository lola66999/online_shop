import { CirclePlus, MoreVertical, ArrowUp } from "lucide-react";
export default function Customer() {
  return (
    <div>
      <div className="grid grid-rows-3">
        <div className="w-67.5 h-33.75 opacity-100 rounded-lg bg-white shadow-[0px_1px_3px_0px_#00000033] mt-5">
          <div className="flex justify-between px-3 py-3">
            <h1 className="text-[#23272E] font-lato font-bold text-[18px] leading-6.5 tracking-[0%]">
              Total Customer
            </h1>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <MoreVertical size={18} className="text-gray-600" />
            </button>
          </div>
          <section className="flex gap-1 place-items-center  px-3 py-3">
            <b className="text-[#023337] font-lato font-bold text-[24px] leading-[100%]">
              11.040
            </b>
            <ArrowUp size={18} className="text-[#1EB564]" />
            <p className="font-lato font-medium text-[14px] leading-[100%] text-[#1EB564]">
              14.4%
            </p>
          </section>
          <p className="px-4 text-[#6A717F] font-lato font-normal text-[14px] leading-[100%] tracking-[-2%]">
            Last 7 days{" "}
          </p>
        </div>
        <div className="w-67.5 h-33.75 opacity-100 rounded-lg bg-white shadow-[0px_1px_3px_0px_#00000033] mt-5">
          <div className="flex justify-between px-3 py-3">
            <h1 className="text-[#23272E] font-lato font-bold text-[18px] leading-6.5 tracking-[0%]">
              New Customer
            </h1>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <MoreVertical size={18} className="text-gray-600" />
            </button>
          </div>
          <section className="flex gap-1 place-items-center  px-3 py-3">
            <b className="text-[#023337] font-lato font-bold text-[24px] leading-[100%]">
              2.370
            </b>
            <ArrowUp size={18} className="text-[#1EB564]" />
            <p className="font-lato font-medium text-[14px] leading-[100%] text-[#1EB564]">
              14.4%
            </p>
          </section>
          <p className="px-4 text-[#6A717F] font-lato font-normal text-[14px] leading-[100%] tracking-[-2%]">
            Last 7 days{" "}
          </p>
        </div>
        <div className="w-67.5 h-33.75 opacity-100 rounded-lg bg-white shadow-[0px_1px_3px_0px_#00000033] mt-5">
          <div className="flex justify-between px-3 py-3">
            <h1 className="text-[#23272E] font-lato font-bold text-[18px] leading-6.5 tracking-[0%]">
              Visitor
            </h1>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <MoreVertical size={18} className="text-gray-600" />
            </button>
          </div>
          <section className="flex gap-1 place-items-center  px-3 py-3">
            <b className="text-[#023337] font-lato font-bold text-[24px] leading-[100%]">
              250K``
            </b>
            <ArrowUp size={18} className="text-[#1EB564]" />
            <p className="font-lato font-medium text-[14px] leading-[100%] text-[#1EB564]">
              14.4%
            </p>
          </section>
          <p className="px-4 text-[#6A717F] font-lato font-normal text-[14px] leading-[100%] tracking-[-2%]">
            Last 7 days{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
