import { useState } from "react";
import SearchResult from "./Searchresult.jsx";
let Search = () => {
  let [img, setimg] = useState();
  let p = <p>please enter some word...</p>
  console.log(img)
  let inputEvent = (event) => {
    const data = event.target.value;
    setimg(data);
  };
  return (
    <>
      <div className="search">
        <input type="search" placeholder="Search Any type img 📹 ..." value={img} onChange={inputEvent}/>
        <br/>
        <br/>
        {img === undefined || img === '' ? p : <SearchResult name={img} />}
      </div>
    </>
  );
};
export default Search;
