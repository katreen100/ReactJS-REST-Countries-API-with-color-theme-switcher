import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Backbutton() {
    const mood= useSelector(state => state.darkmood)
    let history=useNavigate();

    return (
        <div className="container py-5">
           <button className={mood==="light"||mood==null?"pe-4 shadow-lg btn":"pe-4 shadow-lg  darkbutton"} onClick={() => history(-1)}><i class="fas fa-long-arrow-alt-left px-3"></i>Back</button> 
        </div>
    )
}

export default Backbutton
