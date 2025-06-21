import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const alreadyLoaded = localStorage.getItem("alreadyLoaded");

    if (!alreadyLoaded) {
      setLoader(true);
    }

    const timer = setTimeout(() => {
      setLoader(false);
      localStorage.setItem("alreadyLoaded", "true");
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (loader) {
    return <Loader />;
  }

  return <Outlet />;
};

export default RootLayout;
