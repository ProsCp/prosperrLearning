import React from "react";
import {
  MainWrapper,
  Image,
  TextContent,
  RoundSpan,
  Contact,
} from "./AdvisorProfileStyle";
import location from "../../../Assets/Images/image11.svg";
import badge from "../../../Assets/Images/gmedal.svg";
import photo from "../../../Assets/Images/AdvisorImage.png";

export const AdvisorProfile = () => {
  return (
    <MainWrapper>
      <Image src={photo} />
      <TextContent>
        <p
          style={{
            margin: "  4px 8px",
            padding: 0,
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "19px",
            /* identical to box height */

            color: "#212121",
          }}
        >
          Pranav Kumar Sharma
        </p>
        <p
          style={{
            margin: "  4px 0",
            padding: 0,
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "16px",
            /* identical to box height */

            color: "#7F7F7F",
          }}
        >
          Finance Management Advisor, LIC Advisor
        </p>
        <div
          style={{
            display: "flex",
            //    flexDirection:"column",
            alignItems: "center",
            //    justifyContent:"center",
            margin: "  4px 0",
            padding: 0,
          }}
        >
          {" "}
          <img src={location} alt="" />
          <span
            style={{
              // margin:"  4px 0",
              // padding: 0,
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "12px",
              lineHeight: "16px",
              /* identical to box height */

              color: "#7F7F7F",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;Bengaluru, Karnataka
          </span>
        </div>
        <div
          style={{
            display: "flex",
            //    flexDirection:"column",
            alignItems: "center",
            //    justifyContent:"center",
            margin: "  4px 0",
            padding: 0,
          }}
        >
        <img src={badge} alt="" />
        <span
          style={{
            margin: "  4px 0",
            padding: 0,
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "16px",
            /* identical to box height */

            color: "#0B6AB0",
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <span
            style={{
              margin: "  4px 0",
              padding: 0,
              fontWeight: "bold",
              fontSize: "14px",
              lineHeight: "19px",
            }}
          >
            3
          </span>
          <sup>rd</sup> Prosperr Rank
        </span>
        </div>
        <p
          style={{
            margin: "  12px 0",
            padding: 0,
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "150%",
            /* identical to box height */

            color: "#000000",
          }}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without.
        </p>
        <p
          style={{
            margin: "  4px 0",
            padding: 0,
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "19px",
            /* identical to box height */

            color: "#212121",
          }}
        >
          Expertise
        </p>
        <RoundSpan>Finance Management</RoundSpan>
        <RoundSpan>Management</RoundSpan> <RoundSpan>Finance </RoundSpan>
        <RoundSpan>SIP</RoundSpan>
      </TextContent>
      <Contact>Contact</Contact>
    </MainWrapper>
  );
};
