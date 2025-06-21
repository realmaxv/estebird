import logo from "@/assets/images/logo.png";
function Loader() {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-orange-700 ">
      <div className="rounded-full ring-orange-400 ring-30 bg-orange-50 animate-pulse">
        <img
          className="p-8"
          src={logo}
          alt="logo from 'estebird' - bird with spanish touch and an sombrero"
        />
      </div>
    </main>
  );
}

export default Loader;
