import { getChapterSingleManga, getSingleMangaData } from "@/app/action";
import { MangaProp } from "@/components/MangaCard";
import MangaCover from "@/components/MangaPhoto";
import Image from "next/image";
import React from "react";

const SingleManga = async ({ searchParams }: any) => {
  const data: MangaProp = await getSingleMangaData(searchParams.title);
  const totalChapter = await getChapterSingleManga(searchParams.id);
  const sortChapter = totalChapter.data.sort(function (a: any, b: any) {
    return parseInt(a.attributes.chapter) - parseInt(b.attributes.chapter);
  });

  return (
    <div className=" bg-[#FEFAF6] p-5 flex flex-col md:flex-row gap-5 text-white">
      {/* GAMBAR */}
      <div className="md:w-[30%] bg-red-500">
        {/* <Image
          src={`https://shikimori.one${data.image.original}`}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="w-full rounded-md"
        /> */}
        <MangaCover mangaId={searchParams.id} />
      </div>
      {/* DETAIL */}
      <div className="w-full md:w-[70%]">
        <h1 className=" text-center px-2 py-1 text-3xl text-[#102C57] font-extrabold">
          {data.attributes.title.en}
        </h1>
        <div className="flex flex-wrap justify-between gap-3 m-3 text-xs md:text-md lg:text-base">
          <div className="bg-[#102C57] px-2 py-1 rounded-md">
            Status : {data.attributes.status}
          </div>
          <div className="bg-[#102C57] px-2 py-1 rounded-md">
            Realised At : {data.attributes.year}
          </div>
          <div className="bg-[#102C57] px-2 py-1 rounded-md">
            {sortChapter[sortChapter.length - 1].attributes.chapter} Chapter
          </div>
        </div>
        <h2 className="text-[#0F2C58] px-2 py-1 text-2xl font-extrabold">
          Genres
        </h2>
        <div className="w-full h-[2px] bg-[#DAC0A3]"></div>
        <div className="flex flex-wrap justify-start gap-3 m-3 text-xs md:text-md lg:text-base">
          {data.attributes.tags.map((datas: any) => {
            if (datas.attributes.group == "genre") {
              return (
                <div
                  className="bg-[#102C57] px-2 py-1 rounded-md"
                  key={datas.id}
                >
                  {datas.attributes.name.en}
                </div>
              );
            }
          })}
        </div>
        <h2 className="text-[#0F2C58] px-2 py-1 text-2xl font-extrabold">
          Desc
        </h2>
        <div className="w-full h-[2px] bg-[#DAC0A3]"></div>
        <p className="text-[#102C57]">{data.attributes.description.en}</p>
        {/* <h2 className="text-[#0F2C58] px-2 py-1 text-2xl font-extrabold">
          List Chapter
        </h2>
        <div className="w-full h-[2px] bg-[#DAC0A3] flex flex-col">
          {sortChapter.map((data: any, index: number) => {
            console.log(data.attributes.chapter);
            return (
              <span key={index} className=" text-black">
                Chapter {data.attributes.chapter}
              </span>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default SingleManga;
