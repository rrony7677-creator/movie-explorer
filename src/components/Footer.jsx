function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
      <p className="font-semibold">🎬 MovieExplorer</p>
      <p className="text-sm">© 2026 MovieExplorer. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2 text-sm">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
          GitHub
        </a>
        <a href="#" className="hover:text-white">
          Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;