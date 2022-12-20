import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Search from "./Search";
import Services from "./Services";
import Error from "./Error";
import User from "./User";
import Header from "./Hearder";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        {/* <Route path="user/:fnamed/:lname" element={<User/>} /> */}
        {/* <Route path="user/:fnamed" element={<User/>} /> */}
        {/* <Route path="user" element={<User/>} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
