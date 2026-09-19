import { Table, Image, Tag, Switch, Popconfirm, Button } from "antd";
import {
  useCategories,
  useUpdateCategories,
  useDeleteCategories,
} from "./useCategories";

const FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="48" height="48" fill="#eeeeee"/></svg>'
  );

export default function TableCategories({ onEdit }) {
  const { data, isLoading } = useCategories();
  const update = useUpdateCategories();
  const remove = useDeleteCategories();

 
  const categories = (data ?? []).filter((c) => !c.deletedAt);

  const columns = [
    {
      title: "Rasm",
      dataIndex: "image",
      key: "image",
      width: 70,
      render: (image) => (
        <Image
          src={image || FALLBACK}
          width={48}
          height={48}
          className="rounded-md object-cover"
          fallback={FALLBACK}
        />
      ),
    },
    {
      title: "Nomi",
      dataIndex: "name",
      key: "name",
      render: (name) => (
        <span className="font-lato font-semibold text-[#23272E]">{name}</span>
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
      title: "Mahsulotlar",
      dataIndex: "_count",
      key: "productsCount",
      align: "center",
      render: (count) => <Tag color="green">{count?.products ?? 0}</Tag>,
    },
    {
      title: "Tartib",
      dataIndex: "sortOrder",
      key: "sortOrder",
      align: "center",
      sorter: (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0),
    },
    {
      title: "Holati",
      dataIndex: "isActive",
      key: "isActive",
      align: "center",
      render: (isActive, record) => (
        <Switch
          checked={isActive}
          loading={update.isPending && update.variables?.id === record.id}
          onChange={(checked) =>
            update.mutate({ id: record.id, values: { isActive: checked } })
          }
        />
      ),
    },
    {
      title: "Yaratilgan",
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
          <Button size="small" onClick={() => onEdit?.(record)}>
            Tahrirlash
          </Button>
          <Popconfirm
            title="Kategoriyani o'chirmoqchimisiz?"
            okText="Ha"
            cancelText="Yo'q"
            okButtonProps={{
              loading: remove.isPending && remove.variables === record.id,
            }}
            onConfirm={() => remove.mutate(record.id)}
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
    <div className="p-4">
      <Table
        columns={columns}
        dataSource={categories}
        rowKey="id"
        loading={isLoading}
        pagination={{ pageSize: 6 }}
        scroll={{ x: 900 }}
        locale={{ emptyText: "Kategoriyalar topilmadi" }}
      />
    </div>
  );
}
