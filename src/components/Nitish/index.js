import React from 'react';


function MyButton({ onButtonClick, children }) {
  return (
    <button type="button" onClick={onButtonClick}>
      {children}
    </button>
  );
}


export default class Nitish extends React.Component {
  constructor() {
    super();
    this.state = {
      salute: 'hello'
    };
  }


  buttonAResponse() {
    alert(this.state.salute);
  }


  buttonBResponse = () => {
    alert(this.state.salute);
  };


  buttonCResponse() {
    alert(this.state.salute);
  }


  buttonDResponse = () => {
    alert(this.state.salute);
  };


  render() {
    return (
      <div>
        <h1>Which button will show salute?</h1>
        <MyButton onButtonClick={this.buttonAResponse}>Button A</MyButton>
        <br />
        <br />
        <MyButton onButtonClick={this.buttonBResponse}>Button B</MyButton>
        <br />
        <br />
        <MyButton onButtonClick={() => this.buttonCResponse()}>
          Button C
        </MyButton>
        <br />
        <br />
        <MyButton onButtonClick={() => this.buttonDResponse()}>
          Button D
        </MyButton>
      </div>
    );
  }
}