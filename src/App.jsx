import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import Categories from "./pages/Categories";
import OrderManagment from "./pages/OrderManagment";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import ProtectedRoute from "./routes/ProtectedRoute";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoute/>}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="customers" element={<Customer/>}/>
          <Route path="ordermanagment" element={<OrderManagment />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
