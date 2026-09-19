import { Form, Input, InputNumber, Modal, Switch } from "antd";
import { useCreateCategories, useUpdateCategories } from "./useCategories";

const slugify = (s = "") =>
  s
    .toLowerCase()
    .trim()
    .replace(/['ʻʼ`’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function CategoryModal({ open, editing, onClose }) {
  const [form] = Form.useForm();
  const create = useCreateCategories();
  const update = useUpdateCategories();

  const isEdit = Boolean(editing);
  const saving = create.isPending || update.isPending;

  const handleFinish = (values) => {
    const payload = {
      name: values.name.trim(),
      slug: values.slug.trim(),
      description: values.description?.trim() || undefined,
      image: values.image?.trim() || undefined,
      sortOrder: values.sortOrder ?? 0,
      isActive: values.isActive ?? true,
    };

    if (isEdit) {
      update.mutate({ id: editing.id, values: payload }, { onSuccess: onClose });
    } else {
      create.mutate(payload, { onSuccess: onClose });
    }
  };

  return (
    <Modal
      title={isEdit ? "Kategoriyani tahrirlash" : "Yangi kategoriya"}
      open={open}
      onCancel={onClose}
      onOk={() => form.submit()}
      okText={isEdit ? "Saqlash" : "Qo'shish"}
      cancelText="Bekor qilish"
      confirmLoading={saving}
      destroyOnClose
    >
      <Form
       
        key={editing?.id ?? "new"}
        form={form}
        layout="vertical"
        initialValues={{
          name: editing?.name,
          slug: editing?.slug,
          description: editing?.description,
          image: editing?.image,
          sortOrder: editing?.sortOrder ?? 0,
          isActive: editing?.isActive ?? true,
        }}
        onValuesChange={(changed) => {
        
          if (!isEdit && changed.name !== undefined && !form.isFieldTouched("slug")) {
            form.setFieldsValue({ slug: slugify(changed.name) });
          }
        }}
        onFinish={handleFinish}
      >
        <Form.Item
          label="Nomi"
          name="name"
          rules={[{ required: true, message: "Nomini kiriting" }]}
        >
          <Input placeholder="Electronics" />
        </Form.Item>

        <Form.Item
          label="Slug"
          name="slug"
          rules={[{ required: true, message: "Slug kiriting" }]}
        >
          <Input placeholder="electronics" />
        </Form.Item>

        <Form.Item label="Tavsif" name="description">
          <Input.TextArea rows={3} placeholder="Qisqacha tavsif" />
        </Form.Item>

        <Form.Item
          label="Rasm (URL)"
          name="image"
          rules={[{ type: "url", message: "To'g'ri havola kiriting" }]}
        >
          <Input placeholder="https://..." />
        </Form.Item>

        <div className="flex gap-6">
          <Form.Item label="Tartib" name="sortOrder">
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item label="Faol" name="isActive" valuePropName="checked">
            <Switch />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}
