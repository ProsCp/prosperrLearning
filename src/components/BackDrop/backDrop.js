import { Button, Backdrop, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import GETallSPEC from "../GetAllspeciealization/GETallSPEC";
import { PopUp } from "../PopUp/PopUp";
// import {useNavigate} from "react-router-dom";


function Backdrop1() {
  const [open, setOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIs, setModalIs] = useState(false);
  // const navigate=useNavigate();
  
  const Pop = () => {
    setModalIsOpen(false);
    setOpen(false);
  };
  const ClickButton = () => {
    setOpen(true);
    setModalIsOpen(true);
  };
  const OnCLICK = () => {
    setOpen(false);
    setModalIsOpen(false);
  };
  return (
    <div style={{ position: "relative" ,border:"2px solid black",padding:"50vh 10vw"}} onClick={(e)=>{e.stopPropagation(); setModalIsOpen(false)}}>
      <Button onClick={(e)=>{e.stopPropagation(); setModalIsOpen(true)}} >Click me</Button>
      <Backdrop styele={{border:"2px solid black"}} open={open}>kkkk</Backdrop>
      <button onClick={(e)=>{ setModalIsOpen(false)}}> this is button</button>
      <PopUp trigger={modalIsOpen} modal={Pop} /> 
     
    </div>
  );
}
 
export default Backdrop1;
