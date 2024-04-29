"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SingleMangaChapter = () => {
  const [imageChapter, setImageChapter] = useState([]);
  const [hash, setHash] = useState("");
  const getData = async () => {
    const data = await fetch(
      `https://api.mangadex.org/at-home/server/27cd0902-ad4c-490a-b752-ae032f0503c9`
    ).then((res) => res.json());
    console.log(data.chapter.data);
    console.log(data.chapter.hash);
    setHash(data.chapter.hash);
    setImageChapter(data.chapter.data);
  };
  useEffect(() => {
    getData();
  }, []);

  if (imageChapter.length != 0) {
    return (
      <div>
        {imageChapter.map((data: string, index: number) => {
          return (
            <Image
              src={`https://uploads.mangadex.org/data/${hash}/${data}`}
              alt=""
              height={500}
              width={500}
              key={index}
            />
          );
        })}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default SingleMangaChapter;
