import React, { useEffect, useState } from "react";
import { Input } from "./Fetch.styles";

export default function Fetch() {
  const [first, SetFirst] = useState({
    loading: false,
    data: [],
  });
  const [text, settext] = useState("Sincere@april.biz");
  const [key, setKey] = useState("notset");

  const TextChangeHandle = (e) => {
    settext(e.target.value);
    console.log(key);
    setKey("notset");
  };

  const SubmitButton = () => {
    if (first.loading) {
      console.log(Future[0].id);
      console.log(key);
      setKey("set");
    } else {
      console.log("wait");
    }
  };

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const items = await response.json();
        console.log(items);
        SetFirst({
          loading: true,
          data: items,
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  // const [User_Email, setUser_Email] = useState([]);

  console.log(first);

  function myFunction(value) {
    return value.email === text;
  }
  const Future = first.data.filter(myFunction);
  //  if(first.loading){console.log(Future[0].id);} else{console.log("wait")}
  console.log(first.data.filter(myFunction));

  if (!first.loading) {
    return <h1>ruko bhai</h1>;
  } else {
    return (
      <div style={{ border: "2px solid red" }}>
        <h1>chal raha haia</h1>
        <form action="">
          <Input
            type="text"
            onChange={(e) => {
              TextChangeHandle(e);
              console.log({ text });
            }}
            value={text}
          />
          <Input
            type="button"
            value={"submit"}
            name=""
            id=""
            onClick={SubmitButton}
          />
          <label htmlFor="id"> id: </label>
          <Input
            type="text"
            name="id"
            id=""
            value={key === "set" ? Future[0].id : "put a valid email id"}
          />
          <label htmlFor="name"> name: </label>
          <Input type="text" name="name" id=""    value={key === "set" ?  Future[0].name : "put a valid email id"} />
          <label htmlFor="phone"> phone: </label>
          <Input type="text"  name="phone" id=""  value={key === "set" ? Future[0].phone : "put a valid email id"} />
          <label htmlFor="username"> username: </label>
          <Input type="text"  name="username" id=""  value={key === "set" ? Future[0].username : "put a valid email id"} />
          <label htmlFor="website"> website: </label>
          <Input type="text"  name="website" id=""   value={key === "set" ? Future[0].website : "put a valid email id"} />
        </form>
        console.log({text})<h1></h1>
      </div>
    );
  }
}
