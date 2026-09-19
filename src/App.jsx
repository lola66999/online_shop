// import { Route, Routes } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Customer from "./pages/Customer";
// import Categories from "./pages/Categories";
// import OrderManagment from "./pages/OrderManagment";
// import Layout from "./components/Layout";
// import Brand from "./pages/Brand";

// function App() {
//   return (
//     <Routes>
//       <Route path="/login" element={<./pages/Login />} />
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Dashboard />} />
//         <Route path="dashboard" element={<Dashboard />} />
//         <Route path="categories" element={<Categories />} />
//         <Route path="customers" element={<Customer />} />
//         <Route path="ordermanagment" element={<OrderManagment />} />
//         <Route path="brand" element={<Brand />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import Categories from "./pages/Categories";
import OrderManagment from "./pages/OrderManagment";
import Brands from "./pages/Brand";
import Layout from "./components/Layout";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="brands" element={<Brands />} />
          <Route path="customers" element={<Customer />} />
          <Route path="ordermanagment" element={<OrderManagment />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
