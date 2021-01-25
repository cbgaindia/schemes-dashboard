import React from "react";
import {ReactComponent as SearchIcon} from "../../Images/search-icon.svg"

import "./index.css";

const SearchBar = (props) => {
    return(
        <div className="indicator-search-container mb-2">
            <input className="indicator-search-input"  placeholder="Search Indicators" onChange={props.handleChangeSearchTerm}/>
            <SearchIcon fill={"#0D1018"} fillOpacity={0.4}className="search-icon"/>
        </div>
    )
}

export default SearchBar;   