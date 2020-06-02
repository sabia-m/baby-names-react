 import React, {useState} from "react";
import babyData from './data/babyNamesData.json'
import NameFilter from "./NameSort.js";

function Search(){
  const [search, setSearch] = useState(babyData)

  function FilteredNames(value){
   return setSearch(babyData.filter((e) => e.name.toLowerCase().includes(value)))
  }

  return (
    <div className="search-names">
    <h1 className="heading">Baby Names</h1>
    <div className="search-bar">
      <input className="search" type="search" placeholder="Search Names Here"onChange={e => FilteredNames(e.target.value)}>
      </input>
      </div>
      
      <NameFilter nameInfo={search}/>
    </div>
  );
};

export default Search;
