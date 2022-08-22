import react from "react";
import useLocalStorage from "use-local-storage";
import { useDispatch } from "react-redux";
import Darkmood from "./stor/action/darkmood";
import { useSelector } from "react-redux";
export default function Navbar() {
  const moodstat=useSelector((stat)=>stat.darkmood)
  let x =localStorage.getItem("mood")
  const [mood, setmood] = useLocalStorage("mood", x)
  const dispatch = useDispatch();
  function changeMood() {
    if(mood===null){
      setmood("dark");
      console.log(mood+"mood l mafrodd dark");
      dispatch(Darkmood("dark"));
      document.body.style.backgroundcolor="hsl(207, 26%, 17%)"
    }
    else if (mood === "light") {
      setmood("dark");
      console.log(mood+"mood l mafrodd dark")
      dispatch(Darkmood("dark"));
      document.body.style.backgroundcolor="hsl(207, 26%, 17%)"
    
    } else {
      setmood("light");
      console.log(mood+"mood l mafrodd light");
      dispatch(Darkmood("light"));
      document.body.style.backgroundcolor="#8080800a"
    }
  }
  return (
    <div className={moodstat==="light"||moodstat==null?" bg-white shadow-sm":"shadow-sm darkmoodNavbar "}>
      <div className="container d-flex justify-content-between py-3">
        <h4 className={moodstat==="light"||moodstat==null? "country-title":"countrTitleDarkmood"}>Where in the world?</h4>
        <div onClick={changeMood}>
          <i className="fas fa-moon px-2"></i>
          <span>Dark mood</span>
        </div>
      </div>
    </div>
  );
}
