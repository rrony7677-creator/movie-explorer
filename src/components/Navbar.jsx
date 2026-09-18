import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      <Link to="/" className="text-2xl font-bold">
        🎬 MovieExplorer
      </Link>
      <Link
        to="/movies"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
      >
        Movies
      </Link>
    </nav>
  );
}

export default Navbar;