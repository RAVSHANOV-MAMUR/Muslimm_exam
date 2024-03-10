import React, { useState } from "react";
import AxiosApi from "./AxiosApi";
import Axios from "./Axios";

function Hero() {
  const [search, setSearch] = useState('');

  const handleSearch = (newSearch) => {
    setSearch(newSearch);
  };

  return (
    <div className="flexxx" >
      <h1></h1>
      <Axios onSearch={handleSearch} />
      <AxiosApi search={search} />
    </div>
  );
}

export default Hero;
