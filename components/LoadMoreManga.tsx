"use client";
import { getMangaData } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import MangaCard from "./MangaCard";

let limit = 5;

export type MangaCard = JSX.Element;

function LoadMoreManga() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<MangaCard[]>([]);

  useEffect(() => {
    if (inView) {
      getMangaData(limit).then((res) => {
        setData([...data, ...res]);
        limit += 5;
      });
    }
  }, [inView, data]);
  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMoreManga;
