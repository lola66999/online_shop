import Categories from "../pages/Categories";
import Customer from "../pages/Customer";
import Dashboard from "../pages/Dashboard";
import OrderManagment from "../pages/OrderManagment";
import logo from "../assets/logo/logo.png";
import avatar from "../assets/png/avatar (2).png";
import saidbarLogo from "../assets/logo/saidbar.png";
import save from "../assets/svg/sefe.svg";
import save2 from "../assets/svg/save2.svg";
import { Link, NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Package,
  Store,
} from "lucide-react";

export default function Saidbar() {
  return (
    <>
      <div className=" bg-[#FFFFFF] h-screen w-60 flex flex-col border-r">
        <div className="py-6 flex justify-between gap-5">
          <img src={logo} alt="rasm" />
          <img src={saidbarLogo} alt="rasm" />
        </div>
        <p className="font-lato font-normal text-[15px]  px-4 py-2  text-neutral-800 leading-6 tracking-normal align-middle">
          Main menu
        </p>
        <div className="px-3 py-6">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `mt-6 flex gap-2 items-center px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive ? "bg-green-500 text-white" : "text-neutral-500"
              }`
            }
          >
            <LayoutDashboard size={24} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/ordermanagment"
            className={({ isActive }) =>
              `mt-6 flex gap-2 items-center px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive ? "bg-green-500 text-white" : "text-neutral-500"
              }`
            }
          >
            <Package size={24} className="" />
            <span>Ordermanagment</span>
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              `mt-6 flex gap-2 items-center px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive ? "bg-green-500 text-white" : "text-neutral-500"
              }`
            }
          >
            <ShoppingBag size={24} className="" />
            <span>Categories</span>
          </NavLink>
          <NavLink
            to="/customer"
            className={({ isActive }) =>
              `mt-6 flex gap-2 items-center px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive ? "bg-green-500 text-white" : "text-neutral-500"
              }`
            }
          >
            <Users size={24} className="" />
            <span>Customer</span>
          </NavLink>
        </div>

        <div className="mt-auto">
          <div className=" flex items-center  justify-between  gap-2 pt-4">
            <div className="ml-4 flex gap-2">
              <img src={avatar} className="w-8 h-8 rounded-full" />
              <section className="flex flex-col">
                <b className="font-inter font-semibold text-sm leading-4 tracking-normal text-neutral-800">
                  Dealport
                </b>
                <span className="text-neutral-600 font-inter font-normal text-sm leading-4 tracking-normal">
                  avatar@gmail.com
                </span>
              </section>
            </div>
            <img src={save} alt="" size={24} className="mr-3" />
          </div>
          <div className="w-61 h-12 rounded-md flex justify-between mt-5 opacity-100 pt-3 pr-5 pb-3 pl-5 gap-2 shadow-[0px_1px_3px_0px_#00000033] ">
            <div className="flex gap-2 ml-0 items-center">
              <Store size={24} className="text-[#023337]" />
              <b className="font-inter font-semibold text-sm leading-4 tracking-normal text-[#023337]">
                Your Shop
              </b>
            </div>
            <img src={save2} alt="" size={18} />
          </div>
        </div>
      </div>
    </>
  );
}
