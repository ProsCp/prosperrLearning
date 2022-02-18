import React from "react";

const Button = ({ prev, func, children }) => {
  return (
    <div>
      <div className={prev} onClick={() => func()}>
        {children}
      </div>
    </div>
  );
};
export default Button;
