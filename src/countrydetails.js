import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Backbutton from "./backbutton";
import GetCountrydetails from "./stor/action/getcountryDetails";
export default function CountryDetails() {
  const countryDetails = useSelector((state) => state.countrydetails);
  const mood = useSelector((state) => state.darkmood);
  console.log(mood);
  let { countryName } = useParams();
  console.log(countryName);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCountrydetails(`name/${countryName}`));
    console.log(countryDetails[0].flags.png);
  }, []);
  //darkmood
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
      <Backbutton />
      <div className="row container  my-5">
        <div className="col-lg-6 ">
          <img className="card-img" src={countryDetails[0].flags.png} />
        </div>
        <div className="col-lg-6 row px-5 p-5">
          <h4 className="col-12">{countryDetails[0].name.common}</h4>
          <div className="col-md-6 ">
            {/* <strong className="title">Native Name: </strong>
            <span className="property">
              {countryDetails[0].name.nativeName.eng.off}
            </span>
            <br /> */}
            <strong className="title">Population: </strong>
            <span className="property">{countryDetails[0].population}</span>
            <br />
            <strong className="title">Region: </strong>
            <span className="property">{countryDetails[0].region}</span>
            <br />
            <strong className="title"> Sub Region: </strong>
            <span className="property">{countryDetails[0].subregion}</span>
            <br />
            <strong className="title">Capital: </strong>
            <span className="property">{countryDetails[0].capital}</span>
          </div>
          <div className="col-6">
            {/* <strong className="title">Top Level Domain </strong>
            <span className="property">{country.population}</span>
            <br /> */}
            <strong className="title">Currencies: </strong>
            {/* <span className="property">{countryDetails[0].currencies}</span> */}
            <br />
            {/* <strong className="title">Languages: </strong>
            <span className="property">{country.region}</span>
            <br /> */}
          </div>
          <div className="col-12"></div>
        </div>
      </div>
    </>
  );
}
