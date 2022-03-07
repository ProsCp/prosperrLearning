import React, {  useState } from "react";

const GetMobile = () => {
  const [data, setData] = useState({
    loading: true,
    value: "",
    type:"mobile"
  });
  const [Fetchdata, setFetchdata] = useState(null);
  const [LoadingForGetAdvisor, setLoadingForGetAdvisor] = useState(null)


  function updateValue(e) {
    // setData({ loading: true, value: e.target.value });
    console.log(data);
    console.log(e.target.value);
    console.log(data.value);

    // email or number validation function
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateOnlyNumbers(phone) {
  return phone.match(/^\d+$/);
}


  if (validateOnlyNumbers(e.target.value)) {
    if (e.target.value.length === 10) {
      console.log("phone number")
      setData({
        loading: true,
        value: `${e.target.value}`,
        type:"mobile"
        
      })
    } else {
      console.log("phone number")
      setData({
        loading: true,
        value: `${e.target.value}`,
        type:"mobile"
      })

    }
  } else {
    if (validateEmail(e.target.value)) {
      setData({
        loading: true,
        value: `${e.target.value}`,
        type:"Email"
      })
      console.log("Email ")

    } else {
      setData({
        loading: true,
        value: `${e.target.value}`,
        type:"Email"
      })
      console.log("Email ")
      // setData({type:"Email"})
    }
  }

  }
  
  const EmailSubmit=(e)=>{
    e.preventDefault() ;
    
      const url = `https://stage-apis.prosperr.io/advisors/v1/${data.type}/${data.value}`;
      console.log(url)
      if (data.loading) {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.text();
          console.log(data);
          setFetchdata( data);
          setLoadingForGetAdvisor(true);
        } catch (error) {
          console.log("error", error);
        }
      };
      
        fetchData();
      } else {
        console.log("chalo wait krrrrro");
      }
    }

  

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={data.value}
          key={1}
          onChange={(e) => updateValue(e)}
        />
        {"          "} 
        <button    onClick={(e)=>{EmailSubmit(e)}}> click me</button>
      </form>
     { LoadingForGetAdvisor?<div className="">{Fetchdata}</div>:null}
    </div>
  );
};

export default GetMobile;
