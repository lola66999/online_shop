import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import api from "../services/api";

const KEY = ["brands"];

const errMsg = (e) => e?.response?.data?.message || "Xatolik yuz berdi";

export const useBrands = () =>
  useQuery({
    queryKey: KEY,
    queryFn: async () => {
      const { data } = await api.get("/admin/brands");
     
      return Array.isArray(data) ? data : data?.data ?? [];
    },
  });

export const useCreateBrand = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (values) => api.post("/admin/brands", values),
    onSuccess: () => {
      message.success("Brend qo'shildi");
      qc.invalidateQueries({ queryKey: KEY });
    },
    onError: (e) => message.error(errMsg(e)),
  });
};

export const useUpdateBrand = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, values }) => api.patch(`/admin/brands/${id}`, values), 
    onSuccess: () => {
      message.success("Brend yangilandi");
      qc.invalidateQueries({ queryKey: KEY });
    },
    onError: (e) => message.error(errMsg(e)),
  });
};

export const useDeleteBrand = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => api.delete(`admin/brands/${id}`),
    onSuccess: () => {
      message.success("Brend o'chirildi");
      qc.invalidateQueries({ queryKey: KEY });
    },
    onError: (e) => message.error(errMsg(e)),
  });
};