import React from "react";
import Layout from "../components/Layout";
import useMe from "../hooks/useMe";
import Spinner from "../components/Spinner";

export default function ProtectedRoute() {
  const { data, isloading } = useMe();
  return (
  <>
  {isloading ? <Spinner /> : <Layout />}
  
  </>);
}
