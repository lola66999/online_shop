import Saidbar from "./Saidbar";
import Header from "./Header";
import Main from "./Main";
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom'
export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white text-white p-4 border-r border-gray-300">
        <Saidbar />
      </aside>

      <div className="flex flex-col flex-1">
        <header className="bg-white flex items-center px-6 h-16">
          <Header />
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}
