import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";
import UserProvider from "./context/UserContext.jsx";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <UserProvider>
        <App />
      </UserProvider>
    </QueryClientProvider>
  </BrowserRouter>,
);
