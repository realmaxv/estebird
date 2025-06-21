import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="h-30 w-full bg-orange-700 fixed bottom-0 rounded-t-2xl flex items-center justify-start px-6">
      <Link
        className="bg-orange-400 rounded-full ring-1 ring-orange-600  hover:scale-105 transition transform duration-300 ease-in-out hover:bg-orange-500 hover:text-shadow-black/80 hover:text-white text-shadow-sm cursor-pointer"
        to="/"
      >
        <ChevronLeft size={40} />
      </Link>
    </footer>
  );
}

export default Footer;
