import React from "react";
import { getSingleAnimeData } from "../action";
import Image from "next/image";

export interface SingleAnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

const SingleAnime = async ({ searchParams }: any) => {
  const data = await getSingleAnimeData(searchParams.id);
  console.log(data);
  return (
    <div className="w-full bg-[#FEFAF6] p-5 flex gap-5 text-white">
      {/* GAMBAR */}
      <div className="w-[30%]">
        <Image
          src={`https://shikimori.one${data.image.original}`}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full rounded-md"
        />
      </div>
      {/* DETAIL */}
      <div className="w-[70%]">
        <h1 className=" text-center px-2 py-1 text-3xl text-[#102C57] font-extrabold">
          {data.name}
        </h1>
        <div className="flex justify-between m-3">
          <div className="bg-[#102C57] px-2 py-1 rounded-md">
            Rating : {data.score}
          </div>
          <div className="bg-[#102C57] px-2 py-1 rounded-md">
            Status : {data.ongoing ? "On Going" : "Finished"}
          </div>
          <div className="bg-[#102C57] px-2 py-1 rounded-md">
            Realised At : {data.released_on}
          </div>
          <div className="bg-[#102C57] px-2 py-1 rounded-md">{data.rating}</div>
          <div className="bg-[#102C57] px-2 py-1 rounded-md">
            {data.episodes} Eps
          </div>
        </div>
        <h2 className="text-[#0F2C58] px-2 py-1 text-2xl font-extrabold">
          Genres
        </h2>
        <div className="w-full h-[2px] bg-[#DAC0A3]"></div>
        <div className="flex justify-start gap-3 m-3">
          {data.genres.map((datas: any) => (
            <div className="bg-[#102C57] px-2 py-1 rounded-md" key={datas.id}>
              {datas.name}
            </div>
          ))}
        </div>
        <h2 className="text-[#0F2C58] px-2 py-1 text-2xl font-extrabold">
          Desc
        </h2>
        <div className="w-full h-[2px] bg-[#DAC0A3]"></div>
        <p className="text-[#102C57]">{data.description}</p>
      </div>
    </div>
  );
};

export default SingleAnime;
