import logo from "@/assets/images/logo.png";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";

function BirdOfTheDayPage() {
  return (
    <main>
      {" "}
      <section className=" absolute inset-0 -z-10 h-[16vh] bg-orange-700 rounded-b-3xl flex items-center justify-end ">
        <div className="rounded-full ring-orange-400 absolute top-[-30px] left-[-40px]  ring-14 bg-orange-50 h-40 w-40 ">
          <img
            className="p-8 w-40 h-40"
            src={logo}
            alt="logo from 'estebird' - bird with spanish touch and an sombrero"
          />
        </div>
        <h2 className="text-2xl font-bold text-white text-shadow-black/80 text-shadow-sm  pr-10">
          Bird of the Day
        </h2>
      </section>
      <footer className="h-10 w-full bg-orange-700 fixed bottom-0 rounded-t-2xl flex items-center justify-center">
        <Link
          className="bg-orange-400 rounded-full ring-1 ring-orange-600"
          to="/"
        >
          <ChevronLeft />
        </Link>
      </footer>
    </main>
  );
}

export default BirdOfTheDayPage;
