function MovieModal({ show, onClose }) {
  if (!show) return null;

  const backdrop = show.image?.original || show.image?.medium || "https://via.placeholder.com/600x300?text=No+Image";
  const rating = show.rating?.average || "N/A";
  const year = show.premiered || "N/A";
  const genres = show.genres?.join(", ") || "N/A";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 text-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 w-9 h-9 rounded-full flex items-center justify-center"
        >
          ✕
        </button>

        <img
          src={backdrop}
          alt={show.name}
          className="w-full h-64 object-cover rounded-t-xl"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{show.name}</h2>
          <p className="text-gray-300 text-sm mb-4">
            ⭐ Rating: {rating} &nbsp;|&nbsp; 📅 Release: {year} &nbsp;|&nbsp; 🎭 Genre: {genres}
          </p>
          <h3 className="font-semibold mb-1">Overview:</h3>
          <div
            className="text-gray-300 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: show.summary || "No summary available." }}
          />

          <div className="flex justify-end mt-6">
            <button
              onClick={onClose}
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg transition"
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;