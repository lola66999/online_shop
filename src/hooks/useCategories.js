import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import api from "../services/api";

const KEY = ["categories"];

const errMsg = (e) => e?.response?.data?.message || "Xatolik yuz berdi";

export const useCategories = () =>
  useQuery({
    queryKey: KEY,
    queryFn: async () => {
      const { data } = await api.get("/admin/categories");
      return Array.isArray(data) ? data : data?.data ?? [];
    },
  });

export const useCreateCategories = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (values) => api.post("/admin/categories", values),
    onSuccess: () => {
      message.success("Kategoriya qo'shildi");
      qc.invalidateQueries({ queryKey: KEY });
    },
    onError: (e) => message.error(errMsg(e)),
  });
};

export const useUpdateCategories = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, values }) => api.patch(`/admin/categories/${id}`, values),
    onSuccess: () => {
      message.success("Kategoriya yangilandi");
      qc.invalidateQueries({ queryKey: KEY });
    },
    onError: (e) => message.error(errMsg(e)),
  });
};

export const useDeleteCategories = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => api.delete(`/admin/categories/${id}`), 
    onSuccess: () => {
      message.success("Kategoriya o'chirildi");
      qc.invalidateQueries({ queryKey: KEY });
    },
    onError: (e) => message.error(errMsg(e)),
  });
};
