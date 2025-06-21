import { Link } from "react-router";

type OptionCardProps = {
  title: string;
  linkTo: string;
};

function OptionCard({ title, linkTo }: OptionCardProps) {
  return (
    <article className="w-80 h-32 shadow-lg shadow-orange-400 hover:shadow-2xl  bg-white text-center ring-orange-300 ring-2 rounded-2xl text-black flex items-center justify-center p-2 hover:scale-105 transition transform duration-300 ease-in-out hover:bg-orange-500 hover:text-shadow-black/80 hover:text-white text-shadow-sm">
      <Link to={`${linkTo}`}>
        <h2 className="text-3xl font-bold ">{title}</h2>
      </Link>
    </article>
  );
}

export default OptionCard;
