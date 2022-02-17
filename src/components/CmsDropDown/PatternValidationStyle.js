import Styled from "styled-components";
import styledComponents from "styled-components";
export const Input=Styled.input`
    width: 100%;
    padding: 10px;
    outline: 0;
    border: 2px solid #B0BEC5;

&:invalid {
    border-color: red;
}

&input:valid {
    border-color: #ccc;
}`;