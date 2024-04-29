"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import MangaCard, { MangaProp } from "@/components/MangaCard";

export const getAnimeData = async (page: number) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=ranked`
  );
  const data = await res.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

export const getMangaData = async (limit: number) => {
  const res = await fetch(`https://api.mangadex.org/manga?limit=${limit}`);
  const { data } = await res.json();

  return data.map((item: MangaProp, index: number) => {
    return <MangaCard key={item.id} manga={item} index={index} />;
  });
};

export const getSingleAnimeData = async (id: number) => {
  const res2 = await fetch(`https://shikimori.one/api/animes/${id}`);
  const data2 = await res2.json();
  return data2;
};
export const getSingleMangaData = async (title: string) => {
  const res2 = await fetch(
    `https://api.mangadex.org/manga?title=${title}&limit=1`
  );
  const data2 = await res2.json();
  return data2.data[0];
};

export const getChapterSingleManga = async (id: number) => {
  const res = await fetch(`https://api.mangadex.org/manga/${id}/feed`);
  const data = await res.json();

  return data;
};

export const getSingleMangaCover = async (id: number) => {
  let filename = "";
  const res = await fetch(
    `https://api.mangadex.org/manga/${id}?includes[]=cover_art`
  ).then((res) => res.json());
  const data = await res.data.relationships.map((data: any) => {
    if (data.type == "cover_art") {
      filename = data.attributes.fileName;
    }
  });

  return filename;
};

export const getAnimeDataSlider = async () => {
  const res = await fetch(
    `https://shikimori.one/api/animes?limit=8&order=aired_on`
  );
  const data = await res.json();
  return data;
};
