import React from "react";
import GetAllCounties from "./stor/action/getallcountries";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Contries() {
  const countries = useSelector((state) => state.apicall);
  const mood=useSelector((stat)=>stat.darkmood)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCounties("all"));
    console.log(countries);
  }, []);
  // function removeCountry(index){
  //   console.log(index)
  //   console.log(countries[index])
  //   countries.splice(index,1)
  //   console.log(countries[index])
  //   console.log("fff")
  // }
  return (
      <div className="row">
        {countries.length === 0
          ? "countries "
          : countries.map((country, index) => {
              return (
                <div className="col-md-3 mb-5 country-card" key={index}>
                  <img
                    className="country-img"
                    src={country.flags.png}
                    height="145px"
                    alt={country.name.common}
                  />
                  <div className={mood=="light"||mood==null?" shadow-sm countrycard-body bg-white p-3":"shadow-sm countrycard-body p-3 darkmooddiv"}>
                    <h6 className="country-title">
                      <Link
                        className={mood=="light"||mood==null?"country-title pt-2":"country-title pt-2 titlecolorDarkmood"}
                        to={`/${country.name.common}`}
                      >
                        {country.name.common}
                      </Link>
                    </h6>
                    <strong className="title">Population: </strong>
                    <span className="property">{country.population}</span>
                    <br />
                    <strong className="title">Region: </strong>
                    <span className="property">{country.region}</span>
                    <br />
                    <strong className="title">Capital: </strong>
                    <span className="property">{country.capital}</span>
                   
                  </div>
                </div>
              );
            })}
      </div>
  );
}
