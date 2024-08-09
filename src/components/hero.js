"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "./ui/flip-words";
import { FaDiscord, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaShoppingCart, FaRegStar } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function ShootingStarsAndStarsBackgroundDemo() {
  const words = ["CashApp", "Apple Pay", "Google Pay", "Venmo"];

  return (
    <section className="h-fit sm:h-[54rem] rounded-md bg-neutral-900 flex flex-col items-center pt-16 -pb-14 sm:py-20 px-4 relative w-full">
      <div className="max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 text-white">
        <div>
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold">
            Get <span className="text-blue-400">Valorant Cheat</span> at <Cover>Cipherware store</Cover>
          </h1>
          <div className="text-gray-400 py-6 font-semibold text-xl">
            To pay w/<FlipWords words={words} className="text-gray-400" />, Please do open a ticket in our Discord server!
          </div>
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
        <div className="py-10 w-fullflex flex-wrap flex-col justify-center items-center text-center text-2xl sm:gap-4xl gap-5">
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

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
