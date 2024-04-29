"use client";
import { vale } from "@/components/Slideshow";
import Image from "next/image";
import React, { useState } from "react";

type State = {
  name: boolean;
  email: boolean;
  desc: boolean;
};

const Contact = () => {
  const [clicked, isClicked] = useState<State>({
    name: false,
    email: false,
    desc: false,
  });

  const handleToggle = (property: keyof State) => {
    isClicked({
      name: property == "name" ? true : false,
      email: property == "email" ? true : false,
      desc: property == "desc" ? true : false,
    });
  };

  return (
    <div className=" w-full h-[80vh] relative">
      <Image src="/contactme2.jpg" alt="" layout="fill" />
      <div className="flex flex-col w-full h-full gap-1">
        <h1
          className=" z-10 text-white text-center text-7xl"
          style={vale.style}
        >
          CONTACT US
        </h1>
        <div className=" flex w-full h-full gap-5 bg-[#102C57] bg-opacity-40 z-10">
          <div className=" flex-1 w-full h-full z-10 flex flex-col justify-center gap-10">
            <span
              className=" text-[#FBA834] text-5xl text-center"
              style={vale.style}
            >
              Keep Exploring
            </span>
            <span
              className=" text-white text-5xl text-center"
              style={vale.style}
            >
              The fascinating worlds of
            </span>
            <span
              className=" text-[#FBA834] text-5xl text-center"
              style={vale.style}
            >
              Anime and manga!
            </span>
          </div>
          <div className=" flex-1 w-full h-full z-10 mt-10">
            <div className=" w-full flex flex-col px-2 py-1">
              <span className=" text-white text-xs font-bold">Full Name</span>
              <input
                placeholder="Input Your Full Name"
                className={` px-2 py-1 rounded-xl ${
                  clicked.name ? "opacity-100" : "opacity-30"
                }`}
                name="name"
                id="name"
                onClick={() => handleToggle("name")}
              />
            </div>
            <div className=" w-full flex flex-col px-2 py-1">
              <span className=" text-white text-xs font-bold">Email</span>
              <input
                placeholder="Input Your Email"
                className={` px-2 py-1 rounded-xl ${
                  clicked.email ? "opacity-100" : "opacity-30"
                }`}
                name="email"
                id="email"
                onClick={() => handleToggle("email")}
              />
            </div>
            <div className=" w-full flex flex-col px-2 py-1">
              <span className=" text-white text-xs font-bold">Description</span>
              <textarea
                rows={10}
                cols={30}
                placeholder="Input Your Problem"
                className={`px-2 py-1 rounded-xl ${
                  clicked.desc ? "opacity-100" : "opacity-30"
                }`}
                name="desc"
                id="desc"
                onClick={() => handleToggle("desc")}
              />
            </div>
            <div className=" flex items-center justify-center mt-4">
              <button className=" bg-white px-8 py-1 rounded-md">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
