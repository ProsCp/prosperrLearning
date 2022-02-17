import Slider from "react-slick";
import React from "react";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import aa from "../../Assets/Images/image77.png";
import "./SlickSlider.css";

export default function SliderBox() {
  const SliderRef = useRef(null);

  return (
    <>
      <div className=" topHeading">
        <h1> react slider</h1>
        <div className="Button">
          <div
            className="prevButton"
            onClick={() => SliderRef.current.slickPrev()}
          >
            <ArrowBackIos />
          </div>
          <div
            className=" nextButton"
            onClick={() => SliderRef.current.slickNext()}
          >
            <ArrowForwardIos />
          </div>
        </div>
      </div>

      <div className="SliderDiv">
        <Slider ref={SliderRef} slidesToShow={4}>
          {Array(10)
            .fill("")
            .map(() => (
              <div>
                <div className="AdvisorCard">
                  <img className="AdvisorIMG" src={aa} alt="" /> chandrapal rao
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}
