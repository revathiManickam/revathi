import React, { useState } from "react";
import Unsplash,{toJson} from "unsplash-js";
const unsplash = new Unsplash({
    accessKey: "Hl5oN25XcGe852HvnYf1D_MPcaytd2iVHTHCsbYQTRk",
  });
export default function SearchPhotos(unsplash)
{
const [query, setQuery] = useState("");
const [pics, setPics] = useState([]);
search.photos(keyword, page, per_page, filters)
const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
    .photos(query)
    .then(toJson)
    .then((json) => { setPics(json.results);
    });
    //console.log("Submitting the Form")
  };

  return (
    <>
<form className="form"onSubmit={searchPhotos}> 
        <label className="label" htmlFor="query"> 
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={"Search free high-resolution photos"}
          value={query}
    onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
      </div>
    </>
  );
}