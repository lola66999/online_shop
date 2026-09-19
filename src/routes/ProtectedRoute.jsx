import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useMe from "../hooks/useMe";
import Spinner from "../components/Spinner";
import { useUser } from "../context/UserContext";

export default function ProtectedRoute() {
  const token = localStorage.getItem("accessToken");
  const { data, isLoading, isError } = useMe();
  const { setUser } = useUser();

  useEffect(() => {
    if (data) setUser(data);
  }, [data]);

  if (!token) return <Navigate to="/login" replace />;
  if (isLoading) return <Spinner />;
  if (isError) return <Navigate to="/login" replace />;

  return <Outlet />;
}
