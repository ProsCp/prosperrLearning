import Styled from "styled-components";

const MainBoxStyle = Styled.div`
    box-sizing: border-box;
    border: 2px solid grey;
    width: 269px;
    height: 448px;
    margin: 0;
    background-color:blue;

    padding: 0%;
    font-family: "Open Sans";
    body {
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    background-color:blue;

}

    img {
  width: 267px;
  height: 184px;
  border-radius: 4px 4px 0px 0px;
  margin: 0;
  padding: 0;
}
/* img:hover{
  width: 300px;
  height: 200px;
  border-radius: 6px ;
} */
.textBox {
  margin: 0px;
  padding: 20px;
  box-sizing: border-box;
  height: 262px;
  border-radius: 0px 0px 4px 4px;
  width: 267px;
  font-family: "Open Sans";

}
.rating {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 16px;
  margin: 0px;
}
.longPara {
  margin: 10px 0px 0px;
  padding: 0px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
    font-family: "Open Sans";
  color: rgb(127, 127, 127);
}
.contant {
  margin: 0;
  padding: 0;
}
h5,
h4 {
  margin: 0;
  padding: 0%;
}
.advType {
  padding: 0%;
  margin: 6px 0px 10px;
}
.icon {
  height: 16px;
}
.starIcon {
  margin: 0px 2px;
}
p {
  font-size: 14px;
  line-height: 16px;
  color: rgb(127, 127, 127);
}

hr {
  width: 100%;
  height: 0px;
  margin: 16px 0px;
  padding: 0px;
  color: rgb(245, 245, 245);
}

  `;
// export const TextBoxStyle = Styled.div` margin: 0px;
//   padding: 20px;
//   box-sizing: border-box;
//   height: 262px;
//   border-radius: 0px 0px 4px 4px;
//   width: 267px;
//   `;

// export const ImgStyle = Styled.img`width: 267px;
//   height: 184px;
//   border-radius: 4px 4px 0px 0px;
//   `;

export default MainBoxStyle;
