import styled from "styled-components";
// import styledComponents from "styled-components";

export const MainWrapper = styled.div`
  
  width: 328px;
  height: 544px;
 
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  font-family: "Open Sans";
  margin: 0;
  padding: 0;
`;
export const Image = styled.img`
  width: 328px;
  border-radius: 4px;
  height: 25vh;
  margin: 0;
  padding: 0;
`;
export const TextContent = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 35vh;
  flex-grow: 1;
  /* background-color: black; */
  margin: 0 16px;
`;
export const RoundSpan = styled.button`
  margin: 0;
  padding: 0;
  background: #f5f5f5;
  border-radius: 115px;
  height: 32px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16.38px;
  padding: 8px 12px;
  margin: 4px;
  border: none;
  color: #7f7f7f;
`;
export const Contact = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  
  width: 328px;
  height: 37px;
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  justify-content: center;
  /* identical to box height, or 17px */

  text-transform: uppercase;

  color: #ffffff;

  background: #85bb65;
  border-radius: 0px 0px 4px 4px;
`;
