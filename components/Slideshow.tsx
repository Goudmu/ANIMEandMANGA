"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import localfont from "next/font/local";

export const vale = localfont({
  src: "../public/font/edo.ttf",
});
const romanceTTF = localfont({
  src: "../public/font/pacifico.ttf",
});
const adventureTTF = localfont({
  src: "../public/font/millo.ttf",
});

const variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  animate: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const variantsH1 = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 4000 : -4000,
      opacity: 0,
    };
  },
  animate: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 4000 : -4000,
      opacity: 0,
    };
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
const contents = [
  {
    title: "NARUTO",
    row2: "2003 | PG 13+ | 800 Eps",
    genre: ["Adventures", "Action", "Shounen", "Fantasy"],
    image: "./narutowp.jpg",
    font: vale.style,
    color: "white",
  },
  {
    title: "KAGUYA : LOVE IS WAR",
    row2: "2020 | R 17+ | 24 Eps",
    genre: ["Romance", "School", "Psychological", "Drama"],
    image: "./kaguyawp.png",
    font: romanceTTF.style,
    color: "white",
  },
  {
    title: "ONE PIECE",
    row2: "1999 | PG 13+ | ? Eps",
    genre: ["Adventures", "Action", "Shounen"],
    image: "./onepiecewp.jpg",
    font: adventureTTF.style,
    color: "black",
  },
];

export const Slideshow = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setdirection] = useState(0);

  const paginate = (newDirection: number) => {
    setdirection(newDirection);
    if (imageIndex == 0) {
      if (newDirection == -1) {
        setImageIndex(contents.length - 1);
      } else {
        setImageIndex(imageIndex + newDirection);
      }
    } else if (imageIndex == contents.length - 1) {
      if (newDirection == -1) {
        setImageIndex(imageIndex + newDirection);
      } else {
        setImageIndex(0);
      }
    } else {
      setImageIndex(imageIndex + newDirection);
    }
  };

  if (contents.length != 0) {
    return (
      <div className=" h-[80vh] relative flex m-auto box-border">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={imageIndex}
            src={`${contents[imageIndex].image}`}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 1 },
              delay: 1,
            }}
            className=" rounded-lg aspect-video absolute top-0 left-0 w-full h-full object-cover object-center"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        <div className=" w-1/2 h-full relative">
          <motion.h1
            key={imageIndex}
            custom={direction}
            variants={variantsH1}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute top-20 left-20 text-white font-extrabold text-6xl bg-[#0F2C58] px-3 py-2 rounded-md "
            style={contents[imageIndex].font}
          >
            {contents[imageIndex].title}
          </motion.h1>
        </div>

        <motion.div
          key={imageIndex + 30000}
          custom={direction}
          variants={variantsH1}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute bottom-48 left-20 text-white font-bold text-xl py-[1px] rounded-md"
        >
          <h2 className="text-white w-fit font-bold text-xl bg-[#0F2C58] px-1 py-[1px] rounded-md my-5">
            {contents[imageIndex].row2}
          </h2>
          <div className="flex flex-wrap justify-start gap-3 text-xs md:text-md lg:text-base">
            {contents[imageIndex].genre.map((datas: any, index) => (
              <div className="bg-[#102C57] px-2 py-1 rounded-md" key={index}>
                {datas}
              </div>
            ))}
          </div>
        </motion.div>
        <div
          className="
         top-[calc(50%-30px)]
          absolute bg-[#0F2C58] text-white rounded-md w-10 h-10 flex items-center justify-center cursor-pointer font-bold text-2xl z-10
         right-3 "
          onClick={() => paginate(1)}
        >
          {"‣"}
        </div>
        <div
          className="top-[calc(50%-30px)]
          absolute bg-[#0F2C58] text-white rounded-md w-10 h-10 flex items-center justify-center cursor-pointer font-bold text-2xl z-10
          left-3 -scale-x-100
          "
          onClick={() => paginate(-1)}
        >
          {"‣"}
        </div>
      </div>
    );
  }
};
{
  /* <motion.img
          key={imageIndex + 10000}
          src={`${images3[imageIndex]}`}
          custom={direction}
          variants={variantsImg2}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            duration: 0.5,
            delay: 0.5,
          }}
          className=" rounded-lg aspect-video absolute h-[calc(100vh*50%)]"
        /> */
}
{
  /* <motion.h2
          key={imageIndex + 20000}
          custom={direction}
          variants={variantsH1}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute top-5 left-20 text-white font-bold text-xl bg-[#0F2C58] px-1 py-[1px] rounded-md"
        >
          {contents[imageIndex].row2}
        </motion.h2> */
}
