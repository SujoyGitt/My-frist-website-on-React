import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { useState } from "react";
import Alert from "./components/Alart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  let [mode, setmode] = useState("light"); //Wheather dark mode eneble or not
  let [alert, setAlert] = useState(null);
  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = 'linear-gradient(60deg,grey 40%,black 40%)';
      document.body.style.color = "white";
      showAlert("Dark mode hasbeen eneble", "danger");
      document.title = "TextUtils  - Dark Mode";
      //  setInterval(() => {
      //   document.title = 'Intstall TextUtils app'
      //  }, 1500);
      //  setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      //  }, 2000);
    } else {
      setmode("light");
      document.body.style.background = 'linear-gradient(60deg,rgb(69, 208, 212) 40%,rgb(73, 199, 130) 40%)';
      document.body.style.color = "black";
      showAlert("light mode hasbeen eneble", "success");
      document.title = "TextUtils  - Light Mode";
    }
  };
  const togglemodeSuccess = () => {
    if (mode !== "success") {
      setmode("success");
      document.body.style.background = 'linear-gradient(60deg,lightgreen 40%,green 40%)';
      document.body.style.color = "white";
      showAlert("Green mode hasbeen eneble", "success");
      document.title = "TextUtils  - Success Mode";
    } else {
      setmode("light");
      document.body.style.background = 'linear-gradient(60deg,rgb(69, 208, 212) 40%,rgb(73, 199, 130) 40%)';
      document.body.style.color = "black";
      showAlert("light mode hasbeen eneble", "success");
      document.title = "TextUtils  - Light Mode";
    }
  };
  const togglemodeprimary = () => {
    if (mode !== "primary") {
      setmode("primary");
      document.body.style.background = 'linear-gradient(60deg,skyblue 40%,rgb(0, 140, 255) 40%)';
      document.body.style.color = "white";
      showAlert("primary mode hasbeen eneble", "primary");
      document.title = "TextUtils  - Primary Mode";
    } else {
      setmode("light");
      document.body.style.background = 'linear-gradient(60deg,rgb(69, 208, 212) 40%,rgb(73, 199, 130) 40%)';
      document.body.style.color = "black";
      showAlert("light mode hasbeen eneble", "success");
      document.title = "TextUtils  - light Mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtalize"
          mode={mode}
          togglemode={toggleMode}
          toggleModesucc={togglemodeSuccess}
          toggleModepri={togglemodeprimary}
        />
        <TextForm heading="Enter the text anlyze" mode={mode} showalert={showAlert}/>
        <Alert salert={alert} />
        <Routes>
        <Route path='/' element={ <TextForm heading="Enter the text anlyze" mode={mode} showalert={showAlert}/>}/>
          <Route path="about" element={<About amode={mode}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
