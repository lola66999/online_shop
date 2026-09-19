import { CirclePlus, MoreVertical } from "lucide-react";
import { useState } from "react";

import img1 from "../assets/img/product1.png";
import img2 from "../assets/img/product2.png";
import img3 from "../assets/img/product3.png";
import img4 from "../assets/img/product4.png";
import img5 from "../assets/img/product5.png";
import img6 from "../assets/img/product6.png";
import img7 from "../assets/img/product7.png";
import img8 from "../assets/img/product8.png";
import TableCategories from "../hooks/TableCategories";
import CategoryModal from "../hooks/CategoryModal";

// Yuqoridagi rasmli kartalar (avvalgidek joyida qoladi)
const topCards = [
  { img: img1, title: "Electronics" },
  { img: img2, title: "Fashion" },
  { img: img3, title: "Accessories" },
  { img: img4, title: "Home & Kitchen" },
  { img: img5, title: "Sports & Outdoors" },
  { img: img6, title: "Toys & Games" },
  { img: img7, title: "Health & Fitness" },
  { img: img8, title: "Books" },
];

export default function Categories() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null); // null => yangi qo'shish

  const openCreate = () => {
    setEditing(null);
    setModalOpen(true);
  };

  const openEdit = (record) => {
    setEditing(record);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <div className="mt-5 px-2 py-2">
        {/* tepa categories navbar qismi shu yerda */}
        <div className="flex justify-between">
          <h3 className="font-lato font-bold text-[22px] py-2 px-2 leading-none tracking-[0.5%] text-[#023337]">
            Discover
          </h3>
          <div className="flex gap-4 px-2 py-2">
            <button
              onClick={openCreate}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <CirclePlus size={20} />
              <span>Add Category</span>
            </button>
            <button className="p-2 rounded-lg flex gap-2 bg-white hover:bg-neutral-100 text-black border px-4 py-2  border-neutral-200 transition-colors duration-200">
              <span>More Action</span>
              <MoreVertical size={24} />
            </button>
          </div>
        </div>
        {/* tepa categories navbar qismi shu yerda */}

        <div className="mt-5 grid grid-cols-4 gap-y-3">
          {topCards.map((card) => (
            <div
              key={card.title}
              className="w-60.5 h-22 rounded-md bg-white p-3 gap-2 flex place-items-center shadow-[0px_1px_3px_0px_#00000033]"
            >
              <img
                src={card.img}
                alt="rasm"
                className="w-16 h-16 rotate-0 opacity-100 rounded border border-gray-300"
              />
              <p className="font-['Lato'] font-medium text-lg leading-[100%] tracking-[0.5%] text-black">
                {card.title}
              </p>
            </div>
          ))}
        </div>

        {/* Jadval: absolute o'rniga oddiy oqimda turadi, shunda pagination ham to'g'ri chiqadi */}
        <div className="mt-5 rounded-lg bg-white shadow-[0px_1px_3px_0px_#00000033]">
          <TableCategories onEdit={openEdit} />
        </div>
      </div>

      <CategoryModal open={modalOpen} editing={editing} onClose={closeModal} />
    </div>
  );
}
