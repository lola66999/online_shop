import { useMutation } from "@tanstack/react-query";
import api from "../../src/services/api.js";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const useLogin = () => {
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data) =>
      api.post("/admin/auth/login", data).then((res) => res.data),
    onSuccess: (data) => {
      localStorage.setItem("crmAccessToken", data?.data?.accessToken);
      localStorage.setItem("crmRefreshToken", data?.data?.refreshToken);
      message.success("Success");
      navigate("/dashboard");
    },
    onError: (error) => {
      message.error(`Error`);
    },
  });
  return { isPending, mutate };
};
export default useLogin
