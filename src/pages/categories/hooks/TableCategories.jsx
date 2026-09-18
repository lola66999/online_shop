import { useEffect, useState } from "react";
import { CirclePlus, MoreVertical } from "lucide-react";
import { Table, message, Image, Tag, Switch, Popconfirm, Button } from "antd";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await fetch(
        "https://oline-shop-backend.onrender.com/api/categories",
        {
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        }
      );

      if (!res.ok) throw new Error("Kategoriyalarni olishda xatolik");

      const result = await res.json();
      setCategories(result.data || []);
    } catch (err) {
      message.error(err.message || "Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `https://oline-shop-backend.onrender.com/api/categories/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) throw new Error("O'chirishda xatolik");
      message.success("Kategoriya o'chirildi");
      fetchCategories();
    } catch (err) {
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "Rasm",
      dataIndex: "image",
      key: "image",
      width: 80,
      render: (image) => (
        <Image
          src={image}
          width={48}
          height={48}
          className="rounded-md object-cover"
          fallback="https://via.placeholder.com/48"
        />
      ),
    },
    {
      title: "Nomi",
      dataIndex: "name",
      key: "name",
      render: (name) => (
        <span className="font-lato font-semibold text-[#23272E]">
          {name}
        </span>
      ),
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
      render: (slug) => <Tag color="blue">{slug}</Tag>,
    },
    {
      title: "Tavsif",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
      render: (desc) => (
        <span className="text-[#6A717F] text-[13px]">{desc || "—"}</span>
      ),
    },
    {
      title: "Mahsulotlar soni",
      dataIndex: "_count",
      key: "productsCount",
      align: "center",
      render: (count) => (
        <Tag color="green">{count?.products ?? 0}</Tag>
      ),
    },
    {
      title: "Tartib",
      dataIndex: "sortOrder",
      key: "sortOrder",
      align: "center",
    },
    {
      title: "Holati",
      dataIndex: "isActive",
      key: "isActive",
      align: "center",
      render: (isActive) => (
        <Switch checked={isActive} disabled />
      ),
    },
    {
      title: "Yaratilgan sana",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) =>
        date
          ? new Date(date).toLocaleDateString("uz-UZ", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
          : "—",
    },
    {
      title: "Amallar",
      key: "actions",
      align: "center",
      render: (_, record) => (
        <div className="flex justify-center gap-2">
          <Button size="small">Tahrirlash</Button>
          <Popconfirm
            title="Kategoriyani o'chirmoqchimisiz?"
            okText="Ha"
            cancelText="Yo'q"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button size="small" danger>
              O'chirish
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="p-5">
      <div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="font-lato font-bold text-[18px] text-[#23272E]">
              Kategoriyalar
            </h2>
            <p className="text-[#6A717F] text-[13px] font-lato">
              Jami: {categories.length} ta kategoriya
            </p>
          </div>
          <button className="flex items-center gap-1 bg-[#023337] text-white px-4 py-2 rounded-lg font-lato font-medium hover:opacity-90">
            <CirclePlus size={18} />
            Kategoriya qo'shish
          </button>
        </div>

        <Table
          columns={columns}
          dataSource={categories}
          rowKey="id"
          loading={loading}
          pagination={{ pageSize: 8 }}
        />
      </div>
    </div>
  );
}