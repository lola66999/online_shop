import { Home, Heart, Search } from "lucide-react";

function Navbar() {
  return (
    <div>
      <h1 className="text-red-500 p-4">Navbar section</h1>
      <Home size={24} color="black" />
      <Heart size={24} className="text-red-500" />
      <Search size={20} />
    </div>
  );
}

export default Navbar;
