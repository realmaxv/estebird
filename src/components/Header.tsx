import logo from "@/assets/images/logo.png";

type HeaderProps = {
  title?: string;
};

function Header({ title }: HeaderProps) {
  return (
    <header className="">
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
          {title || ""}
        </h2>
      </section>
    </header>
  );
}

export default Header;
