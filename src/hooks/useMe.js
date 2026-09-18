import { useQuery } from "@tanstack/react-query";
import api from "../services/api.js";
const useMe = () => {
  const { data, isloading } = useQuery({
    queryKey: ["me"],
    queryFn: () => api.get("/admin/auth/me").then((res) => res?.data),
  });
  return { data, isloading };
};
export default useMe;
