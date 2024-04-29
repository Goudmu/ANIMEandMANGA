import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";
import { getAnimeData } from "./action";
import { Slideshow } from "@/components/Slideshow";

async function Home() {
  const data = await getAnimeData(1);
  return (
    <div>
      <Slideshow />
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-[#102C57] font-bold">Explore Anime</h2>

        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data}
        </section>
        <LoadMore />
      </main>
    </div>
  );
}

export default Home;
