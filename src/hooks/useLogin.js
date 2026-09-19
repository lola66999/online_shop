import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function useLogin() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (values) => api.post("/admin/auth/login", values), 
    onSuccess: (res) => {
      console.log("login javobi:", res.data); 
      const d = res.data?.data ?? res.data;
      const token = d?.accessToken ?? d?.access_token ?? d?.token;

      if (!token) {
        message.error("Token topilmadi, konsoldagi javobni tekshiring");
        return;
      }

      localStorage.setItem("accessToken", token);
      if (d?.refreshToken) localStorage.setItem("refreshToken", d.refreshToken);

      message.success("Xush kelibsiz!");
      navigate("/dashboard", { replace: true });
    },
    onError: (e) => {
      message.error(e?.response?.data?.message || "Email yoki parol xato");
    },
  });
}