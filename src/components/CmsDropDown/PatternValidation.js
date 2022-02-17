import React, { useState } from "react";
import { Input } from "./PatternValidationStyle";
export default function Dropdown() {

  return (
    <div>
    <form autoComplete="off" action="">
        <label htmlFor="facebook">facebook :</label>
        <Input style={{cursor: "not-allowed"}} autoComplete="off" value="readonly"  readOnly  type="text" pattern="https://www.facebook.com/.+[a-zA-z0-9._%+- /@]" />
        <label htmlFor="instagram">instagram :</label>
        <Input  autoComplete="off"  type="text" pattern="https://www.instagram.com/.+[a-zA-z0-9._%+-/=? @]" />
        <label htmlFor="website">website :</label>
        <Input  autoComplete="off"  type="text" pattern="https?://.+" />
        <label htmlFor="linkedin">linkedin :</label>
        <Input  autoComplete="off"  type="text" pattern="https://www.linkedin.com/in/.+[a-zA-z0-9._%+-/ @]" />
        <label htmlFor="youtube">youtube :</label>
        <Input  autoComplete="off"  type="text" pattern="https://www.youtube.com/c/.+[a-zA-z0-9._%+-/ @]||https://www.youtube.com/channel/.+[a-zA-z0-9._%+-/ @]" />
        <label htmlFor="twitter">twitter :</label>
        <Input  autoComplete="off"  type="text" pattern="https://twitter.com/.+[a-zA-z0-9._%+-/=? @]" />
        <input type="submit" value="submit" />
    </form>
    </div>
  );
}
