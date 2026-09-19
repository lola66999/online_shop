import { useState } from "react";
import { Button, Form, Input, Modal, Popconfirm, Switch, Table, Tag } from "antd";
import { Pencil, Plus, Trash2 } from "lucide-react";
import {
  useBrands,
  useCreateBrand,
  useDeleteBrand,
  useUpdateBrand,
} from "../hooks/useBrand";

export default function Brand() {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null); 

  const { data, isLoading } = useBrands();
  const createBrand = useCreateBrand();
  const updateBrand = useUpdateBrand();
  const deleteBrand = useDeleteBrand();

  const saving = createBrand.isPending || updateBrand.isPending;

  const openCreate = () => {
    setEditing(null);
    form.resetFields();
    form.setFieldsValue({ isActive: true });
    setOpen(true);
  };

  const openEdit = (record) => {
    setEditing(record);
    form.setFieldsValue({
      name: record.name,
      slug: record.slug,
      description: record.description,
      logo: record.logo,
      isActive: record.isActive,
    });
    setOpen(true);
  };

  const onFinish = (values) => {
    const options = { onSuccess: () => setOpen(false) };
    if (editing) {
      updateBrand.mutate({ id: editing.id, values }, options);
    } else {
      createBrand.mutate(values, options);
    }
  };

  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
      render: (src) => (
        <img src={src} alt="logo" className="h-8 w-20 rounded object-contain" />
      ),
    },
    { title: "Nomi", dataIndex: "name" },
    { title: "Slug", dataIndex: "slug" },
    { title: "Tavsif", dataIndex: "description", ellipsis: true },
    {
      title: "Mahsulotlar",
      dataIndex: ["_count", "products"],
      align: "center",
    },
    {
      title: "Holati",
      dataIndex: "isActive",
      render: (v) => (
        <Tag color={v ? "green" : "red"}>{v ? "Faol" : "Nofaol"}</Tag>
      ),
    },
    {
      title: "Amallar",
      align: "right",
      render: (_, record) => (
        <div className="flex justify-end gap-2">
          <Button icon={<Pencil size={16} />} onClick={() => openEdit(record)} />
          <Popconfirm
            title="Brendni o'chirasizmi?"
            okText="Ha"
            cancelText="Yo'q"
            onConfirm={() => deleteBrand.mutate(record.id)}
          >
            <Button danger icon={<Trash2 size={16} />} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Brendlar</h1>
        <Button type="primary" icon={<Plus size={16} />} onClick={openCreate}>
          Yangi brend
        </Button>
      </div>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={isLoading}
        pagination={{ pageSize: 10 }}
        scroll={{ x: 800 }}
      />

      <Modal
        title={editing ? "Brendni tahrirlash" : "Yangi brend"}
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => form.submit()}
        confirmLoading={saving}
        okText="Saqlash"
        cancelText="Bekor qilish"
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Nomi" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="slug" label="Slug" rules={[{ required: true }]}>
            <Input placeholder="acer" />
          </Form.Item>
          <Form.Item name="description" label="Tavsif">
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item name="logo" label="Logo (URL)">
            <Input placeholder="https://..." />
          </Form.Item>
          <Form.Item name="isActive" label="Faol" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}