import LoadMoreManga from "@/components/LoadMoreManga";
import { getAnimeData, getMangaData } from "../action";

const Manga = async () => {
  const data = await getMangaData(4);

  return (
    <div>
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-[#102C57] font-bold">Explore Manga</h2>
        <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10">
          {data}
        </section>
        <LoadMoreManga />
      </main>
    </div>
  );
};
// const Manga = () => {
//   const [manga, setManga] = useState([]);
//   const getData = async () => {
//     const data = await fetch(`https://api.mangadex.org/manga?limit=5`).then(
//       (res) => res.json()
//     );
//     setManga(data.data);
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   if (manga.length == 0) {
//     return <div>Loading...</div>;
//   } else {
//     <div>
//       {manga.map((data: MangaProp, index: number) => {
//         // console.log(data);
//         return <MangaCard manga={data} index={index} key={data.id} />;
//       })}
//     </div>;
//   }
// };

export default Manga;
