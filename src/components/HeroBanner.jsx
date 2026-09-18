import { useNavigate } from "react-router-dom";

function HeroBanner() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white text-center py-24 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        DISCOVER MOVIES
      </h1>
      <p className="text-gray-300 max-w-xl mx-auto mb-8 text-sm md:text-base">
        Explore and discover your favorite movies and TV shows from around the world.
      </p>
      <button
        onClick={() => navigate("/movies")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
      >
        Explore Now
      </button>
    </div>
  );
}

export default HeroBanner;