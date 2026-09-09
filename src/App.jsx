import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import Categories from "./pages/Categories";
import OrderManagment from "./pages/OrderManagment";
import Layout from "./components/Layout";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="ordermanagment" element={<OrderManagment />} />
          <Route path="customer" element={<Customer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
