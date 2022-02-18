import React, { useRef } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import aa from "../../Assets/Images/image77.png";
import "./SlickSlider.css";
import Button from "../../commonComponents/Button/Button";

export default function SliderBox() {
  const SliderRef = useRef(null);
  const SliderPrevFn = () => SliderRef.current.slickPrev();
  const SliderNextFn = () => SliderRef.current.slickNext();

  return (
    <>
      <div className=" topHeading">
        <h1> react slider</h1>
        <div className="Button">
          <Button prev="prevButton" func={SliderPrevFn}>
            <ArrowBackIos />
          </Button>
          <Button prev="nextButton" func={SliderNextFn}>
            <ArrowForwardIos />
          </Button>
        </div>
      </div>
      <div className="OuterBox">
        <div className="SliderDiv">
          <Slider
            ref={SliderRef}
            slidesToShow={4}
            centerMode={true}
            centerPadding={-6}
            // slidesToScroll={4}
          >
            {Array(10)
              .fill("")
              .map(() => (
                <div className="CC111">
                  <div className="AdvisorCard">
                    <img className="AdvisorIMG" src={aa} alt="" /> chandrapal
                    rao
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
