import react from "react"
import Search from "./search"
import SelectRegon from "./selectregion"
export default function SearchAndFilter (){
    return(
        <>
        <div className=" container d-flex justify-content-between py-5">
            <Search/>
            <SelectRegon/>
        </div>
        </>
    )
}