import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

type Bird = {
  family: string;
  id: number;
  images: string[];
  name: string;
  region: string[];
  wingspanMax: string;
  wingspanMin: string;
};

function BirdOfTheDayPage() {
  const [birds, setBirds] = useState<Bird[]>();
  const [randomIndex, setRandomIndex] = useState(0);
  useEffect(() => {
    fetch(
      "https://nuthatch.lastelm.software/v2/birds?family=Troglodytidae&hasImg=true",
      {
        headers: {
          "api-key": `${import.meta.env.VITE_BIRD_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const random = Math.floor(Math.random() * data.entities.length);
        setRandomIndex(random);

        setBirds(data.entities);
      });
  }, []);
  if (birds) {
    console.log(birds);

    return (
      <main className="flex items-center justify-center  h-screen">
        <Header title="Bird of the Day" />
        <article className="  flex flex-col items-center   gap-2">
          <div className="flex items-center justify-center flex-col ">
            <img
              className="max-w-2xl max-h-96"
              src={birds[randomIndex].images[0]}
              alt={`image from bird of the day: ${birds[randomIndex].name}`}
            />
            <h2 className="text-2xl font-black">{birds[randomIndex].name}</h2>
          </div>
          <p>{birds[randomIndex].family}</p>
          <p>{birds[randomIndex].region[0]}</p>
        </article>
        <Footer />
      </main>
    );
  }
}

export default BirdOfTheDayPage;
