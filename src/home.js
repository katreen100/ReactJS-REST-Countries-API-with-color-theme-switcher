import React from "react";
import SearchAndFilter from "./searchandfilter";
import Contries from "./allcountries";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function Home() {
  const mood = useSelector((state) => state.darkmood);
  console.log(mood);
useEffect(() => {
  if (mood==="light"||mood==null){
    document.body.style.background="hsl(0, 0%, 98%)"
    document.body.style.color="hsl(200, 15%, 8%)"
  }
  else{
    document.body.style.background="hsl(207, 26%, 17%)"
    document.body.style.color=" hsl(0, 0%, 100%)"
  }
}, [mood]);
  return (
    <>
      <div className="container">
        <SearchAndFilter />
        <Contries />
      </div>
    </>
  );
}
