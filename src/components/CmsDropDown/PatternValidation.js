import { Facebook } from "@material-ui/icons";
import React, { useState } from "react";
import { Input } from "./PatternValidationStyle";
export default function Dropdown() {
  
  const [data, setData] = useState({
    Facebook: "",
    instagram: "",
    website: "",
  });

  function updateValue(e) {
    const newdata = { ...data };
    console.log(newdata[e.target.id])
    newdata[e.target.id]  = e.target.value;
    setData(newdata)
    console.log(newdata);
  }
  // useeff
//  const PostApiCall = () => {
//   const url=" https://jsonplaceholder.typicode.com/posts";
//   const fetch(url,{
//     method:'post',
//     header:{

//       'content-type'
//     }
//     body:JSON.stringify(data)})
   
//   }
  
  return (
    <div>
      <form action="">
        <label htmlFor="facebook">facebook :</label>
        <Input
          style={{ cursor: "not-allowed" }}
          autoComplete="off"
          type="text"
          pattern="https://www.facebook.com/.+[a-zA-z0-9._%+-/=? @]"
          value={data.Facebook}
          onChange={(e) => updateValue(e)}
          id="Facebook"

        />
        <label htmlFor="instagram">instagram :</label>
        <Input
          autoComplete="off"
          type="text"
          pattern="https://www.instagram.com/.+[a-zA-z0-9._%+-/=? @]"
          value={data.instagram}
          onChange={(e) => updateValue(e)}
          id="instagram"

        />
        <label htmlFor="website">website :</label>
        <Input
          autoComplete="off"
          type="text"
          pattern="https?://.+"
          value={data.website}
          onChange={(e) => updateValue(e)}
          id="website"

        />
        <label htmlFor="linkedin">linkedin :</label>
        <Input
          autoComplete="off"
          type="text"
          pattern="https://www.linkedin.com/in/.+[a-zA-z0-9._%+-/ @]"
          value={data.Facebook}
          onChange={(e) => updateValue(e)}
        />
        <label htmlFor="youtube">youtube :</label>
        <Input
          autoComplete="off"
          type="text"
          pattern="https://www.youtube.com/c/.+[a-zA-z0-9._%+-/ @]||https://www.youtube.com/channel/.+[a-zA-z0-9._%+-/ @]"
          value={data.Facebook}
          onChange={(e) => updateValue(e)  
          }
          id="Facebook"
        />
        <label htmlFor="twitter">twitter :</label>
        <Input
          autoComplete="off"
          type="text"
          pattern="https://twitter.com/.+[a-zA-z0-9._%+-/=? @]"
          value={data.Facebook}
          onChange={(e) => updateValue(e)}
          id="Facebook"

        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
