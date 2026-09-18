import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function MovieListing() {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState(null);

  // Load all shows initially
  useEffect(() => {
    fetchAllShows();
  }, []);

  const fetchAllShows = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.tvmaze.com/shows");
      const data = await res.json();
      setShows(data.slice(0, 40)); // limit for performance
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const searchShows = async (q) => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${q}`);
      const data = await res.json();
      setShows(data.map((item) => item.show));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      fetchAllShows();
    } else {
      searchShows(value);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Navbar />

      <div className="px-6 py-8 max-w-6xl mx-auto w-full">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-800 rounded-lg px-4 py-3 mb-8">
          <span className="mr-2">🔍</span>
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search for a movie..."
            className="bg-transparent outline-none text-white w-full placeholder-gray-400"
          />
        </div>

        {/* Loading */}
        {loading && <p className="text-white text-center">Loading...</p>}

        {/* Empty state */}
        {!loading && shows.length === 0 && (
          <p className="text-gray-400 text-center">No movies found.</p>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shows.map((show) => (
            <MovieCard key={show.id} show={show} onSeeDetails={setSelectedShow} />
          ))}
        </div>
      </div>

      <Footer />

      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  );
}

export default MovieListing;