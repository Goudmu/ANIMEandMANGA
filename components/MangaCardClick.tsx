"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MangaProp } from "./MangaCard";

interface Prop {
  manga: MangaProp;
  index: number;
}

const MangaCardClick = ({ manga }: Prop) => {
  const [coverArt, setCoverArt] = useState("");
  const router = useRouter();

  const getData = async () => {
    const res = await fetch(
      `https://api.mangadex.org/manga/${manga.id}?includes[]=cover_art`
    ).then((res) => res.json());
    res.data.relationships.map((data: any) => {
      if (data.type == "cover_art") {
        setCoverArt(data.attributes.fileName);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  if (coverArt == "") {
    return <div>Loading ...</div>;
  } else {
    return (
      <div
        className="relative w-full h-[37vh] cursor-pointer"
        onClick={() => {
          router.push(
            `/manga/singlemanga?title=${manga.attributes.title.en}&id=${manga.id}`
          );
        }}
      >
        <Image
          src={`https://uploads.mangadex.org/covers/${manga.id}/${coverArt}`}
          alt={manga.attributes.title.en}
          fill
          className="rounded-xl"
        />
      </div>
    );
  }
};

export default MangaCardClick;
