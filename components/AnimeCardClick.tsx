"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export interface AnimeProp {
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

interface Prop {
  anime: AnimeProp;
  index: number;
}

const AnimeCardClick = ({ anime }: Prop) => {
  const router = useRouter();
  return (
    <div
      className="relative w-full h-[37vh] cursor-pointer"
      onClick={() => {
        router.push(`/singleanime?id=${anime.id}`);
      }}
    >
      <Image
        src={`https://shikimori.one${anime.image.original}`}
        alt={anime.name}
        fill
        className="rounded-xl"
      />
    </div>
  );
};

export default AnimeCardClick;
