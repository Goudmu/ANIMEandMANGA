import { getSingleMangaCover } from "@/app/action";
import Image from "next/image";

interface Prop {
  mangaId: number;
}

const MangaCover = async ({ mangaId }: Prop) => {
  const fileName = await getSingleMangaCover(mangaId);

  if (fileName == "") {
    return <div>Loading ...</div>;
  } else {
    return (
      <div>
        <Image
          src={`https://uploads.mangadex.org/covers/${mangaId}/${fileName}`}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="w-full rounded-md"
        />
      </div>
    );
  }
};

export default MangaCover;
