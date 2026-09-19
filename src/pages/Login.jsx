import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Navigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

export default function Login() {
  const { isPending, mutate } = useLogin();

  if (localStorage.getItem("accessToken")) {
    return <Navigate to="/dashboard" replace />;
  }

  const onFinish = (values) => mutate(values);

  return (
    <div className="w-full h-screen flex justify-center items-center transition-colors duration-300">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl transition-all border">
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl mb-2">Xush kelibsiz!</h1>
          <p className="text-sm">
            Tizimga kirish uchun ma'lumotlaringizni kiriting
          </p>
        </div>

        <Form
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          requiredMark={false}
          initialValues={{ email: "admin@example.com", password: "Admin123!" }}
        >
          <Form.Item
            label={<span className="text-[#042F2C]">Email</span>}
            name="email"
            rules={[
              { required: true, message: "Email kiriting!" },
              {
                min: 3,
                message: "Email kamida 3 ta belgidan iborat bo'lishi kerak!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Email kiriting"
              prefix={<UserOutlined className="text-gray-400 mr-1" />}
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-[#042F2C]">Parol</span>}
            name="password"
            rules={[
              { required: true, message: "Parolni kiriting!" },
              {
                min: 6,
                message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak!",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Parolni kiriting"
              prefix={<LockOutlined className="text-gray-400 mr-1" />}
              className="h-11! rounded-xl! font-semibold! bg-gray-50! border-[#E5E7EB]! text-black!"
            />
          </Form.Item>

          <Form.Item className="mb-0">
            <Button
              type="primary"
              htmlType="submit"
              loading={isPending}
              disabled={isPending}
              className="w-full h-11! rounded-xl! bg-[#52A77A]! hover:bg-[#428a63]! border-none! font-semibold! text-base! text-white! shadow-md shadow-[#52A77A]/20 transition-all active:scale-[0.98]"
            >
              {isPending ? "Kirilmoqda..." : "Kirish"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}