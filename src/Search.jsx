import { useState } from "react";
import SearchResult from "./Searchresult.jsx";
import SearchIcon from '@material-ui/icons/Search';
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
        <div className="search_area"><label><SearchIcon/></label><input type="search" placeholder="Search Any type img 📹 ..." value={img} onChange={inputEvent}/>
        <br/>
        <br/>
        </div>
        {img === undefined || img === '' ? p : <SearchResult name={img} />}
      </div>
    </>
  );
};
export default Search;
