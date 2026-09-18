import React from "react";
import { Form, Input, Button, Checkbox, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import useLogin from "../hooks/useLogin";

const { Title, Text } = Typography;

const LoginPage = () => {
  const { mutate } = useLogin();
  const onFinish = (values) => {
    mutate(values);
    console.log("Form values:", values);
    // Bu yerga login logikasini yozing (API chaqiruv va h.k.)
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <Card
        style={{
          width: 400,
          borderRadius: 8,
          boxShadow: "0px 1px 3px 0px #00000033",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Title level={3}>Tizimga kirish</Title>
          <Text type="secondary">
            Hisobingizga kirish uchun ma'lumotlarni kiriting
          </Text>
        </div>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="Login"
            name="email"
            rules={[{ required: true, message: "Iltimos, login kiriting!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Login" size="large" />
          </Form.Item>

          <Form.Item
            label="Parol"
            name="password"
            rules={[{ required: true, message: "Iltimos, parol kiriting!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Parol"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Kirish
            </Button>
          </Form.Item>

          <div style={{ textAlign: "center" }}>
            <Text type="secondary">Hisobingiz yo'qmi? </Text>
            <a href="#">Ro'yxatdan o'tish</a>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
