import React, { useState } from "react";
import aa from "../../Assets/Images/aa.png";
import { FaStar } from "react-icons/fa";
// import {MainBoxStyle,  TextBoxStyle} from "./ArticleBox.styled";
import MainBoxStyle from "./ArticleBox.styled";
const TopArticleBox = () => {
  const [rate, setRate] = useState(1);
  //  const [color, setColor] = useState("#84a984");
  
  const changeRate = (key) => {
    console.log(key);
    setRate(key);
  };
  // css

  return (
    <MainBoxStyle>
      <img className="img1" src={aa} alt="" />
      <div className="textBox">
        <h4>Chandrapal Rao</h4>
        <p className="advType">Prosperr Financial Advisor</p>
        <div className="rating">
          <span className="points">{rate}.0 </span>
          <div className="icon" style={{ padding: "10px" }}>
            <FaStar
              onClick={() => {
                var key = 1;
                changeRate(key);
              }}
              className="starIcon"
              size="15px"
              color={rate === 1 || rate > 1 ? "#84a984" : "#e0dfdf"}
            />
            <FaStar
              onClick={() => {
                var key = 2;
                changeRate(key);
              }}
              className="starIcon"
              size="15px"
              color={rate > 1 ? "#84a984" : "#e0dfdf"}
            />
            <FaStar
              onClick={() => {
                var key = 3;
                changeRate(key);
              }}
              className="starIcon"
              size="15px"
              color={rate > 2 ? "#84a984" : "#e0dfdf"}
            />
            <FaStar
              onClick={() => {
                var key = 4;
                changeRate(key);
              }}
              className="starIcon"
              size="15px"
              color={rate > 3 ? "#84a984" : "#e0dfdf"}
            />
            <FaStar
              onClick={() => {
                var key = 5;
                changeRate(key);
              }}
              className="starIcon"
              size="15px"
              color={rate > 4 ? "#84a984" : "#e0dfdf"}
            />
          </div>
        </div>
        <hr />
        <div className="contant">
          <h5>Equity Mutual Funds - Direct Investments in Stocks</h5>
          <p className="longPara">
            Mutual fund that essentially invests in shares of listed companies
            of the exchange market. Investing its major part of the assets in
            the shares. Has a tendency to give excellent returns.
          </p>
        </div>
      </div>
    </MainBoxStyle>
  );
};

export default TopArticleBox;
