import React from "react";
import GetAllCounties from "./stor/action/getallcountries";
import { useDispatch } from "react-redux";

export default function SelectRegon() {
  const dispatch = useDispatch();
  function selectByRegon(e) {
    let region = e.target.value;
    console.log(e.target.value);
    dispatch(GetAllCounties(`region/${region}`));
  }
  return (
    <>
      <select onChange={selectByRegon} className="border-0 shadow-sm rounded p-2">
      <option disabled selected>filter by region</option>
        <option value="africa">Affrica</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
}
