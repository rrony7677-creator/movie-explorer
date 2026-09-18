function MovieCard({ show, onSeeDetails }) {
  const poster = show.image?.medium || "https://via.placeholder.com/210x295?text=No+Image";
  const rating = show.rating?.average || "N/A";
  const year = show.premiered ? show.premiered.split("-")[0] : "N/A";

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200 flex flex-col">
      <img
        src={poster}
        alt={show.name}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1">
          {show.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          ⭐ {rating} &nbsp;•&nbsp; 📅 {year}
        </p>
        <button
          onClick={() => onSeeDetails(show)}
          className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;