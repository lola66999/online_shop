import { useEffect, useState } from "react";
import { CirclePlus, MoreVertical, ArrowUp } from "lucide-react";
import { Table, message, Avatar, Tag } from "antd";

export default function Customer() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token"); // agar auth token kerak bo'lsa
      const res = await fetch(
        "https://oline-shop-backend.onrender.com/api/customers/me",
        {
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        }
      );

      if (!res.ok) {
        throw new Error("Ma'lumotlarni olishda xatolik yuz berdi");
      }

      const data = await res.json();

      // Backend qaysi shaklda qaytarishiga qarab moslashtiring:
      // Ba'zi API'lar { data: [...] } yoki { customers: [...] } shaklida qaytaradi
      const list = Array.isArray(data) ? data : data.customers || data.data || [];

      setCustomers(list);
    } catch (err) {
      message.error(err.message || "Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Customer",
      dataIndex: "fullName",
      key: "fullName",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <Avatar src={record.avatar}>
            {record.fullName?.charAt(0)?.toUpperCase() || "?"}
          </Avatar>
          <span>{record.fullName || record.name || "—"}</span>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (phone) => phone || "—",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "active" ? "green" : "red"}>
          {status ? status.toUpperCase() : "UNKNOWN"}
        </Tag>
      ),
    },
    {
      title: "Registered",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) =>
        date ? new Date(date).toLocaleDateString() : "—",
    },
  ];

  return (
    <div>
      <div className="grid grid-rows-3">
        {/* --- Stats kartalar (o'zgarishsiz qoldirdim) --- */}
        <div className="w-67.5 h-33.75 opacity-100 rounded-lg bg-white shadow-[0px_1px_3px_0px_#00000033] mt-5">
          <div className="flex justify-between px-3 py-3">
            <h1 className="text-[#23272E] font-lato font-bold text-[18px] leading-6.5 tracking-[0%]">
              Total Customer
            </h1>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <MoreVertical size={18} className="text-gray-600" />
            </button>
          </div>
          <section className="flex gap-1 place-items-center px-3 py-3">
            <b className="text-[#023337] font-lato font-bold text-[24px] leading-[100%]">
              {customers.length}
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
        {/* ... boshqa 2 karta ... */}
      </div>

      {/* --- Customers jadvali --- */}
      <div className="bg-white rounded-lg shadow-[0px_1px_3px_0px_#00000033] mt-5 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-lato font-bold text-[18px] text-[#23272E]">
            All Customers
          </h2>
          <button className="flex items-center gap-1 text-[#023337] font-lato font-medium">
            <CirclePlus size={18} />
            Add Customer
          </button>
        </div>

        <Table
          columns={columns}
          dataSource={customers}
          rowKey={(record) => record._id || record.id}
          loading={loading}
          pagination={{ pageSize: 8 }}
        />
      </div>
    </div>
  );
}