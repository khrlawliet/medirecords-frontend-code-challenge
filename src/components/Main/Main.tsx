import React, { useState } from "react";
import Card from "../Card/Card";
import "./Main.css";

interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  const [outputValue, setOutputValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b,]+$/;
    console.log("testseteste");
    if (e.target.value === "" || regex.test(e.target.value)) {
      setInputValue(e.target.value);
      doubleValue(e.target.value);
    }
  };

  const doubleValue = (inputString: string): void => {
    const stringArray = inputString.split(",");

    const doubled = stringArray
      .filter((item) => !isNaN(parseInt(item)))
      .map((item) => parseInt(item) * 2);

    setOutputValue(doubled.toString());
  };

  return (
    <div className="main">
      <h1 className="main-title">Medirecords Front end Code Challenge</h1>
      <div className="main-holder">
        <Card
          title="Input"
          label="Array"
          onChange={handleOnChange}
          value={inputValue}
        />
        <Card title="Output" label="Double" value={outputValue} />
      </div>
    </div>
  );
};

export default Main;
