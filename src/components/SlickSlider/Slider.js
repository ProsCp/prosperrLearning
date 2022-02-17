import Slider from "react-slick";
import React from "react";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import aa from "../../Assets/Images/image77.png";
import './SlickSlider.css';

export default function SliderBox() {
  const SliderRef = useRef(null);
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 5000,
    centerMode: true,
    centerPadding: '20px',
    // slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 10px",
        }}
      >
        <h1> react slider</h1>
        <div className="" style={{ display: "flex" }}>
          <div
            className=""
            style={{
              width: 40,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              borderRadius: 7,
              cursor: "pointer",
            }}
            onClick={() => SliderRef.current.slickPrev()}
          >
            <ArrowBackIos />
          </div>
          <div
            className=""
            style={{
              width: 40,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              borderRadius: 7,
              cursor: "pointer",
            }}
            onClick={() => SliderRef.current.slickNext()}
          >
            <ArrowForwardIos />
          </div>
        </div>
      </div>
      {/* <
        className=""
        style={{
          // margin: "0 62px 64px" ,
          padding: "0 72px",
          border: "1px solid black",
          // width: "1000px",
          // display: "flex",
          // justifyContent:"center",
          height: "385px",
          boxSizing: "border-box",
        }}
      > */}
      <div style={{margin:"0 72px", border:"1px solid red"}}>
         <Slider
          // dots
          // dotsClass="slick-dots line-indicator"
          ref={SliderRef}
          slidesToShow={4}
          // slidesToScroll={4}
        //   customPaging={(i) => (
        //     <div
        //       style={{
        //         position: "absolute",
        //         width: "100%",
        //         top: "-10px",
        //         opacity: 0,
        //       }}
        //     >
        //       {i}
        //     </div>
        //   )}
         >
          {Array(10)
            .fill("")
            .map(() => (
              <div style={{  }}>
                 <div style={{ width: 268, height:320, margin:"0 20 0 0 ", border:"1px solid red",borderRadius: 10 }}>
                   <img className="AdvisorIMG"
                  style={{ width: 268, height:182,borderRadius: 10  }}
src={aa}                  alt=""
                />  chandrapal rao</div>
              </div>
            ))}
        </Slider></div>
      
    </>
  );
}
