import SliderBox from "./components/SlickSlider/Slider";
import Dropdown from "./components/CmsDropDown/PatternValidation"
import Fetch from "./components/Api/Fetch";
import { PopUp } from "./components/PopUp/PopUp";
import React,{useState} from "react";
import Backdrop1 from "./components/BackDrop/backDrop";
import GETallSPEC from "./components/GetAllspeciealization/GETallSPEC";
import GetMobile from "./components/GetAllspeciealization/GetMobile";
import Pin, { Pincode } from "./components/GetAllspeciealization/PIN/index";
import Nitish from "./components/Nitish";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 
  return (
    // <BrowserRouter>
    // <Routes>
      // <SliderBox />
  //  <Dropdown/>
  // <GetMobile/>
  // <Pincode/>
  // <Nitish/>
    //  <Fetch/>
    <Backdrop1/>
  //  <button onClick={()=>{ setModalIsOpen(true)}}> this is button</button>
  //     <PopUp trigger={modalIsOpen} modal={Pop} /> 
  //       {/* <GETallSPEC/> */}
  //       {/* <Route path="/" element={ <Backdrop1/>}/>
  //       <Route path="/popup" element={ <PopUp navigate trigger={true} modal={true} />}/> */}
        
  //  {/* <GetMobile/> */}
  //  </Routes>
  //  </BrowserRouter>
  );
}

export default App;
