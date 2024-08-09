"use client";

import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "./ui/flip-words";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { FaDiscord, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaShoppingCart, FaRegStar } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const people = [
  {
    id: 1,
    name: "Sankalpa Dahal",
    designation: "Gamer",
    image:
      "/sankalpa.jpg",
  },
  {
    id: 2,
    name: "Anurag Subedi",
    designation: "Gamer",
    image:
      "/anurag.jpg",
  },
  {
    id: 3,
    name: "Yaman Mandal",
    designation: "Gamer",
    image:
      "/yaman.jpg",
  },
  {
    id: 4,
    name: "Smriti Waiba",
    designation: "Gamer",
    image:
      "/smriti.jpg",
  },
  {
    id: 5,
    name: "Dhruv Rathee",
    designation: "Gamer",
    image:
      "/dhruv.jpg",
  },
  {
    id: 6,
    name: "Marc Lour",
    designation: "Gamer",
    image:
      "/marc.jpg",
  },
];

export default function ShootingStarsAndStarsBackgroundDemo() {
  const words = ["CashApp", "Apple Pay", "Google Pay", "Venmo"];

  return (
    <section className="h-fit sm:h-[54rem] rounded-md bg-neutral-900 flex flex-col items-center pt-16 pb-14 sm:py-20 px-4 relative w-full">
      <div className="max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 text-white">
        <div>
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold">
            Get <span className="text-blue-400">Valorant Cheat</span> at <Cover>Cipherauth store</Cover>
          </h1>
          <p className="text-gray-400 py-6 font-semibold text-xl">
            To pay w/ CashApp, Apple Pay, Google Pay, or Venmo, open a ticket in our Discord server!
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 mt-10 text-3xl sm:text-4xl">
          <div className="flex flex-wrap items-center gap-2 cursor-pointer">
            <FaDiscord className="text-[#7289da]" />
            <h1>Discord</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2 cursor-pointer">
            <FaTiktok />
            <h1>Tiktok</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2 cursor-pointer">
            <FaYoutube className="text-[#FF0000]" />
            <h1>YouTube</h1>
          </div>
        </div>
        <div className="pt-14 pb-5 flex flex-wrap justify-center items-center text-2xl lg:text-4xl md:text-3xl sm:gap-2xl gap-14">
          <div className="flex flex-wrap flex-col justify-center items-center gap-6">
            <div className="flex flex-wrap justify-center items-center gap-2">
              <h1>1478</h1>
              <FaShoppingCart className="text-blue-400" />
            </div>
            <p>Product <span className="text-blue-400">Sold</span></p>
          </div>
          <div className="flex flex-wrap flex-col justify-center items-center gap-6">
            <div className="flex flex-wrap justify-center items-center gap-2">
              <h1>4.8</h1>
              <FaRegStar className="text-blue-400" />
            </div>
            <p>User<span className="text-blue-400"> Rating</span></p>
          </div>
        </div>
        <div className="py-10 w-full flex flex-wrap flex-col justify-center items-center text-center text-2xl gap-5">
          <div className="flex flex-row gap-4 flex-wrap items-center text-center justify-center">
            <AnimatedTooltip items={people} />
          </div>
          <div className="py-8">
            <p className="text-2xl">Based on verified website purchases</p>
            <div className="py-6">
              <button className='py-3 px-6 w-fit text-center bg-[#007BFF] text-[#ffffff] rounded-lg mt-2 transition-all hover:bg-blue-700'>
                200+ Positive Feedbacks
              </button>
            </div>
          </div>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </section>
  );
}
