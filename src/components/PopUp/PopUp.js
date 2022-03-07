import React, { useState,useEffect } from "react";
import Modal from "react-modal/lib/components/Modal";
import { InnerPop,Button, Icon } from "../PopUp/PopUp.styles";
import { ImCross } from 'react-icons/im';
// import {useNavigate} from "react-router-dom"
Modal.setAppElement("#root");

export const PopUp = (props) => {
  // useEffect(() => {
  //   console.log("ho gya bhai");
    
  
  
  // }, [])
  
  return props.trigger ? (
    <div className=""  style={{ border:"2px solid black"}}
    >
         <Icon> <ImCross/></Icon> 
   
      <InnerPop>
        <h3>your form is submitted</h3>
       
      </InnerPop>
    </div>
  ) : (
    ""
  );
};
