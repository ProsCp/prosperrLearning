import React, { useState } from 'react';
// import './App.css';
export const Pincode  =()=>{
    
//   constructor(props) {
//     super(props);
 const [pincode, setpincode] = useState("")
 const [city, setcity] = useState(" ")
 const [district, setdistrict] = useState(" ")
 const [stateName, setstateName] = useState(" ")
 const [areaName, setareaName] = useState(" ");
 const [error, seterror] = useState(true);
    // this.state = {
//       pincode: '',
//       city: '',
//       district: '',
//       stateName: '',
//       areaName: '',
//       error: '',
//     };
//   }

  const onChange= (e)=> {
    setpincode({ [e.target.name]: e.target.value });
    console.log(e.target.value.length)
    if (e.target.value.length === 6) {
        seterror('');
      fetch(`https://api.postalpincode.in/pincode/${e.target.value}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          
              setstateName( res[0].PostOffice[0].State);
              setcity(res[0].PostOffice[0].Block);
              setdistrict( res[0].PostOffice[0].District);
              setareaName(res[0].PostOffice[0].Name);
              setpincode(res[0].PostOffice[0].Pincode)

            console.log(res[0].PostOffice[0].Pincode)
            // () => {
            //   const data = this.state;
            //   this.props.getData(data);
            // }
          
        })
        .then(() => {
          document.getElementById('pincode').classList.remove('error');
        })
        .catch((err) => {
          document.getElementById('pincode').className = 'error';
          
            seterror( "Invalid PIN Code");
          
        });
    }
    if (e.target.value.length !== 6) {
    //   this.setState({
        setcity('');
        setstateName( '');
        setdistrict('');
        seterror(` 'Pincode must be of 6 digits'}`);
    //   });
    }
  };
 
    const inputFields = [
      {
        name: 'Area',
        placeholder: 'Area Name',
        disabled: true,
        display:true,
        value: areaName,
        // display: this.props.showArea,
      },
      {
        name: 'City',
        placeholder: 'City',
        disabled: true,
        value: city,
        // display:true,

        // display: this.props.showCity,
      },
      {
        name: 'District',
        placeholder: 'District',
        disabled: true,
        value: district,
        display:true,
       
        // display: this.props.showDistrict,
      },
      {
        name: 'State',
        placeholder: 'State',
        disabled: true,
        value: stateName,
        display:true,
        // display: this.props.showState,
      },
    ];
  return <div>
       <div >
        {error ? (
          <span className="error-display">{error}</span>
        ) : null}

        <div >
          <input
            maxLength={6}
            minLength={6}
            onChange={(e) => onChange(e)}
            name="pincode"
            placeholder="Pin Code"
            value={pincode}
            id="pincode"
            type="number"
           
          />
        </div>
        {inputFields.map((field) => {
          return(
            field.display && (
              <div style={field.containerStyle} key={field.name}>
                <input
                  type="String"
                  disabled={field.disabled}
                  placeholder={field.placeholder}
                  value={field.value}
                  style={field.style}
                />
              </div>
            )
          );
        })}
      </div>
  </div>;

}
