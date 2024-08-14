"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Cheats() {
  const [cheats, setCheats] = useState([]);
  const [filteredCheats, setFilteredCheats] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    axios.get("/cheats.json")
      .then((response) => {
        console.log("Data fetched:", response.data);
        setCheats(response.data);
        setFilteredCheats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cheats data:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedGenre === "all") {
      setFilteredCheats(cheats);
    } else {
      setFilteredCheats(cheats.filter(cheat => cheat.genre.includes(selectedGenre)));
    }
    console.log("Filtered Cheats:", filteredCheats);
  }, [selectedGenre, cheats]);

  const handleGenreChange = (genre) => {
    console.log("Selected Genre:", genre);
    setSelectedGenre(genre);
  };

  return (
    <section className="py-8 w-full">
      <div className="flex flex-wrap justify-center py-8 px-12 gap-4 sm:gap-6 items-center font-extralight">
        {["all", "valorant", "warzone", "spoofer", "rust", "rocket league", "fivem", "xdefiant"].map((genre) => (
          <button
            key={genre}
            className={`px-4 py-1 rounded-lg ${selectedGenre === genre ? "bg-[#007BFF] text-white" : "text-[#007BFF]"} border-2 border-[#007BFF] text-center transition-all hover:bg-[#007BFF] hover:text-white cursor-pointer`}
            onClick={() => handleGenreChange(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {filteredCheats.length > 0 ? (
          filteredCheats.map((cheat) => (
            <div key={cheat.id} className="flex flex-col flex-wrap py-6 px-4 items-center justify-center text-center break-all w-full antialiased shadow-custom rounded-lg">
              <div>
                <img src={cheat.image} alt={cheat.title} className="rounded-lg" />
              </div>
              <div className="py-4">
                <h1 className="font-semibold text-xl">{cheat.title}</h1>
              </div>
              <div className="flex flex-wrap justify-around items-center gap-5">
                <button className='py-2 px-6 rounded-lg text-[#007BFF] border-2 border-[#007BFF] text-center text-sm transition-all hover:bg-[#007BFF] hover:text-white'>Images</button>
                <button className='py-3 px-6 bg-[#007BFF] text-[#ffffff] hover:bg-blue-800 transition-all text-sm rounded-lg'>
                  <a href={cheat.buyLink} target="_blank" rel="noopener noreferrer">Buy Now</a>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-2xl text-gray-500">No cheats available for the selected genre.</p>
          </div>
        )}
      </div>
    </section>
  );
}
