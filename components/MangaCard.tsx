import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import MangaCardClick from "./MangaCardClick";

export interface MangaProp {
  id: string;
  attributes: {
    title: {
      en: string;
    };
    tags: [];
    status: string;
    year: number;
    description: {
      en: string;
    };
    createdAt: Date;
  };
  relationships: [
    {
      id: string;
      type: string;
    }
  ];
}

interface Prop {
  manga: MangaProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function MangaCard({ manga, index }: Prop) {
  return (
    <MotionDiv
      className="max-w-sm rounded relative w-full"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      <MangaCardClick manga={manga} index={0} />
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-[#0F2C58] text-xl line-clamp-1 w-full">
            {manga.attributes.title.en}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {manga.attributes.year}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <div className="flex flex-row gap-2 items-center bg-[#0F2C58] px-1 py-[1px] rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="18"
              height="18"
              x="0"
              y="0"
              viewBox="0 0 24 24"
              className=""
            >
              <g>
                <path
                  d="m22.555 13.662-1.9-6.836A9.321 9.321 0 0 0 2.576 7.3l-1.471 6.615A5 5 0 0 0 5.986 20H7.1a5 5 0 0 0 9.8 0h.838a5 5 0 0 0 4.818-6.338ZM12 22a3 3 0 0 1-2.816-2h5.632A3 3 0 0 1 12 22Zm8.126-5.185A2.977 2.977 0 0 1 17.737 18H5.986a3 3 0 0 1-2.928-3.651l1.47-6.616a7.321 7.321 0 0 1 14.2-.372l1.9 6.836a2.977 2.977 0 0 1-.502 2.618Z"
                  fill="#ffffff"
                  opacity="1"
                  data-original="#ffffff"
                  className=" object-contain"
                ></path>
              </g>
            </svg>
            <p className="text-base text-white font-bold">
              {manga.attributes.status.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center bg-[#0F2C58] px-1 py-[1px] rounded-md">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">
              {manga.attributes.year}
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default MangaCard;
