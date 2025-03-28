import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
        <div>&copy; {new Date().getFullYear()} MySite. All rights reserved.</div>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
