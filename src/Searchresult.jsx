import { NavLink } from "react-router-dom";

const SearchResult = (props) => {
  const img = `https://source.unsplash.com/450x350/?${props.name}`;
  const img1 = `https://source.unsplash.com/451x351/?${props.name}`;
  const img2 = `https://source.unsplash.com/452x352/?${props.name}`;
  const img3 = `https://source.unsplash.com/453x353/?${props.name}`;
  const img4 = `https://source.unsplash.com/450x351/?${props.name}`;
  const img5 = `https://source.unsplash.com/451x350/?${props.name}`;
  const img6 = `https://source.unsplash.com/452x350/?${props.name}`;
  const img7 = `https://source.unsplash.com/450x352/?${props.name}`;
  const img8 = `https://source.unsplash.com/451x352/?${props.name}`;
  const img9 = `https://source.unsplash.com/452x351/?${props.name}`;
  const img10 = `https://source.unsplash.com/449x351/?${props.name}`;
  const img11 = `https://source.unsplash.com/451x349/?${props.name}`;
  return (
    <>
      <div className="imgbox">
        
    
        <a href={img} target='blank'><img src={img} alt="Search" /></a>
        <a href={img1} target='blank'><img src={img1} alt="Search" /></a>
        <a href={img2} target='blank'><img src={img2} alt="Search" /></a>
        <a href={img3} target='blank'><img src={img3} alt="Search" /></a>
        <a href={img4} target='blank'><img src={img4} alt="Search" /></a>
        <a href={img5} target='blank'><img src={img5} alt="Search" /></a>
        <a href={img6} target='blank'><img src={img6} alt="Search" /></a>
        <a href={img7} target='blank'><img src={img7} alt="Search" /></a>
        <a href={img8} target='blank'><img src={img8} alt="Search" /></a>
        <a href={img9} target='blank'><img src={img9} alt="Search" /></a>
        <a href={img10} target='blank'><img src={img10} alt="Search" /></a>
        <a href={img11} target='blank'><img src={img11} alt="Search" /></a>
      </div>
    </>
  );
};
export default SearchResult;
