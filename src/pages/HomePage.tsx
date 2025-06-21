import logo from "@/assets/images/logo.png";
import OptionCard from "@/components/OptionCard";

function HomePage() {
  return (
    <main className="h-screen w-full relative ">
      <section className=" absolute inset-0 -z-10 h-[40vh] bg-orange-700 rounded-b-3xl shadow-sm shadow-orange-500 ">
        <div className="rounded-full ring-orange-400 absolute top-[-30px] left-[-40px]  ring-30 bg-orange-50 h-60 w-60 ">
          <img
            className="p-8 w-60 h-60"
            src={logo}
            alt="logo from 'estebird' - bird with spanish touch and an sombrero"
          />
        </div>
      </section>
      <section className="relative z-10 flex flex-col gap-4  items-center justify-end pb-20  h-screen w-full">
        <OptionCard title="Bird of the Day" linkTo="/birdoftheday" />
        <OptionCard title="Bird Quiz" linkTo="/" />
        <OptionCard title="Who the FUC* is Estebird?!" linkTo="/" />
      </section>
    </main>
  );
}

export default HomePage;
