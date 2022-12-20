import { NavLink } from "react-router-dom";
import StorageIcon from "@material-ui/icons/Storage";
import logoimg from './png/my logo.png'
let Header = () => {
  let to = () => {
    document.querySelector("header nav ul").classList.toggle("active");
  };
  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-11 mx-auto">
            <header>
              <h2 className="logo">
                <a href="/"><img src={logoimg} className="img-fluid"/></a>
              </h2>
              <nav>
                <div className="toggle" onClick={to}>
                  <StorageIcon />
                </div>
                <ul>
                  <NavLink to="search">Search</NavLink>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="services">Services</NavLink>
                  <NavLink to="about">About</NavLink>
                  <NavLink to="contact">Contact</NavLink>
                  {/* <NavLink to="user">User</NavLink> */}
                </ul>
              </nav>
            </header>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
